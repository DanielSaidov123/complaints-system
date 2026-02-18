import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    const {  password } = req.body;
 
    if ( password === process.env.ADMIN_PASS) {
        console.log(password)
        console.log(process.env.ADMIN_PASS)
        const token = jwt.sign(
            { role: 'admin' }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1h' }
        );

        return res.json({ success: true, token });
    }

    res.status(401).json({ success: false, message: 'פרטים שגויים' });
};
