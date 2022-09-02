import cartsJSONFile from '../../assets/database/Backup/carts.json' assert {type:"json"}
import productsJSONFile from '../../assets/database/Backup/products.json' assert {type:"json"}

//----------* MEMORY-CONTAINER CLASS *----------//
export class MemoryContainer {
    constructor() {
        this.elements = []
    }

    getPopulate = async(JSONFileName) =>{
        switch (JSONFileName) {    
            case 'carts':
                this.elements = cartsJSONFile
                break;
            case 'products':
                this.elements = productsJSONFile
                break;   
        }             
    }
    
    getById = async (id) =>{
        try {
        const itemFound = this.elements.find((item) => item.id === Number(id))
        return itemFound
        // if (!itemFound) {
        // throw new Error(`Error: item with ID ${id} not found.`)
        // } else {
        // return itemFound
        // }
        } catch (error) {
            console.warn({class:`class MemoryContainer`, method:`getById= async(id)`,description:error})
            throw new Error(error);
        }
    }

    getAll = async()=> {
        try {
            return [...this.elements]
        } catch (error) {
            console.warn({class:`class MemoryContainer`, method:`getAll= async()`,description:error})
            throw new Error(error);
        }        
    }

    addItem = async(object) => {
        try {
            this.elements.push(object)
            return [...this.elements]
        } catch (error) {
            console.warn({class:`class MemoryContainer`, method:`addItem= async(object)`,description:error})
            throw new Error(error);
        }   
    }

    updateById = async(object) => {
        try{
            this.elements = this.elements.map((item) => (item.id !== object.id ? item : object))
            return [...this.elements]
        } catch (error) {
            console.warn({class:`class MemoryContainer`, method:`updateById= async(object) `,description:error})
            throw new Error(error);
        }  
        
    }

    deleteById = async(id) => {
        try{
            const filteredItemList = this.elements.filter((item) => item.id !== Number(id))
            if (JSON.stringify(this.elements) === JSON.stringify(filteredItemList)) {
            return false
            } else {
            this.elements = filteredItemList
            return true
        }
        } catch (error) {
            console.warn({class:`class MemoryContainer`, method:`deleteById= async(idNumber)`,description:error})
            throw new Error(error);
        }
    }

    deleteAll = async() => {
        try{        
            this.elements = []
        } catch (error) {
            console.warn({class:`class MemoryContainer`, method:`deleteAll= async()`,description:error})
            throw new Error(error);
        }
    }

    // addItemInto= async(containerId, object)=> {
    //     let itemFound = this.elements.find((item) => item.id === Number(containerId))
    //     itemFound.productos.push(object)
    //     this.elements = this.elements.map((item) => (item.id !== itemFound.id ? item : itemFound))
    // }

    // removeItemFrom= async(containerId, objectId)=> {
    //     let itemFound = this.elements.find((item) => item.id === Number(containerId))
    //     itemFound.productos = itemFound.productos.filter((item) => item.id !== Number(objectId))
    //     this.elements = this.elements.map((item) => (item.id !== itemFound.id ? item : itemFound))
    // }

    // emptyContainer= async(containerId)=> {
    //     let itemFound = this.elements.find((item) => item.id === Number(containerId))
    //     itemFound.productos = []
    //     this.elements = this.elements.map((item) => (item.id !== itemFound.id ? item : itemFound))
    //     }
}

//----------* EXPORTS CLASS *----------//
export default MemoryContainer
