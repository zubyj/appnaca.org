$(function(){
    /* All mobile devices */
    if ($(window).width() < 992) {
        $('nav').removeClass('sticky-top')
    }
    /* Large devices (laptops/desktops, 992px and up) */
    else {
        $('nav').addClass('sticky-top')
    }
});

let email = document.getElementById("email");
// Copies the email to clipboard on click.
email.onclick = function() {
    const el = document.createElement("textarea");
    el.value = email.innerText;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy")
    document.body.removeChild(el);
    email.innerHTML = "Copied to clipboard!";
    setTimeout(() => {  email.innerHTML = "appnaca@gmail.com"; }, 3000);

};

