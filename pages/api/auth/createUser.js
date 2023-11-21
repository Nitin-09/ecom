import User from "@/models/User";
import connectDb from "@/midleware/mongoose"
const bcrypt = require('bcryptjs');

const handler = async (req, res) => {
    if (req.method === 'POST') {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Email address Already Exists" });
        }
        const salt = await bcrypt.genSalt(10)
        const SecPass = await bcrypt.hash(req.body.password, salt)
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: SecPass,
        })
        res.json({"Sucess":"User Created Sucessfully"})
    }
}
export default connectDb(handler)
