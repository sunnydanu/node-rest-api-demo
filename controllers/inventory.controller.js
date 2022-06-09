import { getJSON,setJSON} from "../model/inventory-model.js";

const getInventory =  async (req,res) =>{
    const {name}  = req.params;
    let InventoryList =  await  getJSON();

    if(name){
        InventoryList = InventoryList.filter(item=>item.name == name)
    }    

    res.send(InventoryList)
}
const putInventory = async (req,res) =>{

    const {name}  = req.params;
   
  
    let InventoryList = req.body
    
    if(name){
        const newQuantity = req.body.quantity;
   
          InventoryList =  await  getJSON()
        InventoryList = InventoryList.map(item=>{
            if(item.name == name){
                item.quantity = newQuantity
            }
            return item
        })
         
    } 
    await setJSON(InventoryList);

    res.send({"message":"Invertory Updated"})
}


const postInventory =  async (req,res) =>{

   
   const oldInventoryList =  await  getJSON()
   const newData   = req.body 
   
   const InventoryList = [newData,...oldInventoryList];


    await setJSON(InventoryList)
  
    res.send({"message":"Invertory Updated",InventoryList})
}
const deleteInventory =  async (req,res) =>{

   
    const {name}  = req.params;
   
  
    let InventoryList = await  getJSON()
    
    if(name){
        
        InventoryList = InventoryList.filter(item=>item.name !== name)
    } else{
        InventoryList = []
    }
    await setJSON(InventoryList);

    res.send({"message":"Invertory Deleted",InventoryList})
}


export default {
    getInventory,putInventory,postInventory,deleteInventory
}