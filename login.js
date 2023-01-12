const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});



function validname(){
    var regName = /^[A-Z._]{5,50}$/;
    var name = document.getElementById('name').value;
    if(!regName.test(name)){
        alert('name length should be 5 to 50,only alphabet and . -');
        //document.getElementById('nameerror').innerHTML='name length should be 5 to 50,only alphabet and . -';
        document.getElementById('name').focus();
        return false;
    }else{
        alert('Valid name given.');
        //document.getElementById('nameerror').innerHTML='your name is valid';
        return true;
    }
}

function validemail(){
    var regName = /^[a-z0-9]+@[a-z]+\.com$/;
    var email = document.getElementById('email').value;
    if(!regName.test(email)){
        alert('valid email structure with dot com domain');
        document.getElementById('email').focus();
        return false;
    }else{
        alert('Valid email given.');
        return true;
    }
}

function validphone(){
    var regName = /^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\d{8}$/;
    var phone = document.getElementById('phone').value;
    if(!regName.test(phone)){
        alert('please enter bangladeshi phone number with or without country code');
        document.getElementById('phone').focus();
        return false;
    }else{
        alert('Valid phone given.');
        return true;
    }
}

function validnid(){
    var regName = /^([1]{1}[0-9]{3}[-]{1}[5]{1}[0-9]{2}[-]{1}[6]{1}[0-9]{1})$/;
    var nid = document.getElementById('nid').value;
    if(!regName.test(nid)){
        alert(' provide this types of nid 1XXX-5XX-6X )X means number');
        document.getElementById('nid').focus();
        return false;
    }else{
        alert('Valid NID given.');
        return true;
    }
}

function validpass(){
    var regName = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
    var nid = document.getElementById('pass').value;
    if(!regName.test(nid)){
        alert(' Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:');
        document.getElementById('nid').focus();
        return false;
    }else{
        alert('Valid NID given.');
        return true;
    }
}