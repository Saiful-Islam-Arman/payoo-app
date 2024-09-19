
// login form

// step -1 set event handler
document.getElementById('button-login')
    .addEventListener('click', function(event){
        // step - 2 prevent default behavior ( prevetn reloading browser)
        event.preventDefault();

        // step - 3 get the phone number & pin number
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        console.log(phoneNumber, pinNumber);

        // validate phone number and pin
        if(phoneNumber === '5' && pinNumber === '1234'){
            window.location.href ='home.html';
        }
        else{
            alert('wrong information');
        }

        // allow the user access

            
    })