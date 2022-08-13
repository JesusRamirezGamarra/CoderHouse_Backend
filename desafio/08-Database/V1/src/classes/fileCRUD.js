const fs = require('fs')

class Controller {
  constructor(fileName) {
    this.fileName = fileName
  }

  async getAll() {
    try {
      const allItems = JSON.parse(
        await fs.promises.readFile(`src/database/${this.fileName}.json`, 'utf-8')
      )

      return allItems
    } catch (error) {
      await fs.promises.writeFile(`src/database/${this.fileName}.json`, JSON.stringify([]), 'utf-8')

      const allItems = JSON.parse(
        await fs.promises.readFile(`src/database/${this.fileName}.json`, 'utf-8')
      )

      return allItems
    }
  }

  async getById(id) {
    try {
      const allItems = JSON.parse(
        await fs.promises.readFile(`src/database/${this.fileName}.json`, 'utf-8')
      )

      const itemFound = allItems.find((item) => item.id === Number(id))

      return itemFound
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  }

  async addItem(object) {
    try {
      const allItems = JSON.parse(
        await fs.promises.readFile(`src/database/${this.fileName}.json`, 'utf-8')
      )

      allItems.push(object)

      await fs.promises.writeFile(
        `src/database/${this.fileName}.json`,
        JSON.stringify(allItems),
        'utf-8'
      )
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  }

  async editById(object) {
    try {
      let allItems = JSON.parse(
        await fs.promises.readFile(`src/database/${this.fileName}.json`, 'utf-8')
      )

      allItems = allItems.map((item) => (item.id !== object.id ? item : object))

      await fs.promises.writeFile(
        `src/database/${this.fileName}.json`,
        JSON.stringify(allItems),
        'utf-8'
      )
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  }

  async deleteById(id) {
    try {
      const allItems = JSON.parse(
        await fs.promises.readFile(`src/database/${this.fileName}.json`, 'utf-8')
      )

      const filteredItemList = allItems.filter((item) => item.id !== Number(id))

      if (JSON.stringify(allItems) === JSON.stringify(filteredItemList)) {
        return false
      } else {
        await fs.promises.writeFile(
          `src/database/${this.fileName}.json`,
          JSON.stringify(filteredItemList),
          'utf-8'
        )
        return true
      }
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile(`src/database/${this.fileName}.json`, JSON.stringify([]), 'utf-8')
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  }
}

module.exports = Controller
