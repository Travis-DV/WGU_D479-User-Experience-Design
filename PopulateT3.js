const queryString = window.location.search;

// Create a URLSearchParams object to easily work with parameters
const urlParams = new URLSearchParams(queryString);

const type = urlParams.get('type');
const number = urlParams.get('number');

const dictionary = {
    "restaurant": {
        "navId": "tasteNav",
        "breadcrumbName": "Restaurants",
        "items": [
            { //1
                "imageSrc": "restaurant1",
                "imageAlt": "Two hamburgers next to each other on a cutting board.",
                "title": "American 1",
                "stars": 5, //out of 5
                "money": 3, //out of 3
                "description": "The most popular restaurant on the island."
            },
            { //2
                "imageSrc": "restaurant2",
                "imageAlt": "Four cooked fish in a row on a plate getting further from the camera.",
                "title": "Fish 1",
                "stars": 4, //out of 5
                "money": 3, //out of 3
                "description": "The second most popular restaurant on the island."
            },
            { //3
                "imageSrc": "restaurant3",
                "imageAlt": "A cooked fish resting on top of vegetables.",
                "title": "Fish 2",
                "stars": 1, //out of 5
                "money": 2, //out of 3
                "description": "The third most popular restaurant on the island."
            },
            { //4
                "imageSrc": "restaurant4",
                "imageAlt": "Roast beef sandwich with coleslaw on a long bun.",
                "title": "American 2",
                "stars": 5, //out of 5
                "money": 1, //out of 3
                "description": "The fourth most popular restaurant on the island."
            },
            { //5
                "imageSrc": "restaurant5",
                "imageAlt": "Multiple plates of food of multiple types.",
                "title": "Pan-Asian 1",
                "stars": 4, //out of 5
                "money": 2, //out of 3
                "description": "The Fifth most popular restaurant on the island."
            },
            { //6
                "imageSrc": "restaurant6",
                "imageAlt": "Multiple plates of food of multiple types.",
                "title": "Pan-Asian 2",
                "stars": 2, //out of 5
                "money": 1, //out of 3
                "description": "The Sixth most popular restaurant on the island."
            },
            { //7
                "imageSrc": "restaurant7",
                "imageAlt": "A white plate topped with two pieces of bread.",
                "title": "American 3",
                "stars": 5, //out of 5
                "money": 2, //out of 3
                "description": "The Seventh most popular restaurant on the island."
            },
            { //8
                "imageSrc": "restaurant8",
                "imageAlt": "A fish sitting on a plate of souse and potatoes.",
                "title": "Fish 3",
                "stars": 5, //out of 5
                "money": 3, //out of 3
                "description": "The Eighth most popular restaurant on the island."
            },
            { //9
                "imageSrc": "restaurant9",
                "imageAlt": "A plate of countless sushi.",
                "title": "Fish 4",
                "stars": 3, //out of 5
                "money": 3, //out of 3
                "description": "The Ninth most popular restaurant on the island."
            },
            { //10
                "imageSrc": "restaurant10",
                "imageAlt": "15 fish on a smoking rack.",
                "title": "Fish 5",
                "stars": 1, //out of 5
                "money": 3, //out of 3
                "description": "The Tenth most popular restaurant on the island."
            },
        ]
    },
    "grocery": {
        "navId": "tasteNav",
        "breadcrumbName": "Restaurants",
        "items": [
            { //1
                "imageSrc": "grocery1",
                "imageAlt": "A mildly run down deli and market.",
                "title": "Grocery 1",
                "stars": 4, //out of 5
                "money": 2, //out of 3
                "description": "The most popular grocery store on the island."
            },
            { //2
                "imageSrc": "grocery2",
                "imageAlt": "A brick bland market face named Waller's Market.",
                "title": "Grocery 2",
                "stars": 3, //out of 5
                "money": 1, //out of 3
                "description": "The second most popular grocery store."
            },
            { //3
                "imageSrc": "grocery3",
                "imageAlt": "A wide open store with many aisles of food.",
                "title": "Supermarket 1",
                "stars": 5, //out of 5
                "money": 3, //out of 3
                "description": "The most popular supermarket."
            },
            { //4
                "imageSrc": "grocery4",
                "imageAlt": "One long aisle packed with food.",
                "title": "Supermarket 2",
                "stars": 4, //out of 5
                "money": 2, //out of 3
                "description": "The second most popular supermarket."
            },
            { //5
                "imageSrc": "grocery5",
                "imageAlt": "A seven eleven coner store.",
                "title": "24h Convenience Store 1",
                "stars": 3, //out of 5
                "money": 2, //out of 3
                "description": "The only 24h store on the island."
            },
        ]
    },
    "ent": {
        "navId": "seeNav",
        "breadcrumbName": "Entertainment",
        "items": [
            { //1
                "imageSrc": "ent1",
                "imageAlt": "A helicopter high in the sky above a mountain.",
                "title": "Helicopter Ride",
                "stars": 5, //out of 5
                "money": 3, //out of 3
                "description": "Take a guided helicopter tour of the island."
            },
            { //2
                "imageSrc": "ent2",
                "imageAlt": "A woman swimming underwater with flippers and a snorkel.",
                "title": "Snorkeling",
                "stars": 4, //out of 5
                "money": 2, //out of 3
                "description": "Go snorkeling in the scenic bay."
            },
            { //3
                "imageSrc": "zipline1",
                "imageAlt": "A woman zip lining through the jungle.",
                "title": "Zip Lining",
                "stars": 4, //out of 5
                "money": 3, //out of 3
                "description": "Go zip lining through the jungle."
            },
            { //4
                "imageSrc": "golf1",
                "imageAlt": "An open grassy field with sand and water filled pits.",
                "title": "Golf 1 (Coming Soon!)",
                "stars": 5, //out of 5
                "money": 3, //out of 3
                "description": "Enjoy our new 9 hole golf course coming soon!"
            },
            { //5
                "imageSrc": "history1",
                "imageAlt": "A white and tan building.",
                "title": "History Museum",
                "stars": 4, //out of 5
                "money": 1, //out of 3
                "description": "Our history museum."
            },
            { //6
                "imageSrc": "art1",
                "imageAlt": "A woman with her back turned to the camera looking at seven art pieces.",
                "title": "Art Museum",
                "stars": 4, //out of 5
                "money": 1, //out of 3
                "description": "Our art museum."
            },
            { //7
                "imageSrc": "enta",
                "imageAlt": "A club with lots of dancing people and purple lazers.",
                "title": "Dance Club",
                "stars": 3, //out of 5
                "money": 2, //out of 3
                "description": "The only late night dance club."
            },
            { //8
                "imageSrc": "brew1",
                "imageAlt": "A line of distillery tanks in a row.",
                "title": "Micro Brewery",
                "stars": 4, //out of 5
                "money": 2, //out of 3
                "description": "Get a drink at the micro brewery."
            },
            { //9
                "imageSrc": "arc1",
                "imageAlt": "A bunch of bright and colorful game machines in a dark room.",
                "title": "Arcade",
                "stars": 3, //out of 5
                "money": 3, //out of 3
                "description": "The arcade."
            },
            { //10
                "imageSrc": "bowl1",
                "imageAlt": "The face of a bowling alley.",
                "title": "Bowling",
                "stars": 3, //out of 5
                "money": 3, //out of 3
                "description": "The bowling alley."
            },
            { //11
                "imageSrc": "bar1",
                "imageAlt": "A group of people standing in front of a yellow and red lit bar.",
                "title": "Bar 1",
                "stars": 3, //out of 5
                "money": 2, //out of 3
                "description": "The most popular bar on the island."
            },
            { //12
                "imageSrc": "bar2",
                "imageAlt": "A man filling two cups with a cocktail.",
                "title": "Bar 2",
                "stars": 3, //out of 5
                "money": 2, //out of 3
                "description": "The second most popular bar on the island."
            },
            { //13
                "imageSrc": "movie1",
                "imageAlt": "The face of a movie theater named central cinema.",
                "title": "Movie theater",
                "stars": 2, //out of 5
                "money": 3, //out of 3
                "description": "The movie theater."
            },
            { //14
                "imageSrc": "bar3",
                "imageAlt": "A woman leaning away from the bar as a drink is filled nex to her.",
                "title": "Bar 3",
                "stars": 2, //out of 5
                "money": 1, //out of 3
                "description": "The third most popular bar on the island."
            },
            { //15
                "imageSrc": "fish1",
                "imageAlt": "the entry to a dock named kure beach pier.",
                "title": "Fishing tours",
                "stars": 2, //out of 5
                "money": 1, //out of 3
                "description": "Go on fishing tours to find the best spots."
            },
            { //16
                "imageSrc": "bar4",
                "imageAlt": "A man poring a draft bear.",
                "title": "Bar 4",
                "stars": 1, //out of 5
                "money": 3, //out of 3
                "description": "The third most popular bar on the island."
            },
        ]
    },
    "sight": {},
    "travel": {},
    "hotel": {},
    "ground": {}
};

if (!Object.hasOwn(dictionary, type)) {
    throw new Error(type + " Broke :(");
}

//Tell the page which link in the header nav is active so the user knows too.
let navlink = document.getElementById(dictionary[type]["navId"]);
navlink.classList.add("active");
navlink.setAttribute("aria-current", "page")

//create list item element for breadcrumb
const breadcrumbListElement = document.createElement("li");
breadcrumbListElement.classList.add("breadcrumb-item");
breadcrumbListElement.classList.add("active");

//create link element for list item
const breadcrumbLinkElement = document.createElement("a");
breadcrumbLinkElement.classList.add("fw-bold");
breadcrumbLinkElement.classList.add("breadcrumb-link");
breadcrumbLinkElement.href = "tier3.html?type=" + type + "&number=" + number;
breadcrumbLinkElement.setAttribute("aria-current", "page");
breadcrumbLinkElement.style.color = "#003B6D";
breadcrumbLinkElement.textContent = dictionary[type]["breadcrumbName"];

//put it all together
breadcrumbListElement.append(breadcrumbLinkElement);
let breadcrumb = document.getElementById("breadcrumbList");
breadcrumb.append(breadcrumbListElement);

function everything() {

    const items = dictionary[type]["items"];
    const main = document.getElementById('main');
    main.innerHTML = "";

    const moneyFilter = document.querySelector('input[name="money"]:checked').value;
    const starFilter = document.querySelector('input[name="stars"]:checked').value;

    for (let i = 0; i < items.length; i++) {
        if (items[i]["stars"] < starFilter) {
            console.log("Star Filter: " + starFilter + ". Star: " + items[i]["stars"]);
            continue;
        }
        if (items[i]["money"] > moneyFilter) {
            console.log("Money Filter: " + moneyFilter + ". Money: " + items[i]["money"]);
            continue;
        }

        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.classList.add("t3card");
        cardDiv.classList.add("col");
        main.append(cardDiv);

        let cardImg = document.createElement("img");
        cardImg.classList.add("card-img-top");
        cardImg.src = "images/" + type + "/" + items[i]["imageSrc"] + ".jpg";
        cardImg.alt = items[i]["imageAlt"];
        cardDiv.append(cardImg);

        let overlayDiv = document.createElement("div");
        overlayDiv.classList.add("card-img-overlay");
        overlayDiv.classList.add("p-0");
        overlayDiv.classList.add("d-flex");
        overlayDiv.classList.add("flex-column");
        cardDiv.append(overlayDiv);

        let cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.classList.add("t3CardTitle");
        cardTitle.classList.add("w-auto");
        cardTitle.classList.add("p-1");
        cardTitle.textContent = items[i]["title"];
        overlayDiv.append(cardTitle);

        let iconDiv = document.createElement("div");
        iconDiv.classList.add("mt-auto");
        iconDiv.classList.add("p-1");
        iconDiv.classList.add("d-flex");
        iconDiv.classList.add("flex-row");
        iconDiv.classList.add("iconDiv")
        overlayDiv.append(iconDiv);

        let starDiv = document.createElement("div");
        starDiv.classList.add("d-flex");
        starDiv.classList.add("justify-content-center");
        iconDiv.append(starDiv);

        for (let s = 0; s < 5; s++) {

            let starImg = document.createElement("img");
            starImg.classList.add("mt-auto");

            if (s <= (items[i]["stars"] - 1)) {
                starImg.src = "images/fullStar.svg";
                starImg.alt = "A star icon that is filled in.";
                starImg.style.maxHeight = "1rem";
            } else {
                starImg.src = "images/emptyStar.svg";
                starImg.alt = "A star icon that is not filled in.";
                starImg.style.maxHeight = "1rem";
            }

            starDiv.append(starImg);
        }

        let moneyDiv = document.createElement("div");
        moneyDiv.classList.add("ms-auto");
        moneyDiv.classList.add("d-flex");
        moneyDiv.classList.add("justify-content-center");
        iconDiv.append(moneyDiv);

        for (let m = 0; m < items[i]["money"]; m++) {
            let moneyImg = document.createElement("img");
            moneyImg.classList.add("mt-auto");
            moneyImg.src = "images/money.svg";
            moneyImg.alt = "A star icon that is filled in.";
            moneyImg.style.maxHeight = "1rem";
            moneyDiv.append(moneyImg);
        }

        let cardBodyDiv = document.createElement("div");
        cardBodyDiv.classList.add("card-body");
        cardDiv.append(cardBodyDiv);

        let cardTextP = document.createElement("p");
        cardTextP.classList.add("card-text");
        cardTextP.textContent = items[i]["description"];
        cardBodyDiv.append(cardTextP);

        cardImg.onload = function () {

            const imgHeight = cardImg.clientHeight;
            const imgWidth = cardImg.clientWidth;

            overlayDiv.style.height = `${imgHeight}px`;

            starDiv.style.width = `${(imgWidth * 0.045) * 5 * 1.25}px`
            moneyDiv.style.width = `${(imgWidth * 0.05) * 1.5 * 1.25}px`
        };
    }
}

everything();
window.addEventListener('resize', everything);
const moneyFilters = document.querySelectorAll('input[name="money"]');
moneyFilters.forEach(radioButton => {
    radioButton.addEventListener('change', everything);
});

const starFilters = document.querySelectorAll('input[name="stars"]');
starFilters.forEach(radioButton => {
    radioButton.addEventListener('change', everything);
});