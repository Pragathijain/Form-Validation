let form=document.getElementById("form");
let username=document.getElementById("username");
let password=document.getElementById("password");
let errormsgs=document.getElementById("errormsgs");


//form submit
form.addEventListener("submit", e => {
    e.preventDefault();
    let message=[];
     if(username.value === "" || username.value === null){
         message.push("<p>username is required</p>");
         username.style.border= "1px solid red";
     }
     if(password.value === "" || password.value === null){
         message.push("<p>password id required</p>");
         password.style.border= "1px solid red";
     }
     if(password.value.length < 6){
         message.push("<p>Minimum character should be 6 characters</p>");
        password.style.border = "1px solid red";
     }
     if(password.length > 0 ){
         errormsgs.innerHTML = message.join(",");
     }
     else{
         console.log("username " + username.value , "password " + password.value);
     }
});

// username addEventListener("kryup", e=>{
//     let value=e.target.value;
//     if(value >6){
//         username.style.border="1px solid red";
//     }
// });