const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 12;

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        preferredName: {
            type: String,
        },
        profilePic:{
            type: String,
        },
        location: {
            type: String,
        },
        bio: {
            type: String,
        },
        pets: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pet',
        }],
        sits: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Sitts',
        },
    }, {
    timestamp: true,
}
);

// adding the .set, .pre, and custom methods here
// reminder s3 is only for uploading files

// remove password when converting to JSON
userSchema.set("toJSON", {
    transform: function (doc, ret) {
        delete ret.password;
        return ret;
    },
});

// remove password when converting to an Object
userSchema.set("toObject", {
    transform: (doc, ret, opt) => {
        delete ret.password;
        return ret;
    },
});

userSchema.pre("save", function (next) {
    const user = this;
    // 'this' will be the user doc trying to be saved
    if (!user.isModified("password")) return next();
    // check to see if the user has been modified, if not proceed in the middleware chain
    bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
        // password has been changed - salt and hash it
        if (err) return next(err);
        // replace the user provided password with the hash
        user.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = function (tryPassword, cb) {
    console.log(cb, " this is cb");
    // 'this' represents the document that you called comparePassword on
    bcrypt.compare(tryPassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model("User", userSchema);