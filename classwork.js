let personalinfo = { name:'olawale',age:30}
let contactinfo ={email:"olawale@gmail.com", phoneNumber: 9090}
Object.assign(personalinfo,contactinfo)
console.log(personalinfo)


// task 2
   let product = {
    
      tproduct1:"coding",
      product2:"perfume",
      product3:"soap",
      product4:"oil"
   }
   let keys = Object.keys(product)
let values =Object.values(product)
console.log(keys,values);

 keys.forEach((keys,i) => {
     console.log(`${keys} ${values[i]}`);
     
 });
 

let settings ={
     theme: "dark",
      color: "white",
      notifications:true
    
}
 Object.freeze(settings)
 settings.theme = 'light'
 console.log(settings);
 console.log(Object.isFrozen(settings));
 
  