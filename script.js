const form=document.getElementById("form");
const email=document.getElementById("email");

form.addEventListener("submit",function(e){
    e.preventDefault();
    if(email.value === ""){
        showerror(email,"Check your email please");
    }
    else{
        showsuccess(email);
    }
    
})

function showerror(input,message){
    const fromControl=input.parentElement;
    fromControl.className="form-control error";
    const small=fromControl.querySelector("small");
    small.innerText=message;
}

function showsuccess(input){
    const fromControl=input.parentElement;
    fromControl.className="form-control success"
}