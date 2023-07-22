$(document).ready(function () {
    $('.PDFFlip').hide(300)
})


function checkpassword() {
    const logpassword = document.getElementById('loginpass').value;

    if (logpassword === '1D7FACB2D1') {
        $('.formdisplay').hide(300);
        $('.PDFFlip').show(300)

    } else {
        $('.formdisplay').show(300);
        $('.PDFFlip').hide(300)
    }

}

