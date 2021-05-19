var cafe = [


    //1
    {
        name: "Wall & Keogh",
        food: " yes",
        sits: "max of 16people",
        address: "<a href = 'https: //goo.gl/maps/gr5347sZAPWsnuxW6' target ='_blank' > Dublin2 </a>",
        review: "< a href = 'https: //mindfulmapping.wordpress.com/2017/06/13/wall-keogh-dublin2/' target = '_blank'><span><p> click here </p></span>< img src = 'assets/images / cafesDublin2 / wallKeogh.jpg'></a>"
    },
    //2
    {
        name: "IFI Café Bar",
        food: " no",
        sits: "max of 30people",
        address: "<a href = 'https: //goo.gl/maps/V1RbJw8A3AQJtcaAA' target ='_blank' > Dublin2 </a>",
        review: "< a href = 'https: //mindfulmapping.wordpress.com/2017/06/08/ifi-cafe-bar-dublin2/' target = '_blank'><span><p> click here </p></span>< img src = 'assets/images/cafesDublin2 / ifi.jpg'></a>"
    },
    //3
    {
        name: " Fallon & Byrne",
        food: " yes",
        sits: "max of 24people",
        address: "<a href = 'https://goo.gl/maps/fSZFFWrZxUuedeJWA' target ='_blank' > Dublin2 </a>",
        review: "< a href = 'https://mindfulmapping.wordpress.com/2017/06/01/fallon-byran/' target = '_blank'><span><p> click here </p></span>< img src = 'assets/images / cafesDublin2 / fallonandbyrne.jpg'></a>"
    },

    //4
    {
        name: "The Pepper Pot",
        food: " no",
        sits: "max of 28people",
        address: "<a href = 'https://goo.gl/maps/eSJrAaFfZ8HBUFASA' target ='_blank' > Dublin2 </a>",
        review: "< a href = 'https://mindfulmapping.wordpress.com/2017/06/01/the-pepper-pot-cafe-dublin-2/' target = '_blank'><span><p> click here </p></span>< img src = 'assets/images / cafesDublin2 / pepperpot.jpg '></a>"
    },

    //5
    {
        name: "3FE",
        food: " yes",
        sits: "max of 34people",
        address: "<a href = 'https://goo.gl/maps/TJG7KFgW6XwTmhwG7' target ='_blank' > Dublin2 </a>",
        review: "< a href = 'https://mindfulmapping.wordpress.com/2017/05/31/3fe-dublin2/' target = '_blank'><span><p> click here </p></span>< img src = 'assets/images / cafesDublin2 / 3 fe.jpg'></a>"
    },
    //6
    {
        name: "Two Fifty Square",
        food: "yes",
        sits: "max of 58people",
        address: "<a href = 'https://g.page/twofiftysquare?share' target ='_blank' > Dublin6 </a>",
        review: "< a href = 'https://mindfulmapping.wordpress.com/2017/07/14/two-fifty-square-dublin-6/' target = '_blank'><span><p> click here </p></span>< img src = 'assets/images / cafesDublin6 / twofiftySquare.jpg '></a>"
    },
    //7
    {
        name: "Grove Road Cafe",
        food: " yes",
        availability: "max of 16people",
        address: "<a href = 'https: //g.page/groveroadcafe?share' target ='_blank' > Dublin6 </a>",
        review: "< a href = 'https://mindfulmapping.wordpress.com/2017/05/25/grove-road/' target = '_blank'><span><p> click here </p></span>< img src = 'assets/images / cafesDublin6 / groveroad.jpg'></a>"
    },
    //8
    {
        name: "Little Bird",
        food: " yes",
        sits: "max of 18people",
        address: "<a href = 'https: //g.page/littlebirdcoffeeyoga?share' target ='_blank' > Dublin8 </a>",
        review: "< a href = 'https: //mindfulmapping.wordpress.com/2017/07/12/little-bird-dublin8/' target = '_blank'><span><p> click here </p></span>< img src = 'assets/images / cafesDublin8 / littlebird.jpg'></a>"
    },
    //9
    {
        name: "The Cake Cafe",
        food: " yes",
        sits: "max of 26people",
        address: "<a href = 'https: //g.page/thecakecafedublin?share' target ='_blank' > Dublin8 </a>",
        review: "< a href = 'https://mindfulmapping.wordpress.com/2017/06/21/the-cake-cafe-dublin8/' target = '_blank'><span><p> click here </p></span>< img src = 'assets/images / cafesDublin8 / cakecafe.jpg '></a>"
    },
    //10
    {
        name: "Container Coffee",
        food: "no",
        sits: "max of 38people",
        address: "<a href = 'https: //goo.gl/maps/aWXt8BkWDy2t8CCi6' target ='_blank' > Dublin8 </a>",
        review: "< a href = 'https://mindfulmapping.wordpress.com/2017/06/19/container-coffee-dublin8/' target = '_blank'><span><p> click here </p></span>< img src = 'assets/images / cafesDublin8 / containercafe.jpg'></a>"
    },
    //11
    {
        name: "The Fumbally",
        food: " yes",
        sits: "max of 54people",
        address: "<a href = 'https: //goo.gl/maps/dCL65agvnUPiYAvh7' target ='_blank' > Dublin8 </a>",
        review: "< a href = 'https://mindfulmapping.wordpress.com/2017/05/26/the-fumbally-dublin8/' target = '_blank'><span><p> click here </p></span>< img src = 'assets/images / cafesDublin8 / fumbally.jpg'></a>"
    },
    //12
    {
        name: " Brother Hubbard",
        food: " yes",
        sits: "max of 28people",
        address: "<a href = 'https: //goo.gl/maps/k5gQa49RUcnMBNKR9' target ='_blank' > Dublin8 </a>",
        review: "< a href = 'https://mindfulmapping.wordpress.com/2017/05/18/brother-hubbard-south/' target = '_blank'><span><p> click here </p></span>< img src = 'assets/images / cafesDublin8 / brotherhubbard.jpg '></a>"
    }
];






$(document).ready(function () {
    prep_modal();
});

function prep_modal() {
    $(".modal").each(function () {

        var element = this;
        var pages = $(this).find('.modal-split');

        if (pages.length != 0) {
            pages.hide();
            pages.eq(0).show();

            var b_button = document.createElement("button");
            b_button.setAttribute("type", "button");
            b_button.setAttribute("class", "btn btn-primary");
            b_button.setAttribute("style", "display: none;");
            b_button.innerHTML = "Back";

            var n_button = document.createElement("button");
            n_button.setAttribute("type", "button");
            n_button.setAttribute("class", "btn btn-primary");
            n_button.innerHTML = "Next";

            $(this).find('.modal-footer').append(b_button).append(n_button);


            var page_track = 0;

            $(n_button).click(function () {

                this.blur();

                if (page_track == 0) {
                    $(b_button).show();
                }

                if (page_track == pages.length - 2) {
                    $(n_button).text("Submit");
                }

                if (page_track == pages.length - 1) {
                    $(element).find("form").submit();
                }

                if (page_track < pages.length - 1) {
                    page_track++;

                    pages.hide();
                    pages.eq(page_track).show();
                }


            });

            $(b_button).click(function () {

                if (page_track == 1) {
                    $(b_button).hide();
                }

                if (page_track == pages.length - 1) {
                    $(n_button).text("Next");
                }

                if (page_track > 0) {
                    page_track--;

                    pages.hide();
                    pages.eq(page_track).show();
                }


            });

        }

    });
}