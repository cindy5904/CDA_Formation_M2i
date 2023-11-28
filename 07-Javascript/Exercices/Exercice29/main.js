let newUser = [];

const monForm = document.getElementById("mon-form");
const emailValidElement = document.getElementById('email-validation')
const submitBtnElement = document.getElementById('submit-btn')
const monEmailElement = document.getElementById("email");
const monPasswordElement = document.getElementById("password");
const passwordValidElement = document.getElementById("password-validation");



monForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    console.log(e.value);
  });

  monEmailElement.addEventListener("input", (event) => {
    const inputElement = event.target;
    
    if (!inputElement.value) {
        
        inputElement.style.backgroundColor = "red";
        emailValidElement.style.display = 'block';
        emailValidElement.style.backgroundColor = "#B0F2B6"

        submitBtnElement.setAttribute('disabled', '');
      } else {
        inputElement.style.backgroundColor = "white";
        emailValidElement.style.display = 'none'
        submitBtnElement.removeAttribute('disabled');
      }
      
    })
    monPasswordElement.addEventListener("input", (event) => {
        const inputElement = event.target;
        
        if (!inputElement.value) {
            
            inputElement.style.backgroundColor = "red";
            passwordValidElement.style.display = 'block';
            passwordValidElement.style.backgroundColor = "#B0F2B6"

            submitBtnElement.setAttribute('disabled', '');  
        } else {
            inputElement.style.backgroundColor = "white";
            passwordValidElement.style.display = 'none';
            submitBtnElement.removeAttribute('disabled');
        }

    submitBtnElement.addEventListener("click", (event) => {
        event.preventDefault();
        const user = {
        email : monEmailElement.value,
        password : monPasswordElement.value,
}

        newUser.push(user);
        console.log(monEmailElement.value);
        console.log(monPasswordElement.value);
        console.log(newUser);
    });    
});
