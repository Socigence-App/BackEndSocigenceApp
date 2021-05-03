import mongoose from 'mongoose'



(async() => {
    try {
        const db = await mongoose.connect('mongodb+srv://Vale_1234:Thailand.2018@cluster0.ixxux.mongodb.net/PROJECT0?retryWrites=true&w=majority',{
       useNewUrlParser: true,
       useUnifiedTopology: true, 
       useFindAndModify: true
    })
    console.log('Database is connected to:',db.connection.name)
    } catch (error) {
        console.error(error);
    }
})();
