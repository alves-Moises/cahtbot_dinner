
class User{
    constructor(numb){
        this.number = numb

        this.name = ""
        this.adress = ""
        this.pay_method = ""
        this.orders = []
        this.observation = ""
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

    get orders(){
        return this.orders
    }

    get number() {
        return this.number
    }

    add_order(order){
        
        this.orders.push({
            "id": order["id"],
            "item": order["item"],
            "qtd": order["qtd"],
            "value": order["value"]
        })
    }

}