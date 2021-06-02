// credit to : https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+IFD101+2017_T3/courseware/03d3f6524ad249d9b33e3336d156dfd0/e4710f80cdf34bffbd607bc102482d5c/
function newsLetter(contactForm) {
    emailjs.send("service_fgx81ok", "newsletter", {

            "from_email": contactForm.emailaddress.value

        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                confirm("Welcome and thanks for signing up!", response);
            },
            function (error) {
                console.log("FAILED", error);
                confirm("Something Went Wrong. Please try again", error);
            }
        );
    return false; // To block from loading a new page
}