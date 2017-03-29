function removeStringValuesLongerThan(num, obj) {
  // your code here
  for(var key in obj){
    if(typeof(obj[key]==='string') && obj[key].length > num){
      delete obj[key];
    }
  }
  return obj;
}
removeStringValuesLongerThan(6, obj);
console.log(obj); // --> { b: 2, c: 'montana' }
