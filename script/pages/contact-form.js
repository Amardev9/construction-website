const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userPhoneNumber = document.getElementById('phone');
const submitBtn = document.querySelector('.form-btn');
const contactForm = document.querySelector('.contact-form');

const errorMessage = document.createElement('p');
errorMessage.setAttribute('class','error-required' );
const messageSuccess = document.querySelector('.form-success');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let empty = "";
    let isValid = true;
    if(userName.value == empty){
        errorMessage.textContent ="The field is required.";
        userName.parentElement.appendChild(errorMessage);
        return;
    }
    if(userEmail.value == empty){
        errorMessage.textContent ="The field is required.";
        userEmail.parentElement.appendChild(errorMessage);
        return;
    }
    if(userPhoneNumber.value == empty){
        errorMessage.textContent ="The field is required.";
        userPhoneNumber.parentElement.appendChild(errorMessage);
        return;
    }

    if(!userEmail.validity.valid == isValid){
        errorMessage.textContent = "The e-mail address entered is invalid."
        userEmail.parentElement.appendChild(errorMessage);
        return;
    }
   

    contactForm.classList.add('hide');
    console.log(messageSuccess);
    messageSuccess.classList.add('show');

})

