
console.log('Entrando... Aguarde')

const { MessageMedia, Client } = require("whatsapp-web.js")
const client = require("./src/clientStart.js")
// const { List , Client , LocalAuth , MessageMedia , Buttons, Reaction } = require("whatsapp-web.js");

const chalk = require("chalk");

const { ListCategory } = require("./src/list.js");
const { Welcome } = require("./src/functions/default_message.js")

const prefix = '?'
var users = {}
var users_arr = [] 


const welcome_msg = () => {
    const text = `
        bem-vindo ao grupo
        Me chame de _alves_
        Sou o criador desse chatbot ;)

        ROLETADAS E RUSSAS
        _Em desenvolvimento_
    `

    return text
}
const my_group = "120363133137637660@g.us"

client.on("group_join", async (group_update) => {
    if(1 == 1){ return }
    try{

        // const user = await group_update.getContact()
        const joinedUser = await client.getContactById(group_update.id.participant);
        let mentions = []
        mentions.push(joinedUser)
        var media = ''

        
        // console.log(joinedUser)
        let chat = await group_update.getChat()
        try{
            //mensagem com foto
            var url = await joinedUser.getProfilePicUrl()
            
            media = await  MessageMedia.fromUrl(url)
            chat.sendMessage(media, {mentions, caption: `Olá, @${joinedUser.id.user}!${welcome_msg()}`})    //mensagem com foto tratada 
        }catch(err){
            // mensagem sem foto
            console.log("mensagem sem foto... erro: " + err)
            chat.sendMessage(`Olá, @${joinedUser.id.user}!${welcome_msg()}`, {mentions})   // mensagem sem foto
            // console.log(`Usuário ${joinedUser.number} sem foto`)
            // group_update.reply("SEUGGUNDO TRY" + err)
            
            // console.log(joinedUser.id.user)
        }
    }catch(err){

        console.log(chalk.yellow("MEnsagem sem marcação... ") + err)
        //mensagem sem marcação nem foto
        
        const joinedUser = await client.getContactById(group_update.id.participant);
        await group_update.reply(`Olá, ${welcome_msg()}`)
        console.log("erro ao tentar enviar mensagem a usuario." + err)
        // console.log(`${joinedUser.number} entrou no grupo. Adicionado por ${user.pushname}`)
        // group_update.reply("Primeiro TRY" + err)
    }
})

client.on("group_leave", async (group_update) => {
    const user = await group_update.getContact()
    const quit = await client.getContactById(group_update.recipientIds[0])

    const chat = await group_update.getChat()
        console.log(chat.isGroup)
        
    console.log(`${chalk.redBright(`${quit.pushname}`)} removido por ${chalk.yellow(`${user.pushname}`)}.`)
    // console.log(group_update)

    chat.sendMessage(
        `Usário removido. ${
            quit.pushname == undefined 
                ? "" 
                : "nome: " + quit.pushname
        }`
    )

})

// ============ INTRO ====================
client.on("message", async (msg) => {
    let msgLower = msg.body.toLowerCase().trim()
    let msg_array = msgLower.split(" ")
    let user = await msg.getContact()
    let name = user.pushname
    const chat = msg.getChat()

    if (Object.keys(users).includes(msg.from)){ return }
    if (msg.from != my_group) { return }
    if (msg.isGroup) { return }
    

    if(msg.from != my_group) { return }
    console.log("\n\n =======================")
    console.log(msg.from)
    
    console.log(`${user}: ${msg.body}`)
    
    // console.log(user)

    client.sendMessage(msg.from, Welcome)
    client.sendMessage(msg.from, ListCategory)
    users[msg.from] = {

    }
})

// ============ ITEM_SELECTOR ========
client.on("message", async (msg) => {

})

