$(function(){
    /* All mobile devices */
    if ($(window).width() < 992) {
        $('nav').removeClass('sticky-top')
    }
    /* Large devices (laptops/desktops, 992px and up) */
    else {
        $('nav').addClass('sticky-top')
    }

    $("form").on("submit", function(event) {

        var formData = {
            name: $("#inputName").val(),
            email: $("#inputEmail").val(),
            message: $("#inputMessage").val(),
        };

        // stop page from refreshing on submit click.
        event.preventDefault();

        $.ajax({
            type: "POST",
            url: "https://appnaca.org:1000",
            data: formData,
            dataType: "json",
            encode: true,
            timeout: 5000,
            beforeSend: function() {
                $('#spinner').removeClass('hidden')
            }
        })
            .done(function(data) {
                $("#contactSubmitMsg").html('<span style="color:white;background-color: #006600; padding: 0.5rem;border-radius: 10px">' + data.message + '</span');
                $('#spinner').addClass('hidden')
            })
            .fail(function (data) {
                $("#contactSubmitMsg").html('<span style="color:red">Sorry cant connect to the server. Please try again later.</span');
            })
    });
});

/* Typewriter effect */
// set up text to print, each item in array is new line
var aText = new Array(
    "Strengthening cross-community collaboration",
    "to support community services & initiatives"
);

var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
    
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
    
function typewriter()
{
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    var destination = document.getElementById("typedtext");
    
    while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
    iArrLength = aText[iIndex].length;
    setTimeout("typewriter()", 500);
    }
    } else {
    setTimeout("typewriter()", iSpeed);
    }
}

/* Scrolling animations */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry.target.id)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');

            if (entry.target.id === 'typedtext') {
                typewriter();
            }
        }
    });
})

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((el) => observer.observe(el));
