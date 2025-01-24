import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://hatanphuc3456789:<db_password>@urlshortener.86mqk.mongodb.net/?retryWrites=true&w=majority&appName=URLShortener',
        );
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}

export default connect;
