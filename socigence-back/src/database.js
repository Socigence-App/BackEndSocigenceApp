import mongoose from 'mongoose'



(async() => {
    try {
        const db = await mongoose.connect('mongodb://localhost/socigenceapi',{
       useNewUrlParser: true,
       useUnifiedTopology: true, 
       useFindAndModify: true
    })
    console.log('Database is connected to:',db.connection.name)
    } catch (error) {
        console.error(error);
    }
})();
