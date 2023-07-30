
class User{
    constructor(numb){
        this.number = numb

        this.name = ""
        this.adress = ""
        this.pay_method = ""
        this.orders = {}
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

    add_order(order){
        var id = order.id
        var item = order.item
        var qtd = order.qtd
        var value = order.value

        this.orders = {
            "id": id,
            "item": item,
            "qtd": qtd,
            "value": value
        }
    }

}