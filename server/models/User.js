<<<<<<< HEAD
const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");


const userSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Must match an email address!"],
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    }
});

// hook to compare and validate password for logging in
userSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

// hook to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};


const User = model("User", userSchema);
=======
const { Schema, Types, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
            minlength: 5,
            maxlength: 50
        },
        email: { 
            type: String, 
            require: true,
            validate: {
                validator: function (e) {
                    return /.+\@.+\..+/.test(e);
                },
                message: props => `${props.value} is not a valid email address.`
            }
        },
        password: {
            type: String,
            require: true,
            minlength: 8,
            maxlength: 128
        },
        name: {
            type: String,
            require: false,
            minlength: 1,
            maxlength: 50
        }
    }
);

userSchema.pre('save', function(next) {
    let user = this._doc.username;
    this._doc.username = user.toLowerCase();

    let pwd = this._doc.userPassword;
    this._doc.userPassword = bcrypt.hashSync(pwd, 10);
    next();
});

userSchema.pre('findOneAndUpdate', function(next) {
    const modified = this.getUpdate();
    let pwd = modified.$set.userPassword;
    if (pwd) {
        modified.$set.userPassword = bcrypt.hashSync(pwd, 10);
    }

    let user = modified.$set.username;
    if (user) {
        modified.$set.username = user.toLowerCase();
    }

    next();
});

userSchema.methods.checkPassword = function(passwordVerify, cb) {
    bcrypt.compare(passwordVerify, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const User = model('User', userSchema);
>>>>>>> 92f20176e43b1b9e4dbbd7ee5d96bd42e825dd33

module.exports = User;