console.log("In script.js")

const handleSubmit = () => 
{
    console.log("btn clicked")

    const username = document.getElementById(username).value
    const password = document.getElementById(password).value

    var usernameRegex = /^[a-zA-Z]+$/;
    var passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/;

    const errors = [];

    if(!username || !password)
    {
        alert("Please Enter all the details");
        return;
    }

    if(!usernameRegex.test(username))
    {
        errors.push("Username in Wrong format");
    }

    if(username.length<6)
    {
        errors.push("Username should have atleast 6 characters")
    }

    if(!passwordRegex.test(password)){
        errors.push("Password in the wrong format");
    }

    if(username.length<8)
    {
        errors.push("Password should have atleast 8 characters")
    }

    if(errors.length>0)
    {
        const erros=errors.join("\n");
        alert(error);
    }
    else{
        alert("Sucessfully Submitted")
    }

}