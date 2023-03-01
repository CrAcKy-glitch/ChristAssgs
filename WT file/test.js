const name1=document.getElementById("name");
const email=document.getElementById("email");
const college=document.getElementById("college");
const mssg=document.getElementById("message");
const pass=document.getElementById('password');
const course =document.getElementById('course');
const pass1=document.getElementById('pass1');
const phone =document.getElementById('phone');
document.querySelector('#contain').style.backgroundColor="whitesmoke";
const span=document.getElementById('span');
var check=1;

if(check==1){
    span.style.display='block';
    check=2;
}
else{
    console.log('workign');
}

function formation(){
const mainis=document.getElementById('contain');
mainis.style.transition='0.7s ease-out display';
mainis.style.display='block';
span.style.display='none';
    return true;
}
function checkFields(){

    if(name1.value.trim()==''||email.value.trim()==''||college.value.trim()==''||course.value.trim()==''||pass.value.trim()==''){
        mssg.innerHTML="Pls fill in all the fields";
        mssg.style.border="2px solid red";
        return false;
    }
    else
    mssg.innerHTML="";

    return true;

}

// function disableAll(var sto){
// const dis=document.querySelectorAll('input');
// dis.style.editable="false";

// }

function checkName(){
    let valu=name1.innerText;
    let matcher='/[^interface2024]*{1}+$/i';
    matche='interface2024';
    if(matcher!=(valu)){
        mssg.innerHTML='pls write interface2024 before your name'
        // disableAll('name');
        return false;
    }
    else{
        mssg.innerHTML='';
    }
    // enableAll();
    return true;
}
function checkEmail(){
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    mssg.innerHTML='VALID EMAIL ID'
    mssg.style.color='green';
    return (true)
  }
  mssg.innerHTML='you have entered an invalid email id';
  mssg.style.border='2px solid red';
    return (false)
}

function checkCourse(){
    var valueof=course.innerHTML;
    if(valueof=='\BCA\i' || valueof=='\BSC\i'){
        return true;
    }
    return false;
}
function comparePass(){
if(pass.value==pass1.value){
mssg.innerHTML="";
    return true;
}
else
mssg.innerHTML='Passwords dont match';
return false;
}

function changeView(){

    const thankyou=document.getElementById('thankyou');
    thankyou.style.display=block;
    thankyou.display.color='white';
const mainis=document.getElementById('contain');
mainis.style.display='none';
    return false;

}


function checkPassword(){
var hell=pass.innerHTML;
if(hell!='/@_%$#/i' ||hell!='/123456789/i' &&  hell.length<9)
{
    mssg.innerHTML='minimum 9 characters a special character and a number';
    mssg.style.border="2px solid red";
return false;
}
else
mssg.innerHTML='';
return true;

}
function backIt(){
    location.reload();
}

function checkPhone(){

    if(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone.value)){
        mssg.innerHTML="";
        return true;
    }
    else
    mssg.innerHTML="invalid phone number"
    return false;
}


function retReference(){
if(checkFields()==false){
mssg.innerHTML="Pls fill in all the fields";
mssg.style.border="2px solid red";
return false;
}
   window.alert("your reference id is "+Math.ceil(Math.random()*1000));
   window.print();
   return true;
}