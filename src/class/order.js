class Order{
    item
    atual_id = 0
    construtctor(){
        this.item_list = []
    }
    get item_list(){
        return this.item_list
    }
    add_item(item){
        this.atual_id += 1
        this.item_list += {
            "id": this.atual_id,
            "item": item["item"],
            "value": item["value"],
            "qtd": item["qtd"]
        }
    }
}

module.exports = {Order}