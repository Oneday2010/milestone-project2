function newsLetter(contactForm) {
    emailjs.send("service_fgx81ok", "newsletter", {

            "from_email": contactForm.emailaddress.value

        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                alert("Welcome and thanks for signing up!", response);
            },
            function (error) {
                console.log("FAILED", error);
                alert("Something Went Wrong. Please try again", error);
            }
        );
    return false; // To block from loading a new page
}