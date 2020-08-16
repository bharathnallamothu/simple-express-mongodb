import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String
    },

});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
