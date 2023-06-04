//Variable 

let a:number 
// a = "hello" ERROR
//a = "false" ERROR
a = 200

let b:number | string | Date
b = 200;
//b = fasle ERROR
b = "true"
b = new Date();

let c:any;
c = true;
c = "hello"
c = 200;
c = new Date();

let f ;
f = "hello"
f = 250

//-------------------------------------

function func(age: number, name: string ){
    console.log(name + " is " + age + " years old")
}

func(22 , "Omri")