const getTheTitles = function(books) {
    books_arr = books.map((book) => {
        title = book.title;
        return title;
    })
    return books_arr;
};

// Do not edit below this line
module.exports = getTheTitles;
