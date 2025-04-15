let personalinfo = { name:'olawale',age:30}
let contactinfo ={email:"olawale@gmail.com", phoneNumber: 9090}
Object.assign(personalinfo,contactinfo)
console.log(personalinfo)


// task 2
   let todos = {
    
      todo1:["coding"] ,
      todo2:["read"],
      todo3:["sleep"],
      todo3:["eat"] 
   }
   let key = Object.keys(todos)
let value =Object.values(todos)
console.log(value);
console.log(key);

if (key.includes('todo1') && todos.todo1.includes('coding')){
    console.log("coding  eixst");
    
} else{
    console.log('coding does not exist');
    
}
let mode ={
     theme: "dark",
     notification: true
}
  Object.freeze(mode)