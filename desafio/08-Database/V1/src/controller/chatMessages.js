const KnexContainer = require('../classes/knexContainer')
const sqlite3Config = require('../config/sqlLite3')
const SqlClient = new KnexContainer(sqlite3Config, 'messages')

//----------* PRODUCTS ROUTES *----------//
const chatMessagesController = {
  createMessagesTable: async () => {
    try {
      await SqlClient.createTable()
    } catch (error) {
      console.error(error)
    }
  },

  getAllMessages: async () => {
    try {
      const allMessages = await SqlClient.getAll()
      return allMessages
    } catch (error) {
      console.error(error)
    }
  },

  addNewMessage: async (message) => {
    try {
      const prevMessages = await SqlClient.getAll()
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
        email: message.email ? message.email : 'user@email.com',
        date: currentDate,
        messageText: message.messageText ? message.messageText : '(Empty message)',
      }

      await SqlClient.addItem(newMessage)
    } catch (error) {
      console.error(error)
    }
  },
}

//----------* EXPORTS CONTROLLER *----------//
module.exports = chatMessagesController
