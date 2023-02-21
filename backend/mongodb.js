import mongoose from 'mongoose'; 


const user = process.env.MONGODB_USER
const password = process.env.MONGODB_PASSWORD
const database = process.env.MONGODB_DATABASE

mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://${user}:${password}@typedev.5u8jw7d.mongodb.net/${database}?retryWrites=true&w=majority`)
  .then(()=>console.log('connected!'));
 