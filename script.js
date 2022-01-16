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


        $.ajax({
            type: "POST",
            url: "https://appnaca.org:1000",
            data: formData,
            dataType: "json",
            encode: true,
            timeout: 5000,
        })
            .done(function(data) {
                $("#contactSubmitMsg").text('Succesfully connected to server')
                console.log('dis da message')
                console.log(data.message);
            })
            .fail(function (data) {
                $("#contactSubmitMsg").html('<span style="color:red">Sorry cant connect to the server. Please try again later.</span');
                // $("#contactSubmitMsg").text("Sorry can't connect to the server. Please try again later.");
            })
         event.preventDefault();
    });
});