const queryString = window.location.search;

// Create a URLSearchParams object to easily work with parameters
const urlParams = new URLSearchParams(queryString);

const type = urlParams.get('type')
const number = urlParams.get('number')

