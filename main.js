var x = document.getElementById("login");
var y = document.getElementById("signup");
var z = document.getElementById("btt");

function signup(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}

function signUp() {
    var signupnhap = document.getElementById('signupnhap');
    var signuppass = document.getElementById('signuppass');
    var agree = document.getElementById('t&c');
    if(signupnhap.value.length == 0 && signuppass.value.length == 0){
        alert('Please fill in Username and Password');
    } else if(signupnhap.value.length == 0){
        alert('Please fill in Username');
    }
    else if(signuppass.value.length == 0){
        alert('Please fill in Password');
    }
    else if(!agree.checked){
        alert('Please agree the terms & conditions')
    } else{
        localStorage.setItem('signupnhap', signupnhap.value);
        localStorage.setItem('signuppass', signuppass.value);
        alert('Your account has been created');
        document.getElementById("signup").reset();
    }
}

function logIn(){
    var storedName = localStorage.getItem('signupnhap');
    var storedPw = localStorage.getItem('signuppass');

    var userName = document.getElementById('loginnhap');
    var userPw = document.getElementById('loginpass');
    
    if(userName.value == storedName && userPw.value == storedPw){
        alert('Logged in. Welcome ' + userName.value);
    }else{
        alert('Wrong Password or Username');
    }
}
