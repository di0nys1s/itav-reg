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

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#uploaded-image').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
}

$("#imgInp").change(function () {
    readURL(this);
});

$("#check-auto").checkbox({
    onChecked: function () {
        console.log("Autosend email now!");
    }
});

$("#check-manual").checkbox({
    onChecked: function () {
        console.log("Manually send email later!");
    }
});