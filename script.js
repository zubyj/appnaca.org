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
                $("#contactSubmitMsg").html('<span style="color:green">' + data.message + '</span');
                $('#spinner').addClass('hidden')
            })
            .fail(function (data) {
                $("#contactSubmitMsg").html('<span style="color:red">Sorry cant connect to the server. Please try again later.</span');
            })
    });
});