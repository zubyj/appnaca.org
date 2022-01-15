$(function(){
    /* All mobile devices */
    if ($(window).width() < 992) {
        $('nav').removeClass('sticky-top')
    }
    /* Large devices (laptops/desktops, 992px and up) */
    else {
        $('nav').addClass('sticky-top')
    }



    $("form").on(function(event) {
        var formData = {
            name: $("#inputName").val(),
            email: $("#inputEmail").val(),
            message: $("#inputMessage").val()
        };
        $.ajax({
            type: "POST",
            url: "appnaca.org:1000",
            data: formData,
            dataType: "json",
            encode: true,
        }).done (function(data) {
            console.log(data);
        });

        // prevent form from reloading page on submission.
        event.preventDefault();
    });
});

