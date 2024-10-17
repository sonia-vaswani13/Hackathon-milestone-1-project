var loginform =document.getElementById('loginform');
var nameInput =document.getElementById('name');
var emailInput =document.getElementById('email');
var passwordInput = document.getElementById('password');
var educationInput = document.getElementById('education');
var skillInput = document.getElementById('skills');
var mobileInput = document.getElementById('mobile');
var togglepassword = document.getElementById('togglepassword');
var errorMessage= document.getElementById('errorMessage');
var profilePicInput = document.getElementById('profilePicInput');
var profilePicPreview =document.getElementById('profilePicPreview');

//Toggle password visibility
togglepassword.addEventListener('click',function (){
    var type =passwordInput.getAttribute('type') === 'password'?'text': 'password';
    passwordInput.setAttribute('type',type);
    togglepassword.textContent =type === 'password'? '👁️' :'🙈' ;
});

//handle form submission

loginform.addEventListener('submit' ,function(e){
    e.preventDefault();
    var name =nameInput.ariaValueMax.trim();
    var email =emailInput.value.trim();
    var password = passwordInput.value.trim();
    var education =educationInput.value.trim();
    var skills = skillInput.value.trim();
    var mobile = mobileInput.value.trim();
    if (!name || !email || !password || !mobile){
        errorMessage.textContent = 'please fill in all required fields.';
    }
    else{
        eroorMessage.textContent = '';
        console.log('Form submitted:' , {name:  name, email: email, password: password, education: education, skills: skills, mobile: mobile});
//you can add more functionality here like sending data to a server.
    }
});

//profile picture preview
profilePicInput.addEventListener('change', function(event){
    var target =event.target;
    var file =target.files ? target. files[0] : null;
    if (file){
        var reader_1 = new FileReader();
            reader_1 .onload =function(){
                profilePicPreview.src =reader_1.result;

            };
            reader_1.readAsDataURL(file);
            
    
        
    }
});

