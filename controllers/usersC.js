const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const S3 = require('aws-sdk/clients/s3');
const s3 = new S3();

module.exports = {
    signup,
    login,
    // edit
};

//require unique id function
const { v4: uuidv4 } = require('uuid');

function createJWT(user) {
    return jwt.sign(
        { user }, // data payload
        SECRET,
        { expiresIn: '24h' }
    );
}

async function signup(req, res) {
    // FIRST - UPLOAD PICTURE
    // create new User doc - purposes to confirm initial params are correct
    const user = new User(req.body);
    // check to make sure the user submitted a photo:
    if (!req.file) return res.status(400).json({ error: 'Please submit a Photo!' });
    // creating location where photos will be stored:
    const filePath = `userPFPs/${uuidv4()}-${req.file.originalname}`
    // create object that uploads to S3 AWS bucket
    const params = { Bucket: process.env.BUCKET_NAME, Key: filePath, Body: req.file.buffer }
    s3.upload(params, async function (err, data) {
        if (err) {
            console.log('=========================')
            console.log(err, ' <-- error from aws, probably wrong keys in your code ~/.aws/credentials file, or you have the wrong bucket name, are you sure you know what process.env.BUCKET_NAME is, did you log it out?')
            console.log('==========================')
        }
        // SECOND - SAVE USER DOC TO DB
        // decalred again to include profilePic url
        const user = new User({ ...req.body, profilePic: data.Location });
        try {
            await user.save();
            const token = createJWT(user);
            res.json({ token });
        } catch (err) {
            // Probably a duplicate email
            res.status(400).json(err);
        }
    })
}

async function login(req, res) {
    try {
        // search for if the user exists in the db
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(401).json({ err: 'bad credentials UN' });
        // check is the password is the same
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (isMatch) {
                const token = createJWT(user);
                res.json({ token });
            } else {
                return res.status(401).json({ err: 'bad credentials PW' });
            }
        });
    } catch (err) {
        return res.status(401).json(err);
    }
}

// function to create a JWT
function createJWT(user) {
    return jwt.sign(
      {user}, // data payload
      SECRET,
      {expiresIn: '12h'}
    );
  }