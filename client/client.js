// poor mans solution inject events in vanilla and form validation
let formInputs;
let formLabels;

window.document.addEventListener('DOMContentLoaded', () => {

    var orderNowButton = document.querySelector('#order-now-button');
    var orderForm = document.querySelector('#order-form');
    formInputs = {
        name: document.querySelector('#order-form-name'),
        email: document.querySelector('#order-form-email'),
        message: document.querySelector('#order-form-message'),
        submit: document.querySelector('#order-form-submit'),
    };
    formLabels = {
        name: document.querySelector('label[for="full-name"]'),
        email: document.querySelector('label[for="email"]'),
        message: document.querySelector('label[for="message"]'),
    };

    orderNowButton.addEventListener('click', () => {
        orderForm.scrollIntoView({
            behavior: 'smooth'
        });
    });

    formInputs.submit.addEventListener('click', () => {
        const value = {
            name: formInputs.name.value,
            email: formInputs.email.value,
            message: formInputs.message.value,
        }
        console.info(value);
        if ( isFormValid(value) ) {
            // submit email api & show success message
            console.info('FORM VALID!!!');
            fetch('/email', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(value)
            });
        }
    });
})
/**
 * SIMPLE FORM VALIDATION
 */
const grayText = 'text-gray-700'
const redText = 'text-red-500'
const fields = [ 'name', 'email', 'message' ]
const isFormValid = (value) => {
    clearValidation();
    const errors = fields.map( field => {
        if (!value[field]) {
            formLabels[field].classList.remove(grayText);
            formLabels[field].classList.add(redText);
            formInputs[field].classList.add('border');
            formInputs[field].classList.add('border-red-500');
            return true;
        }
    })
    return !errors.find( err => err === true );
}
const clearValidation = () => {
    fields.forEach(field => {
        // remove red if present
        formLabels[field].classList.remove(redText);
        formInputs[field].classList.remove('border');
        formInputs[field].classList.remove('border-red-500');
        // re-add gray if missing
        formLabels[field].classList.add(grayText);
    })
}