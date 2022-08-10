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
    var Username = document.getElementById('signupnhap').value;
    var Password = document.getElementById('signuppass').value;
    var agree = document.getElementById('t&c');
    if(Username.length == 0 && Password.length == 0){
        alert('Please fill in Username and Password');
    } else if(Username.length == 0){
        alert('Please fill in Username');
    } else if(Password.length == 0){
        alert('Please fill in Password');
    } else if(!agree.checked){
        alert('Please agree the terms & conditions')
    } else {
        let data = JSON.parse(localStorage.getItem('data')) || [];
        let exist = data.length && JSON.parse(localStorage.getItem('data')).some(data => data.Username.toLowerCase() == Username.toLowerCase());
        if(!exist){
            data.push({ Username, Password });
            localStorage.setItem('data', JSON.stringify(data));
            document.getElementById('signupnhap').focus();
            alert("Account created");
        } else{
            alert("Account already existed");
        }
    }
    console.log(JSON.parse(localStorage.getItem('data')));
}

function logIn() {
    var username = document.getElementById('loginnhap').value,
        password = document.getElementById('loginpass').value;
        
    let data = JSON.parse(localStorage.getItem('data'));
    let exist = data.length && JSON.parse(localStorage.getItem('data')).some(data => data.Username.toLowerCase() == username && data.Password.toLowerCase() == password);
    if(!exist){
        alert("Incorrect login credentials");
        console.log(JSON.parse(localStorage.getItem('data')));
    }
    else{
        alert("Logged in. Welcome " + `${username}`);
        console.log(JSON.parse(localStorage.getItem('data')));
    }
}
