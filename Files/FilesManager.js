const fs = require("fs");

class Container {
    constructor(path, filename) {
        this.path = path;
        this.filename = filename;
        this.codification = "utf-8";
    }
    save = (product) => {
        let fileData = []
        filename = `${__dirname}${this.path}/${this.filename}`
        fs.readFile(filename, this.codification, (err, data) => {
            if (err) throw new Error(err)
            fileData = JSON.parse(data)
        })
        fileData.push({
            id: fileData.length++,
            ...product
        })
        fs.writeFile(filename, JSON.stringify(fileData))
    }
    getById = (id) => {
        let fileData = []
        filename = `${__dirname}${this.path}/${this.filename}`
        fs.readFile(filename, this.codification, (err, data) => {
            if (err) throw new Error(err)
            fileData = JSON.parse(data)
        })
        fileData.filter(product => {
            return product.id === id
        })
        return fileData[0]
    }
    getAll = () => {
        let fileData = []
        filename = `${__dirname}${this.path}/${this.filename}`
        fs.readFile(filename, this.codification, (err, data) => {
            if (err) throw new Error(err)
            fileData = JSON.parse(data)
        })
        return fileData
    }
    deleteById = (id) => {
        let fileData = []
        filename = `${__dirname}${this.path}/${this.filename}`
        fs.readFile(filename, this.codification, (err, data) => {
            if (err) throw new Error(err)
            fileData = JSON.parse(data)
        })
        fileData.filter(product => {
            return product.id !== id
        })
        fs.writeFile(filename, JSON.stringify(fileData))
    }
    deleteAll = () => {
        filename = `${__dirname}${this.path}/${this.filename}`
        fs.writeFile(filename, JSON.stringify([]))
    }
}
Container("./", "products.txt")