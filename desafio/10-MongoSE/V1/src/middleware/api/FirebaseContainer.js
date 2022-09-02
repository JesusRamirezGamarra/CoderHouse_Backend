//----------* IMPORTS *----------//
import admin from 'firebase-admin'
import { FieldValue } from 'firebase-admin/firestore'
import config from '../../config.js'
//----------* FIREBASE CONNECTION *----------//
console.log(config.firebase);
admin.initializeApp({
    credential: admin.credential.cert(config.firebase.credential),
    databaseURL:'https://coderhouse-ecommerce-ljrg.firebaseio.com'
})
const db = admin.firestore()
console.log('Firestore is connected!')

//----------* FIREBASE-CONTAINER CLASS *----------//
class FirebaseContainer {
    constructor(collectionName) {
    this.query = db.collection(collectionName)
}

async getAll() {
try {
    const querySnapshot = await this.query.get()
    const docs = querySnapshot.docs
    return docs
} catch (error) {
    throw new Error(`Error getting all items: ${error}`)
}
}

async getById(id) {
try {
    const doc = this.query.doc(id.toString())
    const docFound = await doc.get()
    const docData = docFound.data()
    return docData
} catch (error) {
    throw new Error(`Error getting item: ${error}`)
}
}

async addItem(object) {
try {
    // let doc = this.query.doc()   //--> Para generar automaticamente el ID.
    const { id, ...remainingObject } = object
    let doc = this.query.doc(id.toString())
    await doc.create(object)
} catch (error) {
    throw new Error(`Error adding item: ${error}`)
}
}

async editById(object, id) {
try {
    const doc = this.query.doc(id.toString())
    await doc.update(object)
} catch (error) {
    throw new Error(`Error editing item: ${error}`)
}
}

async deleteById(id) {
try {
    const doc = this.query.doc(id.toString())
    const docFound = await doc.get()
    const docData = docFound.data()
    if (docData) {
    await doc.delete()
    return true
    } else {
    return false
    }
} catch (error) {
    throw new Error(`Error deleting item: ${error}`)
}
}

async deleteAll() {
try {
    const docs = await this.getAll()
    const ids = docs.map((doc) => doc.id)
    const promises = ids.map((id) => this.deleteById(id))
    const results = await Promise.allSettled(promises)
    const errors = results.filter((result) => result.status == 'rejected')
    if (errors.length > 0) {
    throw new Error('Removal was not complete. Try again.')
    }
} catch (error) {
    throw new Error(`Error deleting all items: ${error}`)
}
}

async addItemInto(containerId, object) {
try {
    await this.query
    .doc(containerId.toString())
    .update('productos', FieldValue.arrayUnion(object), { merge: true })
} catch (error) {
    throw new Error(`Error adding item into: ${error}`)
}
}

async removeItemFrom(containerId, objectId) {
try {
    await this.query
    .doc(containerId.toString())
    .update('productos', FieldValue.arrayRemove(objectId.toString()))
} catch (error) {
    throw new Error(`Error removing item from: ${error}`)
}
}

async emptyContainer(containerId) {
try {
    this.query.get(containerId).then((res) => {
    res.forEach((element) => {
        element.ref.delete()
    })
    })
} catch (error) {
    throw new Error(`Error removing all items from: ${error}`)
}
}

async disconnect() {}
}

//----------* EXPORTS CLASS *----------//
export default FirebaseContainer
