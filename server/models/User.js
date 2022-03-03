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

module.exports = User;