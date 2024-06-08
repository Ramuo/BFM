import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^\S+@\S+\.\S+$/, 
            "Veuillez utiliser une adresse E-mail valide"
        ],
    },
    phone: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
            const hasLowercase = /[a-z]/.test(value);
            const hasUppercase = /[A-Z]/.test(value);
            const hasDigit = /\d/.test(value);
            const hasSymbol = /[@$!%*?&]/.test(value);
            const isLengthValid = value.length >= 8;
    
            return (
                hasLowercase && hasUppercase && hasDigit && hasSymbol && isLengthValid
            );
            } 
        },
    },
    profilePhoto: {
        // type: String,
        public_id: String,
        url: String,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    bio: {
        type: String,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
},{ timestamps: true }
);

//TO AUTHENTICATE USER PSW
userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

//TO CRYPT PSW
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    };

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);
export default User;