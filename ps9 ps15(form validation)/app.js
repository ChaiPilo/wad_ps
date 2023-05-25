console.log("In app.js")

const handleSubmit = () => {
    console.log("btn clicked");

    const Firstname = document.getElementById("Name").value;
    const email = document.getElementById("Email").value;
    const Lastname = document.getElementById("LastName").value;
    const password = document.getElementById("password").value;
    const contact = document.getElementById("number").value;

    //console.log(Firstname, email, Lastname, password);

    var nameRegex = /^[a-zA-Z]+$/;
    var emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    var mobileRegex = /^\d{10}$/;

    // Chittti pe likh k jaane ka.....
     

    const errors = [];


    if(!Firstname || !email || !Lastname || !password){
        alert("Please Enter all the details");
        return;
    }

    if(!nameRegex.test(Firstname)){
        errors.push("Name in the wrong format");
    }

    if(Firstname.length < 6){
        errors.push("Name must have atleast 6 characters")
    }

    if(!nameRegex.test(Lastname)){
        errors.push("Name in the wrong format");
    }

    if(Lastname.length < 6){
        errors.push("Name must have atleast 6 characters")
    }

    if(password.length < 6) {
        errors.push("Password must have atleast 6 characters");
    }

    if(!emailRegex.test(email)){
        errors.push("Email in the wrong format");
    }

    if(!mobileRegex.test(contact)){
        errors.push("Mobile number should have 10 digits.")
    }

    if(errors.length > 0){
        const error = errors.join("\n");
        alert(error);
    }
    else {
        alert("Successfully submitted");
    }
}