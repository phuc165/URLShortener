import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://hatanphuc3456789:zZRjryDOaPxlEocq@urlshortener.86mqk.mongodb.net/?retryWrites=true&w=majority&appName=URLShortener',
            // 'mongodb://localhost:27017/',
        );
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}

export default connect;
