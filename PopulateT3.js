const queryString = window.location.search;

// Create a URLSearchParams object to easily work with parameters
const urlParams = new URLSearchParams(queryString);

const type = urlParams.get('type');
const number = urlParams.get('number');

const dictionary = {
    "restaurant": {
        "navId": "tasteNav",
        "breadcrumbName": "Restaurants"
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