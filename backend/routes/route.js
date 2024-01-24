const router = require("express").Router();
const Contact = require('./modulschema')

// Route function 
const { getFunction, postFunction, deleteFunction, updateFunction, getByIdFunction } = require('./function')


// all methods
router.get("/get", getFunction);
router.get('/get/:id', getByIdFunction)
router.post("/contacts", postFunction)
router.put("/put/:id", updateFunction);
router.delete("/delete/:id", deleteFunction)









module.exports = router;
