function newsLetter(contactForm) {
    emailjs.send("service_fgx81ok", "newsletter", {

            "from_email": contactForm.emailaddress.value

        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
}
