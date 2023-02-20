import mongoose from 'mongoose'; 


const user = process.env.MONGODB_USER
const password = process.env.MONGODB_PASSWORD

mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://${user}:${password}@typeadmincluster.sqzmvw9.mongodb.net/?retryWrites=true&w=majority`)
  .then(()=>console.log('connected!'));