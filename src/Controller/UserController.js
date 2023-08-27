
const { User } = require("../class/user.js")
users = {}

const NewUser = (number) => {
    users[number] = new User(number)
}

const AddItem = (number, order) => { // id, item, qtd, value
    users[number].orders(order)
}

const PayMethod = (number, pay_method) => {
    users[number].pay_method(pay_method)
}



module.exports = {
    NewUser, 
    AddItem,
    PayMethod
}