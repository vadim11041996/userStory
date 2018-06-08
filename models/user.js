var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name:String,
    username:{type:String, required:true, index:{unique:true}},
    password:{type:String, required:true, select:false}
});

//Hashing password 
UserSchema.pre('save',(next)=>{
    var user = this;
    if (!user.isModified('password')) return next();

    bcrypt.hash(user.password, null, null, (err, hash)=>{
        if(err) return next(err);

        user.password = hash;
        next();
    })
});

UserSchema.methods.comparePassword = (password)=>{
    var user = this;
    return bcrypt.compareSync(password. user.password);

};

module.exports = mongoose.model('User', UserSchema);