import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    prenom: {
        type: String,
        required: [true, 'Veuillez insérer un prénom'],
    },
    nom: {
        type: String,
        required: [true, 'Veuillez insérer un nom'],
    },
    mail: {
        type: String,
        required: [true, 'Veuillez insérer une adresse mail'],
        unique: true
    },
    phone: {
        type: Number,
        required: [true, 'Veuillez insérer un numéro de téléphone'],
    },
    mdp: {
        type: String,
        required: [true, 'Veuillez insérer un mot de passe'],
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const userModel = mongoose.model('userModel', userSchema);

export default userModel;