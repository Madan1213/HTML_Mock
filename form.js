
let password = document.getElementById("pwd")
let eye = document.getElementById("eye")
function togglepassword()
{
    if(password.type=="password")
    {
        password.type="text"
        eye.className="fa fa-eye-slash"
    }
    else
    {
        password.type="password"
        eye.className="fa fa-eye"
    }
}

function validate()
{
    let user = document.getElementById("user")
    let username=user.value;
    let pwd = document.getElementById("pwd")
    let password = pwd.value;
    let msg = document.getElementById("msg")
    let pmsg = document.getElementById("pmsg")
    let reg = /^[A-Za-z]+$/g
    // let reg1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}/
    let reg1 = /^[0-9]+$/
    let check = document.getElementById("check").checked
    let checkbox = check
    let cmsg = document.getElementById("cmsg")
    if(!username)
    {
        msg.style.display="block"
        msg.innerText="Username required!"
        
        
        return false
    }
    else if(!reg.test(username))
    {
        msg.style.display="block"
        msg.innerText="Username should be alphabets"
        return false
    }
    else if(username.length<5)
    {
        msg.style.display="block"
        msg.innerText="Username require atleaset 5 character"
        return false
    }
    else if(username.length>10)
    {
        msg.style.display="block"
        msg.innerText="Username should be max 10 character"
        return false
    }
    else if(username)
    {
        msg.style.display="none"
        
    }
    // Password validation
    if(!password)
    {
        pmsg.style.display="block"
        pmsg.innerText="Password required!"
        return false
    }
    else if(!reg1.test(password))
    {
        pmsg.style.display="block"
        pmsg.innerText="Invalid Password"
        return false
    }
    else if(password)
    {
        pmsg.style.display="none"
    }
    // CheckBox condition

    if(!checkbox)
    {
        cmsg.style.display="block"
        cmsg.innerText="Please accept the T&C"
        return false
    } 
    else if(checkbox)
    {
        cmsg.style.display="none"
    }  
}

