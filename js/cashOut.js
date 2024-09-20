// setep -1 find cash out button
document.getElementById('button-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();
        console.log('cash out btn checked');

        // step -2 cash out input value find
        const cashOut = document.getElementById('cashout-input').value;
        const cashOutAmount = parseFloat(cashOut);
        const pinCheckCashOut = document.getElementById('pin-check-cashout').value;
        console.log(cashOutAmount, pinCheckCashOut);


        // step -3 valided pin number
        if(pinCheckCashOut === '1234' ){
            // step -4 find current balence 
            const balance = document.getElementById('account-balance').innerText;
            const currentBalance = parseFloat(balance);

            // step -5 reduce balance by cashout
            const newBalance = currentBalance - cashOutAmount;

            // step -6 update the DOM / UI
            document.getElementById('account-balance').innerText = newBalance;
            console.log(newBalance);
        }
        else{
            alert("Wrong information please try agian later");
        }

    });