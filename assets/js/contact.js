function submitMail(contactForm) {
    emailjs.send("service_fgx81ok", "icoffeemap", {
            "from_firstname": contactForm.firstname.value,
            "from_lastname": contactForm.lastname.value,
            "from_email": contactForm.emailaddress.value,
            "from_message": contactForm.message.value

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