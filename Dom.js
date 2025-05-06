// /*
// DOM(Document Object Model )  Dom



// Selection 
// Content manipulation
// Attribute Manipulation 
// Nodes
// Style
// ClassList
// create Elements 

// Events 




// // by iD





// */

// // let mainTitle = document.getElementById("main");

// // let mainTitle = document.getElementsByClassName("cls");
// // let mainTitle=document.getElementsByTagName("h1"); []
// // let mainTitle=document.querySelector("h1");  one element 
// // let mainTitle=document.querySelectorAll("h1");  All  elements 
 

// // selection 


// let h1=document.querySelector("#main");


// // Content  innerText innerHTML

// // Read


// // console.log(h1.innerHTML);


// let link = document.querySelector("a");

// // Read 

// // console.log(link.href);

// // link.innerText="Youtube"
// // link.href="https://www.youtube.com"



// // Write


// // h1.innerText="<mark>Hello Engineers</mark>";



// // Attributes Manipulation 







// // let Sources=[
// //     "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
// //     "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
// //     "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
// // ]



// let button=document.querySelector("button");
// // let count=0;

// // button.addEventListener("click",()=>{
// //     let img = document.querySelector("img");

// //     if(count==0 || count==1){
// //         img.src=Sources[count];
// //         count++
        
// //     }else{
// //         count=0;
// //     }



// // })




// // style (css)


// // 2 methods element.style.property=value








//     // document.body.style.transition="0.5s";
//     // document.body.style.backgroundColor="black";


// // h1.style.cssText="color:red;background-color:black;padding:10px";



// // classlist 


// // add 
// // remove 
// // toggle 
// // button.onclick=()=>{
// //     // h1.classList.add("active");

// //     // h1.classList.remove("active");
// //     // h1.classList.toggle("active")
// // }



// // NODES 

// // parent   => parentElement
// // children 
// // next previous element sibling 


// let madiv=document.querySelector(".cls");


// // console.log(madiv.parentElement);
// // console.log(madiv.children);

// // console.log(madiv.nextElementSibling);
// //  console.log(madiv.previousElementSibling);



// // 









// // Create Elements 


// // let div = document.createElement("div");

// // let title= document.createElement("h1");

// // let p = document.createElement("p");


// // title.innerText="THis Title";
// // p.innerHTML="Omar fillali zamel";


// // div.append(title);
// // div.append(p);



// // document.body.append(div);
// // console.log(div)

// // // <div> 

// //     <h1></h1>
// //     <p></p>

// //     </div>










// // Events

// let btn = document.querySelector("button");
// // click dblclick   elm.onnom_de_l'evenement=()=>{}

//     // btn.ondblclick=()=>{
//     //     alert("Hello Omar");
//     // }


//     // document.querySelector("p").onclick=()=>{
//     //     alert("hello");
//     // }



// // mouse 

// // move 

// // document.querySelector("p").onmousemove=()=>{
// //     console.log("mouse moved");
// // }

// // enter
// // document.querySelector("p").onmouseenter=()=>{
// //      console.log("mouse entered");
// //  }
// // leave
// // document.querySelector("p").onmouseleave=()=>{
// //      console.log("mouse left");
// //  }


// // input 

// // focus blur input


// // document.querySelector("input").onfocus=()=>{
// //     console.log("focus");
// // }

// // blur 
// // document.querySelector("input").onblur=()=>{
// //     console.log("Blured");
// // }

// // input


// // let input=document.querySelector("input");
// // input.oninput=()=>{

// // if(!input.value.includes("@")){
// //     document.querySelector("p").innerText="This should be an email"
// // }else{
// //     document.querySelector("p").innerText="";
// // }
   
// // }

// // contextmenu


// // document.oncontextmenu=()=>{
// //     console.log("opened");
// // }


// // keyboard

// // document.onkeydown=(ev)=>{
// //     console.log(ev.key);
// // }


// // scroll


// // document.onscroll=()=>{
// //     console.log("you are scrolling");
// // }


// // selection

// // document.onselectstart=()=>{
// //     console.log("selected");
// // }







// // document.oncontextmenu=(ev)=>{
// //        ev.preventDefault();
// //        document.querySelector("nav").style.display="block";
// // }




// // document.querySelector("a").onclick=(ev)=>{

// //     ev.preventDefault(); // bloque un evenements
// // }



// // DOM


// // BOM
// // Ecmascripts 
// // Exercice (Projet)


// // BOM (Browser object Model )

// // alert confirm prompt print





// // setTimeout 


// // 









let btn =document.querySelector("button");



// sweetAlerts(Library)

btn.onclick=()=>{
    

    document.body.style.background="black";

     localStorage.setItem("bgcolor","black") ;

    // Swal.fire({
    //     title:"Mosqué Hassan 2",
    //     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAV_6YarXnkJNgh0_PaNikrSRgrAtCCXE71Q&s",
    //     imageHeight: 300,
    //     html:"<marquee>Hello</marquee>",
    //     imageAlt: "Mosqué",
    //     showConfirmButton:false,
    //     timer:4000
    //   });


    // let test=confirm("Do you want to exit");
    // let data=prompt("Insert Somethinf");
    // console.log(data);


    // print();


// setTimeout(arrowfunction,timeout)  timeout ms 1000ms => 1s


// setTimeout(()=>{
//      Swal.fire({
//         title:"Mosqué Hassan 2",
//         imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAV_6YarXnkJNgh0_PaNikrSRgrAtCCXE71Q&s",
//         imageHeight: 300,
//         html:"<marquee>Hello</marquee>",
//         imageAlt: "Mosqué",
//         showConfirmButton:false,
//         timer:4000
//       });
// },4000)








// setInterval

let i=10;
// setInterval(()=>{

// let p=document.querySelector("p");
// i--;
// if(i<=0){
//     p.innerText="";
//     alert("Download succed");
// }else{

//     p.innerHTML="The download will start in "+i+" Seconds ";
// }


// },1000)



// location 

    // setTimeout(()=>{
    //     // window.location.href="https://www.google.com"
    // },3000);
    
    // window.location.reload();




    // Localstorage vs Cookies


    // Set Item 

    localStorage.setItem("User","Omar");


    // get Item



}



document.querySelector("p").innerHTML=localStorage.getItem("User");




if(localStorage.getItem("bgcolor") != null){

    document.body.style.background=localStorage.getItem("bgcolor")
}



// BOM

// alert


// prompt
// confirm


// setTimeout


// setInterval 


// history


// location

// window.location.href="https://www.google.com"


// Localstorage 









