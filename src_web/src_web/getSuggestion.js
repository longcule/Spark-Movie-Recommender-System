const csvFilePath = '/movies.csv';
const csvDelimiter = ','; // Specify the delimiter used in your CSV file
var movieList = [];
var imdbId = [];
/**
 * This function fetches a CSV file containing a list of movies and parses it using a specified
 * delimiter.
 * @param csvFilePath - The file path of the CSV file that contains the movie list data.
 * @param csvDelimiter - The csvDelimiter parameter is a string that specifies the delimiter character
 * used in the CSV file to separate the values in each row. Common delimiters include commas (,),
 * semicolons (;), and tabs (\t).
 */
async function fetchMovieList(csvFilePath, csvDelimiter) {
    try {
        const response = await fetch(csvFilePath);
        const data = await response.text();
        movieList = parseCSV(data, csvDelimiter);
    } catch (error) {
        console.error(error);
    }
}

/**
 * The function fetches a CSV file from a given path and delimiter, parses it, and logs the resulting
 * data.
 * @param csvFilePath - The file path of the CSV file that contains the IMDb IDs.
 * @param csvDelimiter - The csvDelimiter parameter is a string that specifies the character used to
 * separate values in the CSV file. Common delimiters include commas (,), semicolons (;), and tabs
 * (\t).
 */
async function fetchImdbList(csvFilePath, csvDelimiter) {
    try {
        const response = await fetch(csvFilePath);
        const data = await response.text();
        imdbId = parseCSV(data, csvDelimiter);
        console.log(imdbId);
    } catch (error) {
        console.error(error);
    }
}
fetchImdbList("./links.csv", csvDelimiter);
fetchMovieList(csvFilePath, csvDelimiter);
/**
 * The function parses CSV data and returns an array of objects with headers as keys and corresponding
 * values.
 * @param csvData - a string containing comma-separated values (CSV) data
 * @param delimiter - The delimiter parameter is a string that specifies the character used to separate
 * values in the CSV data. Common delimiters include commas, semicolons, and tabs.
 * @returns an array of objects, where each object represents a row in the CSV data. The keys of each
 * object are the headers of the CSV data, and the values are the corresponding values in the row.
 */
function parseCSV(csvData, delimiter) {
    const lines = csvData.split('\n');
    const headers = lines[0].split(delimiter);
    const result = [];

    for (let i = 1; i < lines.length; i++) {
        if (lines[i].trim() !== '') {
            const obj = {};
            const currentLine = lines[i].split(delimiter);

            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentLine[j];
            }

            result.push(obj);
        }
    }

    return result;
}


const searchBar = document.getElementById('search-input');
const suggestionsContainer = document.getElementById('suggestions-container');

/* This code block adds an event listener to the search bar input field. Whenever the input value
changes, it clears the suggestions container, gets the current input value, and filters the movie
titles list to find titles that start with the current input value. It then populates the
suggestions container with up to 10 suggestions that match the input value. If there are no
suggestions, it rounds the corners of the search bar. If the input value is empty, it clears the
suggestions container and rounds the corners of the search bar. Finally, if there are suggestions,
it removes the rounded corners of the search bar. */
searchBar.addEventListener('input', () => {
    document.getElementById('suggestions-container').innerHTML = "";
    var keyword = searchBar.value.toLowerCase();
    const movieTiltes = movieList.map(movie => movie.title);
    const suggestionList = movieTiltes.filter(suggestion =>
        suggestion.toLowerCase().startsWith(keyword)
    );
    if (suggestionList.length == 0) {
        document.getElementById("search-input").style.borderBottomLeftRadius = "20px";
        document.getElementById("search-input").style.borderBottomRightRadius = "20px";
    }
    let countSuggestion = 0;
    suggestionList.forEach(suggestion => {

        countSuggestion += 1;
        if (countSuggestion <= 10) {
            suggestionsContainer.innerHTML += "<li onclick='applySearch(this)'>" + suggestion + "</li>";
        }
    })
    if (searchBar.value === '') {
        document.getElementById('suggestions-container').innerHTML = "";
        document.getElementById("search-input").style.borderBottomLeftRadius = "20px";
        document.getElementById("search-input").style.borderBottomRightRadius = "20px";
    }
    if (document.getElementById('suggestions-container').innerHTML != "") {
        document.getElementById("search-input").style.borderBottomLeftRadius = 0;
        document.getElementById("search-input").style.borderBottomRightRadius = 0;
    }


});

/**
 * The function sets the value of a search bar to the innerHTML of a suggestion element.
 * @param suggestion - The parameter "suggestion" is a reference to an HTML element that represents a
 * suggested search term. The function "applySearch" sets the value of the search bar to the innerHTML
 * of the suggestion element, effectively applying the suggestion as the new search term.
 */
function applySearch(suggestion) {
    searchBar.value = suggestion.innerHTML;

}

/**
 * The function searches for a movie title in a list and returns its corresponding movie ID.
 * @returns the movieId of the movie whose title matches the value of the search input field. If there
 * is no match, it returns '0'.
 */
function saveMovieId() {
    for (let i = 0; i < movieList.length; i++) {
        if (movieList[i].title == document.getElementById("search-input").value) {
            return movieList[i].movieId;
        }
    }

    return '0';
}