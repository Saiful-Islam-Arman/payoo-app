
// add money to the account

document.getElementById('button-add-money')
    .addEventListener('click', function(event){
       event.preventDefault(); 
       
       // amount set
       const addAmount = document.getElementById('add-money').value;
        console.log(addAmount);

       // check the pin number
        const pinNumber = document.getElementById('check-pin').value;
        if(pinNumber === '1234'){
            console.log('added money')
        }
        else{
            console.log('wrong pin number');
        }
    })