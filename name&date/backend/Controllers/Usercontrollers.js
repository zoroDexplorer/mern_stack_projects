const User = require("../models");

const adduser = async (req, res) => {
    console.log('Request body:', req.body);  // Log the request body

    const { name } = req.body;

    try {
        const newUser = new User({ name });
        await newUser.save();
        return res.json(await User.find());
    } catch (err) {
        console.log('Error:', err);
    }
}




const allusers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err })
    }
}

module.exports = {adduser, allusers}