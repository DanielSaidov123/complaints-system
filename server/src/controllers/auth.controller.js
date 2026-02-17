import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    const { username, password } = req.body;
 
    if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
        
        const token = jwt.sign(
            { role: 'admin' }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1h' }
        );

        return res.json({ success: true, token });
    }

    res.status(401).json({ success: false, message: 'פרטים שגויים' });
};
