class User {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
        this.books = []
        this.pets = []
    }
    getFullName = () => `${this.firstName} ${this.lastName}`
    countPets = () => this.pets.length
    addBook = (name, author) => {this.books.push({name, author})}
    getBookNames = () => this.books.map( book => book.name)
}

module.exports = User