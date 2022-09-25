// poor mans solution inject events in vanilla and form validation
window.document.addEventListener('DOMContentLoaded', () => {
    console.info('helllllow, document is ready');

    var orderNowButton = document.querySelector('#order-now-button');
    
    var orderForm = document.querySelector('#order-form');
    const formInputs = {
        name: document.querySelector('#order-form-name'),
        email: document.querySelector('#order-form-email'),
        message: document.querySelector('#order-form-message'),
        submit: document.querySelector('#order-form-submit'),
    };

    orderNowButton.addEventListener('click', () => {
        // orderForm.scrollIntoView();
        orderForm.scrollIntoView({
            behavior: 'smooth'
        });
    });
    formInputs.submit.addEventListener('click', () => {
        console.info({
            name: formInputs.name.value,
            email: formInputs.email.value,
            message: formInputs.message.value,
        });
    });



                            // onClick={ () => .scrollIntoView() }
                            // onclick="document.querySelector('#order-form').scrollIntoView()"
})