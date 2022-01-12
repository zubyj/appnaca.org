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

// Initialize and add the map
function initMap() {
    const norcal = { lat: 37.34017224895144, lng: -121.78553724593377 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: norcal,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: norcal,
      map: map,
    });
  }

// let email = document.getElementById("email");
// // Copies the email to clipboard on click.
// email.onclick = function() {
//     const el = document.createElement("textarea");
//     el.value = email.innerText;
//     document.body.appendChild(el);
//     el.select();
//     document.execCommand("copy")
//     document.body.removeChild(el);
//     oldText = email.innerHTML
//     email.innerHTML = "<span style='color: black;'>Copied to clipboard!</span>";
//     setTimeout(() => {  email.innerHTML = oldText; }, 3000);
// };

