require('dotenv').config()

const express = require('express')
const path = require('path')
const app = express()
const userRoute = require('./routes/user')
const blogRoute = require('./routes/blog')
const Blog = require('./models/blog')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const { checkForAuthenticationCookie } = require('./middleware/authentication')
const PORT = process.env.PORT || 8002


mongoose.connect(process.env.MONGO_URL).then(() => console.log('Mongodb connected'))

app.set('view engine','ejs')
app.set('views',path.resolve('./views'))

app.use(express.urlencoded({limit:'10mb', extended: false}))
app.use(express.static(path.resolve('./public')))


app.use(cookieParser())
app.use(checkForAuthenticationCookie('token'))


app.get('/',async (req,res)=>{
    const allBlogs = await Blog.find({})
    res.render('home',{
        user: req.user,
        blogs: allBlogs
    })
})


app.use('/user',userRoute)
app.use('/blog',blogRoute)


app.listen(PORT,()=>console.log(`server started at PORT: ${PORT}`))