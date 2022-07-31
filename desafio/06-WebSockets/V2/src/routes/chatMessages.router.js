//----------* REQUIRE'S *----------//
import {Contenedor} from '../middleware/api/FileManager.js';
const database = new Contenedor('chatMessages'); 

//----------* PRODUCTS ROUTES *----------//
const chatMessagesRouter = {
  getAllMessages: async () => {
    try {
      const allMessages = await database.getAll()
      return allMessages
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  },

  addNewMessage: async (message) => {
    try {
      const prevMessages = await database.getAll()
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

      await database.save(newMessage)
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  },
}

//----------* EXPORTS CONTROLLER *----------//
export default chatMessagesRouter;