
sortArr(arr:any,srtProp:string,srtType:string,order:string){
		if(arr.length>0){
		  	if(srtType.toLowerCase()=='number'){
		  		let dArr = [];
				let dbArr = [];
				let arrr = arr;
				for(let item of arrr){
					if(item[srtProp] !="" && item[srtProp] !=null && item[srtProp] !=undefined ){
						dArr.push(item)
					}else{
						dbArr.push(item)
					}
				}

			  	dArr = dArr.sort((a, b)=> {
			  		if(order.toLowerCase()=='asc'){
					    return a[srtProp]- b[srtProp]
					}else{
					 	return b[srtProp]- a[srtProp]
					}
				});
				return dArr.concat(dbArr)

			}else if(srtType.toLowerCase()=='string'){
				let dArr = [];
				let dbArr = [];
				let arrr = arr;
				for(let item of arrr){
					if(item[srtProp] !="" && item[srtProp] !=null && item[srtProp] !=undefined ){
						dArr.push(item)
					}else{
						dbArr.push(item)
					}
				}
				dArr = dArr.sort((a, b)=>{
					  let strA = a[srtProp].toUpperCase(); 
					  let strB = b[srtProp].toUpperCase();
					  if(order.toLowerCase()=='asc'){ 
						  if (strA < strB) {return -1;}
						  if (strA > strB) {return 1;}
						  return 0;
					  }else{
				  		  if (strA > strB) {return -1;}
						  if (strA < strB) {return 1;}
						  return 0;
					  }
				})
				return dArr.concat(dbArr)

			}else if(srtType.toLowerCase()=='date'){
				let dArr = [];
				let dbArr = [];
				let arrr = arr;
				for(let item of arrr){
					if(item[srtProp] !="" && item[srtProp] !=null && item[srtProp] !=undefined ){
						dArr.push(item)
					}else{
						dbArr.push(item)
					}
				}
				dArr = dArr.sort((a, b) =>{
					if(order.toLowerCase()=='asc'){
						return new Date(a[srtProp]) - new Date(b[srtProp]);
					}else{
						return new Date(b[srtProp]) - new Date(a[srtProp]);
					}
				})
				return dArr.concat(dbArr)
			}
		}
	}
