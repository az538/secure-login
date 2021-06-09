let i;
let hack;
let password;
let name12;
let age32;
function logIn(){
    if(document.getElementById('1').value != ""){
        event.preventDefault();
    if(document.getElementById('2').value != ""){
        event.preventDefault();
        if(document.getElementById('user-pass').value != ""){
            password = document.getElementById('user-pass').value
            name12 = document.getElementById('2').value 
            age32 = document.getElementById('1').value 
            document.getElementById('name').innerHTML = name12 + age32 + ">"  
                    document.getElementById('password-holder').innerHTML = password;
                    document.getElementById("password-holder").classList.add('console3');
                    document.getElementById("password-holder").classList.remove('console2');

                    document.getElementById("cover").classList.remove('hide');
                    
                     console.log(password)
                     event.preventDefault();
                     document.getElementById("urMum").innerHTML = 'You have been hacked ez data stolen :)'
                     document.getElementById("cover").classList.add('cover')
                


        } else{
            alert("fill out your password")
        }
    }else{
        alert("fill out Name box")
    }
}
else{
    alert("fill out Age box")
}
}


            /*while(hack != true){
    i = document.getElementById('pass').innerHTML;
}*/