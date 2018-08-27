- take user input 
    - search type
    - show name
    - actor name
- search based on user input
- display search results
- log results to 'log.txt'


2 modules 

1 module to handle user interactions (CLI)
    - capture input
    - push input to search module
    - log search results (callback)

1 module to handle search
    - accept input
    - process input (transform, URIencode, etc) 
    - make search request with input
    - display search results
    - trigger logging of search results


    let data = process.argv;
    let input = data.slice(2);
    let command = input.shift();

    let searchTerm = input.join(" ");