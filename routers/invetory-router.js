import express from "express";
import  cInvetory from "../controllers/inventory.controller.js"

const iRouter =    express.Router()


iRouter.get("/inventory/:name?",cInvetory.getInventory)
iRouter.put("/inventory/:name?",cInvetory.putInventory)
iRouter.post("/inventory/:name?",cInvetory.postInventory)
iRouter.delete("/inventory/:name?",cInvetory.deleteInventory)

 
 export default  iRouter ;
