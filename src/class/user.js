class User {
    number;
    order;
    constructor(options){
        this.number = options["number"]
        this.order = options["order"]

        // this.name = ""
        // this.adress = ""
        // this.pay_method = ""
        // this.observation = ""
    }


    set name(name){
        this.name = name
    }
    set adress(adress){
        this.adress = adress
    }
    set pay_method(pay_method){
        this.pay_method = pay_method
    }
    set observation(observation){
        this.observation = observation
    }

    get name(){
        return this.name
    }
    get adress(){
        return this.adress
    }
    get pay_method(){
        return this.pay_method
    }
    get observation(){
        return this.observation
    }

    get order(){
        return this.order
    }

    add_order(order){
        this.orders.add_order(order)
    }

    // add_order(order){
        
    //     this.orders.push({
    //         "id": order["id"],
    //         "item": order["item"],
    //         "qtd": order["qtd"],
    //         "value": order["value"]
    //     })
    // }
}

module.exports = { User }