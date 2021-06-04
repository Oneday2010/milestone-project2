//--------------------------------- Modal //
// Credit to [rudgerga](https://github.com/rudberga/CI-MS2-inspiry-tokyo) / [codepen](https://codepen.io/Ayn_/pen/vmVKZV)

var cafeList = [
    //1
    {
        name: "Wall & Keogh  <img class='lastImg' src = 'assets/images/cafesDublin2/wallKeogh.jpg'>",
        food: "Yes",
        sits: "Max of 16people",
        address: "<a href ='https://goo.gl/maps/gr5347sZAPWsnuxW6' target ='_blank'> Dublin2 </a>",
        review: "<a href ='https://mindfulmapping.wordpress.com/2017/06/13/wall-keogh-dublin2/' target ='_blank'>Click here</a>"
    },
    //2
    {
        name: "IFI Café Bar <img class='lastImg' src = 'assets/images/cafesDublin2/ifi.jpg'>",
        food: "No",
        sits: "Max of 30people",
        address: "<a href ='https://goo.gl/maps/V1RbJw8A3AQJtcaAA' target ='_blank'> Dublin2 </a>",
        review: "<a href ='https://mindfulmapping.wordpress.com/2017/06/08/ifi-cafe-bar-dublin2/' target = '_blank'>Click here</a>"
    },
    //3
    {
        name: "Fallon & Byrne <img class='lastImg' src = 'assets/images/cafesDublin2/fallonandbyrne.jpg'>",
        food: "Yes",
        sits: "Max of 24people",
        address: "<a href ='https://goo.gl/maps/fSZFFWrZxUuedeJWA' target ='_blank'> Dublin2 </a>",
        review: "<a href ='https://mindfulmapping.wordpress.com/2017/06/01/fallon-byran/' target = '_blank'>Click here</a>"
    },

    //4
    {
        name: "The Pepper Pot <img class='lastImg' src = 'assets/images/cafesDublin2/pepperpot.jpg'>",
        food: "No",
        sits: "Max of 28people",
        address: "<a href = 'https://goo.gl/maps/eSJrAaFfZ8HBUFASA' target ='_blank'> Dublin2 </a>",
        review: "<a href = 'https://mindfulmapping.wordpress.com/2017/06/01/the-pepper-pot-cafe-dublin-2/' target = '_blank'>Click here</a>"
    },

    //5
    {
        name: "3FE <img class='lastImg' src = 'assets/images/cafesDublin2/3fe.jpg'>",
        food: "Yes",
        sits: "Max of 34people",
        address: "<a href = 'https://goo.gl/maps/TJG7KFgW6XwTmhwG7' target ='_blank' > Dublin2 </a>",
        review: "<a href = 'https://mindfulmapping.wordpress.com/2017/05/31/3fe-dublin2/' target = '_blank'>Click here</a>"
    },
    //6
    {
        name: "Two Fifty Square <img class='lastImg' src = 'assets/images/cafesDublin6/twofiftySquare.jpg'>",
        food: "Yes",
        sits: "Max of 58people",
        address: "<a href = 'https://g.page/twofiftysquare?share' target ='_blank' > Dublin6 </a>",
        review: "<a href = 'https://mindfulmapping.wordpress.com/2017/07/14/two-fifty-square-dublin-6/' target = '_blank'>Click here</a>"
    },
    //7
    {
        name: "Grove Road Cafe <img class='lastImg' src = 'assets/images/cafesDublin6/groveroad.jpg'>",
        food: "Yes",
        sits: "Max of 16people",
        address: "<a href = 'https://g.page/groveroadcafe?share' target ='_blank'> Dublin6 </a>",
        review: "<a href = 'https://mindfulmapping.wordpress.com/2017/05/25/grove-road/' target ='_blank'>Click here</a>"
    },
    //8
    {
        name: "Little Bird <img class='lastImg' src = 'assets/images/cafesDublin8/littlebird.jpg'>",
        food: "Yes",
        sits: "Max of 18people",
        address: "<a href = 'https://g.page/littlebirdcoffeeyoga?share' target ='_blank'> Dublin8 </a>",
        review: "< a href = 'https://mindfulmapping.wordpress.com/2017/07/12/little-bird-dublin8/' target ='_blank'>Click here </a>"
    },
    //9
    {
        name: "The Cake Cafe <img class ='lastImg' src = 'assets/images/cafesDublin8/cakecafe.jpg'>",
        food: "Yes",
        sits: "Max of 26people",
        address: "<a href = 'https: //g.page/thecakecafedublin?share' target ='_blank'> Dublin8 </a>",
        review: "<a href = 'https://mindfulmapping.wordpress.com/2017/06/21/the-cake-cafe-dublin8/' target = '_blank'>Click here</a>"
    },
    //10
    {
        name: "Container Coffee <img class='lastImg' src = 'assets/images/cafesDublin8/containercafe.jpg'>",
        food: "No",
        sits: "Max of 38people",
        address: "<a href = 'https://goo.gl/maps/aWXt8BkWDy2t8CCi6' target ='_blank'> Dublin8 </a>",
        review: "<a href = 'https://mindfulmapping.wordpress.com/2017/06/19/container-coffee-dublin8/' target = '_blank'>Click here</a>"
    },
    //11
    {
        name: "The Fumbally <img class='lastImg' src = 'assets/images/cafesDublin8/fumbally.jpg'>",
        food: "Yes",
        sits: "Max of 54people",
        address: "<a href = 'https://goo.gl/maps/dCL65agvnUPiYAvh7' target ='_blank'> Dublin8 </a>",
        review: "<a href = 'https://mindfulmapping.wordpress.com/2017/05/26/the-fumbally-dublin8/' target ='_blank'>Click here</a>"
    },
    //12
    {
        name: " Brother Hubbard <img class='lastImg' src = 'assets/images/cafesDublin8/brotherhubbard.jpg'>",
        food: "Yes",
        sits: "Max of 28people",
        address: "<a href = 'https://goo.gl/maps/k5gQa49RUcnMBNKR9' target ='_blank'> Dublin8 </a>",
        review: "<a href = 'https://mindfulmapping.wordpress.com/2017/05/18/brother-hubbard-south/' target = '_blank'>Click here</a>"
    }
];

// there are some suggestions does't match with above cafe, input extra options to make final result
var suggestions = {
    food: "1,3,5,6,7,8,9",
    dessert: "2,3,4,5,10,11,12",
    manysits: "2,4,5,6,10,11,12",
    cozy: "1,3,4,7,8,9,10",
    americano: "1,2,3,4,5,6,8,9",
    cappucino: "1,2,3,4,5,7,9,10,11",
    latte: "2,3,5,6,9,10,11,12",
};

// Array to temporary store the values (So the last selection can be deleted in case "BACK" is pressed)
var selections = [];

var inputs = [];
var suggested = [];

function containing(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == key) {
            return true;
        }
    }
    return false;
}

$(document).ready(function () {
    prep_modal();
});

function prep_modal() {
    $(".modal").each(function () {
        var element = this;
        var pages = $(this).find(".modal-split");

        if (pages.length != 0) {
            pages.hide();
            pages.eq(0).show();

            var backButton = document.createElement("button");
            backButton.setAttribute("type", "button");
            backButton.setAttribute("class", "btn btn-light");
            backButton.setAttribute("style", "display: none;");
            backButton.innerHTML = "Back";

            var nextButton = document.createElement("button");
            nextButton.setAttribute("type", "button");
            nextButton.setAttribute("class", "btn btn-light");
            nextButton.setAttribute("id", "nextBtn");
            //Disable the NEXT button Until a selection is chose
            nextButton.disabled = true;
            nextButton.innerHTML = "Next";

            $(this).find(".modal-footer").append(backButton).append(nextButton);

            var pageCount = 0;

            $(nextButton).click(function () {
                this.blur();
                //Disable the NEXT button until a selection is chose
                nextButton.disabled = true;

                if (pageCount == 0) {
                    $(backButton).show();
                }

                if (pageCount <= pages.length - 2) {
                    //Push the selection in the Temporal Array (See HTML attribute "DATA-SUGGEST" on each selection)
                    selections.push($(".selected").attr("data-suggest"));
                    //Remove the selected class on every selection
                    $(".radio").removeClass("selected");
                }

                if (pageCount == pages.length - 2) {
                    //When all three selections chose, loop through the temporal array to return a Suggestion
                    selections.map(sel => {
                        suggest(sel);
                    });
                    $(nextButton).text("Finish");
                    nextButton.disabled = false;
                }

                if (pageCount == pages.length - 1) {
                    pageCount = -1;
                    $(nextButton).text("Next");
                    $(backButton).hide();
                    $("#myModal").modal("hide");
                    document.getElementById("name").innerHTML = "";
                    document.getElementById("food").innerHTML = "";
                    document.getElementById("sits").innerHTML = "";
                    document.getElementById("address").innerHTML = "";
                    document.getElementById("review").innerHTML = "";
                    //Empty the global arrays when FINISH is pressed
                    inputs = [];
                    suggested = [];
                    selections = [];
                }

                if (pageCount < pages.length - 1) {
                    pageCount++;

                    pages.hide();
                    pages.eq(pageCount).show();
                }
            });

            $(backButton).click(function () {
                //Empty the final arrays when BACK is pressed
                inputs = [];
                suggested = [];
                //Remove the last element in the temporal array
                selections.pop();
                //Disable the NEXT button everytime BACK is pressed
                nextButton.disabled = true;
                if (pageCount == 1) {
                    $(backButton).hide();
                }

                if (pageCount == pages.length - 1) {
                    $(nextButton).text("Next");
                }

                if (pageCount > 0) {
                    pageCount--;

                    pages.hide();
                    pages.eq(pageCount).show();
                }
            });
        }
    });
}

$(document).ready(function () {
    $(".radio-group .radio").click(function () {
        $(".radio").removeClass("selected");
        $(this).addClass("selected");
        //Remove the disabled attribute of the NEXT button upon selection
        $("#nextBtn").prop("disabled", false);
    });
});

function suggest(index) {
    let numbers = suggestions[index].split(",");
    for (let i = 0; i < numbers.length; i++) {
        inputs.push(Number(numbers[i]));
    }
    if (index == "americano" || index == "cappucino" || index == "latte") {
        for (let i = 0; i < inputs.length; i++) {
            let count = 0;
            for (let j = 0; j < inputs.length; j++) {
                if (inputs[i] == inputs[j]) {
                    count++;
                }
            }
            if (count == 3 && containing(suggested, inputs[i]) == false) {
                suggested.push(inputs[i]);
            }
        }
        var random = suggested[Math.floor(Math.random() * suggested.length)] - 1;
        document.getElementById("name").innerHTML =
            "<strong></strong>" + cafeList[random].name;
        document.getElementById("food").innerHTML = 'FOOD - ' +
            " " + cafeList[random].food;
        document.getElementById("sits").innerHTML = 'SITS - ' +
            " " + cafeList[random].sits;
        document.getElementById("address").innerHTML = 'ADDRESS - ' + " " + cafeList[random].address;
        document.getElementById("review").innerHTML = 'REVIEW - ' +
            " " + cafeList[random].review;

    }
}