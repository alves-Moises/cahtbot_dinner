
User = require("../user/")

users = {}

const NewUser = (number) => {
    users[number] = new User(number)
}

const AddItem = (number, order) => { // id, item, qtd, value
    users[number].add_order(order)
}



module.exports = {
    NewUser, 
    AddItem
}