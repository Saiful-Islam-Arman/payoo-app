// show the cashout section
document.getElementById('btn-show-cashout')
    .addEventListener('click', function(event){
        event.preventDefault();
        // show cashout form 
        console.log('checked cashout');
        document.getElementById('form-cashout')
            .classList.remove('hidden');

        // hide the add money form
        document.getElementById('form-add-money')
            .classList.add('hidden');
    });

    // show add money form and hide the cash out form

    document.getElementById('btn-show-addmoney')
        .addEventListener('click', function(event){
            event.preventDefault();

            // show add money form 
            document.getElementById('form-add-money')
                .classList.remove('hidden');

            // hide cashout form
            document.getElementById('form-cashout')
                .classList.add('hidden');

        })