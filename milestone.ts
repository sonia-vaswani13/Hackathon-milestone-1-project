const loginform =document.getElementById('loginform') as HTMLFormElement;
const nameInput =document.getElementById('name')as HTMLInputElement;
const emailInput =document.getElementById('email') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;
const educationInput = document.getElementById('education')  as HTMLInputElement;
const skillInput = document.getElementById('skills')  as HTMLInputElement;
const mobileInput = document.getElementById('mobile')  as HTMLInputElement;
const togglepassword = document.getElementById('togglepassword') as HTMLElement;
const errorMessage= document.getElementById('errorMessage')  as HTMLElement;
const profilePicInput = document.getElementById('profilePicInput')  as HTMLInputElement;
const profilePicPreview =document.getElementById('profilePicPreview') as HTMLImageElement;
//Toggle password visibility

togglepassword.addEventListener('click' ,() =>{
    const type = passwordInput.getAttribute('type') == 'password'? 'text':'password';
    passwordInput.setAttribute('type',type);
    togglepassword.textContent= type ==='password'? '👁️' :'🙈' ;
});
