import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
    type: {
        type: String,
        required: [true, 'Veuillez insérer un type'],
    },
    tags: [String],
    title: {
        type: String,
        required: [true, 'Veuillez insérer un titre valide'],
        unique: true
    },
    price: {
        type: Number,
        required: [true, 'Veuillez insérer un prix'],
    },
    userAssigned: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'userModel',
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const userModel = mongoose.model('eventModel', eventSchema);

export default userModel;