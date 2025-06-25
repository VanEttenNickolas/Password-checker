function checkPassword(){
    let password = document.getElementById("password").value;
    let errorMessage = "";

    let criteria = [
        {regex: /[a-z]/, message: "At least one lowercase letter is required."},
        {regex: /[A-Z]/, message: "At least one uppercase letter is required."},
        {regex: /[0-9]/, message: "At least one number is required."},
        {regex: /[\W_]/, message: "At least one special character is required."},
        {regex: /.{8,}/, message: "Minimum length is 8 characters long"}
    ];

    for(let i=0; i<criteria.length; i++){
        if(!criteria[i].regex.test(password)){
            errorMessage += "<li>" +criteria[i].message + "</li>";
        }
    }

    if(errorMessage === ""){
        document.getElementById("result").innerHTML = "Your password is strong!"
    } else {
        document.getElementById("result").innerHTML = "<ul>" + errorMessage + "</ul>";
    }
}