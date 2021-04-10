import mongoose from 'mongoose'



(async() => {
    try {
        const db = await mongoose.connect('mongodb+srv://jhballen:jhon123@cluster0.gvnch.mongodb.net/SOCIGENCE-APP?retryWrites=true&w=majority',{
       useNewUrlParser: true,
       useUnifiedTopology: true, 
       useFindAndModify: true
    })
    console.log('Database is connected to:',db.connection.name)
    } catch (error) {
        console.error(error);
    }
})();
