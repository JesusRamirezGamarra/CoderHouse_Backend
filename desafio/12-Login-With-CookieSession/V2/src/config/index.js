import dotenv from 'dotenv';

dotenv.config();

export default {
  //MONGO_ATLAS_URL: process.env.MONGO_ATLAS_SRV || 'mongoSRV',
  MONGO_ATLAS_URL: 'mongodb+srv://coderhouse:Mishina2000@coderhouse-cluster-ljrg.qaohzev.mongodb.net/CoderHouse-Login?retryWrites=true&w=majority' || 'mongoSRV',
  PORT: process.env.PORT || 8080,
};
