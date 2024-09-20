
// step -1 add money to the account

document.getElementById('button-add-money')
    .addEventListener('click', function(event){
       event.preventDefault(); 

       // step -2 amount set
       const addAmount = document.getElementById('add-money').value;
        console.log(addAmount);

       // step -3 check the pin number
        const pinNumber = document.getElementById('check-pin').value;
        if(pinNumber === '1234'){
            console.log('added money')
            // step -4 get the current balance
            const balance = document.getElementById('account-balance')
                .innerText;
            
            
            // step -5 add new amount with current balance
            const newBalance = parseFloat(balance) + parseFloat(addAmount);
            console.log(newBalance);

            // step -6 update new balance in dom
            document.getElementById('account-balance')
                .innerText = newBalance;
        }
        else{
            alert('Faild add money process! please try again');
        }
    })