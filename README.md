Form
<h2 md-dialog-title class="m-b-10">Create new rik <span class="close-modal" (click)="Cancel()"><i class ="material-icons">&#xE5CD;</i></span><h2>
<div class = "adjust-modal">
<form #userForm ="ngForm" class="formcontainer">
<div class="panel panel-default p-5">
<div class="row">
<div class = "col-md-6">
<md-form-field class="full-width">
<label>Title<span class="required">*</span></label>
<input mdInput name = "Title" [(ngModel)]="selectedTitle">
</md-form-field>
<span class = "Error-msg" *nfIf='showTitle'>Please Enter aValue</span>
</div>
 
<div class="col-md-3">
<label class="datepik-fix">Date<span class="required">*</span></label>
<md-form-field>
<input [readonly]="false" mdInput [min]="mindate" [mdDatePicker]="liveDate" name="liveDate" [(ngModel)] ="selectedLDt">
<md-datepicker-toggle mdSuffix [For]="liveDate"></md-datepicker-toggle>
<md-datepicker #liveDate><md-datepicker>
</md-form-field>
<span class="Error-msg" *ngIf="errliveDate">Please enter date</span>
</div>
<div class="button-row pull-right">
<a (click)="cancel()" style=""cursor:pointer">CAncel</a>
<a md-raised-button color="accent" (click)="addRequest(userForm.value)" (keyup.space)="addrequest(userForm.value)" (keyup.enter)="addrequest(userForm.value)"</a>

</div>
</form

Common

export class CommonService {
site:string = _spPageContextInfo.webAbsoluteUrl;
siteContext = new SP.ClientContext(this.site);
currentWeb = this.siteContext.get_web();
col = [];
itemId;
bulkUpdateId = null;
digest : string = '';

constructor (private http :Http,public snackBar:MdSnackBar){}
restQuery (list :string ,queryUrl :string) :Promise<any>{
return this.http.get(this.site + "/_api/Web/Lists/getbytitle('" + list +"')/Items?" +queryUrl)
	.toPromise()
	.then(
	response =>response.json().value;
)}

restUrl(queryUrl:string):Promise<any> {
	return this.http.get(queryUrl)
	.toPromise()
	.then(
	response =>response.json().value==undefined ? response :response.json().value;
)}
	
}

insertItem(list:string ,type:string):Promise <any>{
	let listcol :any = this.currentWeb.get_lists().getByTitle(list);
	let listItem = null;
	if(this.itemId === undefined){
		let itemCreateInfo = new SP.ListItemCreationInformation();
		listItem = listCol.getItemById(this.itemId);
	}
else if(this.itemId !=null && type =='Update'){
	listItem = listCol.getItemById(this.itemId);
}
}
for(let elem of this.col){
	if(element[2] == 'PeoplePicker'){
	var users = [];
	var username = '';
	var get_peoplePickerObj = SPClientPeoplePicker.SPClientPeoplePickerDict[elem[1]+'_TopSpan'];
	var get_peoplePickerUser = get_peoplePickerObj.GetAllUserInfo();
	for(let user of get_peoplePickerUser){
		username =user.key;
	users.push(SP.FieldUserValue.fromUser(username));

	}
	listItem.set_item(elem[0],users);
}
else if (element [2] == 'peoplePickerArray'){
var users = [];
for(let username of element[1]){
users.push(SP.FieldUserValue.fromUser(username));
}
listItem.set_item(elem[0],users);

}
else if(element[2]==''MultiLookUp){
var ele_lookup_arr=[];
for(let ele of element[1]){
var lookupvar = new SP.FieldLookUpValue();
lookupvar.set_lookupId(ele);
ele_lookup_arr.push(lookupvar);
}
listItem.set_item(element[0],ele_lookup_arr);
}
else{
listItem.set_item(element[0],element[1]);
}
	
});
listItem.update();
this.siteContext.load(listItem);
return new Promise(resolve=>{
this.sitecontext.executeQueryAsync(done,fail);
function done(){
	resolve(listItem)
}
function fail(sender,args){
console.log(args)
}
})
}
updateItem(list:string):Promise<any>

{
return this.insertItem(list,'Update');
}
