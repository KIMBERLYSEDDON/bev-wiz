const { Schema, Types, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: String,
    require: true,
    validate: {
      validator: function (e) {
        return /.+\@.+\..+/.test(e);
      },
      message: (props) => `${props.value} is not a valid email address.`,
    },
  },
  password: {
    type: String,
    require: true,
    minlength: 8,
    maxlength: 128,
  },
  name: {
    type: String,
    require: false,
    minlength: 1,
    maxlength: 50,
  },
  favorites: [
    {
      type: Types.ObjectId,
      ref: 'Favorite',
    }
  ],
});

userSchema.pre("save", function (next) {
  if (this.isNew || this.isModified("username")) {
    this.username = this.username.toLowerCase();
  }

  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = bcrypt.hashSync(this.password, saltRounds);
  }
  next();
});

userSchema.pre("findOneAndUpdate", function (next) {
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

userSchema.methods.checkPassword = function (passwordVerify, cb) {
  bcrypt.compare(passwordVerify, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const User = model("User", userSchema);

module.exports = User;
