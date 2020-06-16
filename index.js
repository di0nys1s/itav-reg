$('.ui.dropdown').dropdown();
$('.ui.checkbox').checkbox();

$('.ui.form')
    .form({
        fields: {
            name: 'empty',
            donatorFirstName: 'empty',
            donatorLastName: 'empty',
            donatorEmail: 'empty',
            donatorMobile: 'empty',
            donatorPostcode: 'empty',
            donatorCountry: ['minCount[1]', 'empty'],
            recipientFirstName: 'empty',
            recipientLastName: 'empty',
            recipientEmail: 'empty',
            recipientPostcode: 'empty',
            donationAmount: 'empty',
            cardNumber: 'empty',
            cardCVC: 'empty',
            cardExpireMonth: ['minCount[1]', 'empty'],
            cardExpireYear: 'empty',
            terms: 'checked'
        }
    });