// circle animate text
const circleType = new CircleType(
    document.getElementById("rotated")
).radius(20);
$(window).scroll(function() {
    var offset = $(window).scrollTop();
    offset = offset * .2;
    $(".circular-text").css({
        "-moz-transform": "rotate(" + offset + "deg)",
        "-webkit-transform": "rotate(" + offset + "deg)",
        "-o-transform": "rotate(" + offset + "deg)",
        "-ms-transform": "rotate(" + offset + "deg)",
        "transform": "rotate(" + offset + "deg)"
    });
});

// Email Button
let mailBtnEl = document.getElementById('mailBtn');
mailBtnEl.addEventListener('click', function sendMail() {

    const inputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
    let allFilled = true;

    inputs.forEach(function(input) {
        if (input.value.trim() === '') {
            allFilled = false;
        }
    });

    if (!allFilled) {
        alert('Please fill in all the fields.');
    } else {
        var params = {
            from_name: document.getElementById("fullName").value,
            email_id: document.getElementById("emailId").value,
            mobile_no: document.getElementById("mobileNo").value,
            subject: document.getElementById("emailSubject").value,
            message: document.getElementById("emailContent").value,
        };
        console.log(params);
        emailjs.send("service_h4fy952", "template_02iw3f8", params)
            .then(res => {
                alert("Your Mail Send Successfully! " + res.status);
                console.log(res.status);
            })
            .catch(error => alert("Error Occured Try Again! " + error.message));
    }
});