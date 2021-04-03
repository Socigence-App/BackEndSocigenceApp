import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

//imports routers
import userRouter from './routes/user.route'
import categoriaRoute from './routes/categoria.route'
import postRouter from './routes/post.route'
import retoRouter from './routes/reto.route'


const app = express()
//settings
app.set('port', process.env.PORT || 3000)


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extend: false}));

//routes
app.get('/', (req, res) => {
        res.json({ message: 'Welcome to my API rest' })
})

app.use('/user', userRouter)
app.use('/categoria', categoriaRoute)
app.use('/post', postRouter)
app.use('/reto', retoRouter)

export default app;