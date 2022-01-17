# Website for APPNA's Northern California Chapter

Every Sunday, we're hosting [<b>free medical consultations</b>](https://appnaca.org/) in San Jose, CA. Check out the website for more info.
## Background
- (APPNA) The Association of Physicians of Pakistani Descent of North America
- American nonprofit organization 
- Third largest medical association in the United States after American Medical Association and the American Association of Physicians of Indian Origin.
## Technologies
#### Backend: ExpressJS, Nginx, DigitalOcean
#### Frontend: Bootstrap 4, Google Maps API, AJAX, JQuery
- Static web files served using [Nginx](https://jgefroh.medium.com/a-guide-to-using-nginx-for-static-websites-d96a9d034940)
- Server listens for contact form submit requests using [ExpressJS & AJAX](https://www.digitalocean.com/community/tutorials/submitting-ajax-forms-with-jquery)
- Server-side security & form validation using [best practices](https://expressjs.com/en/advanced/best-practice-security.html)
- Static web files & server hosted on [Digitalocean server](https://medium.com/@devalshah1619/hosting-a-static-website-on-digital-ocean-for-free-in-under-5-mins-31398e3d503d)
## Additional
- CORS enabled since client makes request at different port of same server. 
- Google maps background only shown on large devices (>768px)
- 
