// Form Validation


// username (5 - 10)

// email  contain username and  contain @   includes

// age sup ou egal 18 

// mobile 212 213 216
// domaine IT 

// password (8-15)
// confirm password == password

// advanced selection 

// let allImages=document.images // [] des image 
// let allLinks=document.links // [] des liens 

let Myform=document.forms; // [form1,form2]


let str="omarhassan";






Myform[0].onsubmit=(e)=>{


// Test Validation 

let userTest=Myform[0].username.value.length>5 && Myform[0].username.value.length<10 

let emailValiddation=Myform[0].email.value.includes(Myform[0].username.value) && Myform[0].email.value.includes("@");

let ageTest=Myform[0].age.value>=18;

let  Mobile=Myform[0].mobile.value.startsWith("212") || Myform[0].mobile.value.startsWith("213") || Myform[0].mobile.value.startsWith("216")

let domaineTest=Myform[0].domaine.value=="IT";


let pattern=/_|@|-/g;


let passwordValid=Myform[0].password.value.length>8 && Myform[0].password.value.length<10
&&   pattern.test(Myform[0].password.value);


let confirmPassValid=Myform[0].password.value == Myform[0].confirmpassword.value

console.log("User"+userTest);
console.log("age"+ageTest);
console.log("Mobile"+Mobile);
console.log("Email"+emailValiddation);
console.log("Domaine"+domaineTest);

console.log("Password"+passwordValid);
console.log("confriùm"+confirmPassValid);


if(userTest && emailValiddation && ageTest && Mobile && domaineTest && passwordValid &&confirmPassValid){
    // submit form

    Swal.fire({
        title: "Congrat's",
        text: "the form will be submitted in 3 s",
        icon: "success",
        timer:2000
      });


      setTimeout(()=>{
            Myform[0].submit();
      },1000)
    
}else{
    Swal.fire({
        title: "Somethin went Wrong",
        text: "please Respect validation",
        icon: "error",
        timer:1000
      });
      setTimeout(()=>{
        Myform[0].reset(); // reset the form 
      },2000)
}




  
}

