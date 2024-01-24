const Contact = require('./modulschema')

// get function
const getFunction = async (req, res) => {
    try {
        let data = await Contact.find({});
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("Error retrieving users");
    }
}

// get by id
const getByIdFunction = async (req, res) => {
    try {
        const { id } = req.params
        const pro = await Contact.findById(id)
        return res.status(200).json(pro)
         
    } catch (err) {
        res.status(500).send("Error retrieving users");
    }

}
// Post function
const postFunction = async (req, res) => {
    try {
        const newContact = new Contact({
            title: req.body.title,
            price: req.body.price,
            location: req.body.location,
            bedroom: req.body.bedroom,
            bath: req.body.bath,
            area: req.body.area,
            location_url: req.body.location_url,
        });
        let user = await newContact.save();
        console.log(user)
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send("Error creating user");
    }
}
// Update function
const updateFunction = async (req, res) => {
    const updateContact = {
        title: req.body.title,
        price: req.body.price,
        location: req.body.location,
        bedroom: req.body.bedroom,
        bath: req.body.bath,
        area: req.body.area,
        location_url: req.body.location_url,
    };
    Contact.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: updateContact },
    ).then((result) => {
        if (result) {
            console.log("deleted", result);
            res.status(200).json({ message: 'Deleted successfully' });
        } else {
            console.log("Not found");
            res.status(404).json({ error: 'Contact not found' });
        }
    })
        .catch((err) => {
            console.error("ochirishda xatolik", err);
            res.status(500).json({ error: 'Error deleting contact' });
        });
    
}
// Delete function
const deleteFunction = async (req, res) => {
    try {
        const userId = req.params.id;
        let deletedUser = await Contact.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).send("User not found");
        }
        res.status(200).send(deletedUser);
    } catch (error) {
        res.status(500).send("Error deleting user");
    }
}



module.exports = { getFunction, postFunction, deleteFunction, updateFunction, getByIdFunction }