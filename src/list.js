const { List , Client , LocalAuth , MessageMedia , Buttons, Reaction } = require("whatsapp-web.js");

const ListCategory = () => {
    const category_arr = [
        "lanches", 
        "bebidas",
        "petiscos"
    ]

    const row_array = []
    category_arr.forEach(function get_itens(item, i) {

        row_array[i] = {
            id: `cat_${category_arr[i]}`,
            title: `${category_arr[i]}`,
            descriprion: `Ver itens da categoria ${category_arr[i]}`
        }
    })

    let sections = {
        title: "Selecione a categoria:",
        rows: row_array
    }


    category = List(
        "Por favor selecione a categoria",
        "Clique para expadir",
        sections,
        "Restaurante blabla",
        "Obrigado."
    )
    return category

}
module.exports = {
    ListCategory
}
