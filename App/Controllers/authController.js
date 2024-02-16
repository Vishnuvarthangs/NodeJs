const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../Models/User');
const { accessTokenSecret, refreshTokenSecret, accessTokenExpiration, refreshTokenExpiration } = require('../Config/auth.config');
const { validateSignup, validateLogin } = require('../Middlewares/validator/auth')
const _ = require('lodash');
//require('dotenv').config({ path: 'ENV_FILENAME' });

// Signup
exports.signup = async (req, res) => {
    const { error } = validateSignup(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        // Check if the user already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            //return res.status(400).json({ message: "User already exists." });
            if (user) return res.status(400).json({ error: 'User already registered' });
        }

        user = new User(_.pick(req.body, ['name', 'email', 'password']));
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        // Save the user to the database
        await user.save();

        // // Generate access token
        // const accessToken = jwt.sign({ name: user.id, role: user.role }, accessTokenSecret, { expiresIn: accessTokenExpiration });
        // // Generate refresh token
        // const refreshToken = jwt.sign({ name: user.name, role: user.role }, refreshTokenSecret);
        // // Send response with tokens
        // res.status(201).json({ accessToken, refreshToken }); 

        const token = user.generateAuthToken();
        res.header('Authorization', token).send(_.pick(user, ['_id', 'name', 'email'])); 
        
        //res.status(201).json({ message: "User created successfully." });

    } catch (err) {
        console.error("Error creating user:", err);
        res.status(500).json({ message: "Server error." });
    }
};

// Login
exports.login = async (req, res) => {
    const { error } = validateLogin(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    try {
        // const user = await User.findOne({ Name });
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).send('Invalid email! or User not found');
        }
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if (!passwordMatch) {
            return res.status(401).send('Invalid password');
        }
        
        // // Generate access token
        // const accessToken = jwt.sign({ Name: user.name, role: user.role }, accessTokenSecret, { expiresIn: accessTokenExpiration });
        // // Generate refresh token
        // const refreshToken = jwt.sign({ Name: user.name, role: user.role }, refreshTokenSecret);
        // // Send response with tokens
        // res.json({ accessToken, refreshToken });

        const token = user.generateAuthToken();
        const userId = user._id;
        res.status(200).send({ token, userId: userId.toString() });

        //res.status(201).json({ message: "Login successfull." });

    } catch (error) {
        res.status(500).send('Error logging in');
    }
};

// Refresh Token
exports.refreshToken = (req, res) => {
    // Extract the refresh token from the request body or headers
    const refreshToken = req.body.refreshToken || req.headers['x-refresh-token'];
    
    // Check if refresh token exists
    if (!refreshToken) {
        return res.status(401).json({ message: "Refresh token is required." });
    }

    try {
        // Verify the refresh token
        //const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({ message: 'Invalid refresh token' });
            }
            //}
            
            // Generate a new access token using the refresh token payload
            //const accessToken = jwt.sign({ userId: decoded.userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
            //const accessToken = jwt.sign({ userId: decoded.userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: accessTokenExpiration });
        
            // Generate new access token with expiration
            const accessToken = jwt.sign({ userId: decoded.userId, Name: user.Name, role: user.role }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: accessTokenExpiration });

            // Generate new refresh token with expiration
            const newRefreshToken = jwt.sign({ Name: user.Name, role: user.role }, refreshTokenSecret, { expiresIn: refreshTokenExpiration });
        
            // Send the new access token in the response
            res.status(200).json({ accessToken });

            res.json({ accessToken, refreshToken: newRefreshToken });
            
            res.status(201).json({ message: "Refresh token initiated successfull." });
        });
    } catch (err) {
        // Token verification failed
        return res.status(403).json({ message: "Invalid refresh token." });
    }
};
