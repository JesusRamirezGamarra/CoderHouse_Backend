//----------* REQUIRE'S *----------//
const Controller = require('../classes/fileCRUD')
const messagesDB = new Controller('chatMessages')

//----------* PRODUCTS ROUTES *----------//
const chatMessagesController = {
  getAllMessages: async () => {
    try {
      const allMessages = await messagesDB.getAll()
      return allMessages
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  },

  addNewMessage: async (message) => {
    try {
      const prevMessages = await messagesDB.getAll()
      const currentDate = new Date().toLocaleString()

      const getNewId = () => {
        let lastID = 0
        if (prevMessages.length) {
          lastID = prevMessages[prevMessages.length - 1].id
        }
        return lastID + 1
      }

      const newMessage = {
        id: getNewId(),
        email: message.email ? message.email : 'anonymous@mail.com',
        date: currentDate,
        messageText: message.messageText ? message.messageText : '(Empty message)',
      }

      await messagesDB.addItem(newMessage)
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  },
}

//----------* EXPORTS CONTROLLER *----------//
module.exports = chatMessagesController
