const password = document.getElementById("pswrd");
const confirmPassword = document.getElementById("pswrdCnfrm");

function validatePasswords(){
    if (password.value !== confirmPassword.value){
        confirmPassword.setCustomValidity("Passwords do not match")
    } else {
        confirmPassword.setCustomValidity("");
    }
}

password.addEventListener("input", validatePasswords);
confirmPassword.addEventListener("input", validatePasswords);