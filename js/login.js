// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step-2: get the emai address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password
    // 3.a: set id on the html Element
    // 3.b:get the Element
    // 3.c:get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password);

    // Danger: do not verify email password on the clind side
    // step-4: verify email and password and check valid user or not 
    if (email === 'liton@gmail.com' && password === '1987') {

        window.location.href = 'bank.html';
        //     console.log('Valid user')
    }

    else {
        // console.log('Invalid user')
        alert("WOW enter your valid email or password")
    }
})