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
            {
                "imageSrc": "restaurant1",
                "imageAlt": "Two hamburgers next to each other on a cutting board.",
                "title": "Restaurant 1",
                "stars": 5, //out of 5
                "money": 3, //out of 3
                "description": "The most popular restaurant on the island"

            }
        ]
    },
    "grocery": {},
    "ent": {},
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

const items = dictionary[type]["items"];
const main = document.getElementById('main');

for (let i = 0; i < items.length; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.classList.add("t3card");
    cardDiv.classList.add("col-md")
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

        if (s <= (items[i]["stars"]-1)) {
            starImg.src = "images/fullStar.svg";
            starImg.alt = "A star icon that is filled in.";
            starImg.style.maxHeight = "1rem";
        }
        else {
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

    cardImg.onload = function() {

        const imgHeight = cardImg.clientHeight;
        const imgWidth = cardImg.clientWidth;

        overlayDiv.style.height = `${imgHeight}px`;

        starDiv.style.width = `${(imgWidth*0.045)*items[i]["stars"]*1.25}px`
        moneyDiv.style.width = `${(imgWidth*0.05)*1.875}px`
    };
}
