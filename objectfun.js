let oneBook = {
    title: '1998',
    author: 'Mr.Ali',
    pageCount: 400
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Honey Well',
    pageCount: 700
}
  
let getSummary = function (book) {
    return {
        summary: '${book.title} by ${book.author}',
        pageCountSummary: '${book.title} is ${book.pageCount} pages long'
    }
}
let bookSummary = getSummary(oneBook)
let otherBookSummary = getSummary(oneBook)

console.log(bookSummary.pageCountSummary)


