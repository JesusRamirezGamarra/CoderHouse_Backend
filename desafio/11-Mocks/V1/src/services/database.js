import mongoose from 'mongoose';

// const connectionString = 'mongodb://localhost:27017/Jesus Ramirezcid';
const connectionString = 'mongodb://localhost:27017/mocks';

export const initMongoDB = async () => {
  try {
    console.log('CONECTANDO A MI DB');
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('YA ESTOY CONECTADO');
  } catch (error) {
    console.log(`ERROR => ${error}`);
    return error;
  }
};
