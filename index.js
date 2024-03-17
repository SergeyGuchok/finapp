import cookieParser from 'cookie-parser'
import cors from 'cors'
import env from 'dotenv'
import express from 'express'

import db from '#database/index'
import loginRoute from '#routes/login'
import signupRoute from '#routes/singup'
import userCategoriesRoute from '#routes/userCategories'
import authMiddleware from "#middlewares/auth";

import('#models/index')

env.config({ path: `./.env.${process.env.NODE_ENV}` })

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    credentials: true,
    origin: '*',
}))

app.use('/api/categories', authMiddleware, userCategoriesRoute)
app.use('/api/login', loginRoute)
app.use('/api/signup', signupRoute)

const init = async () => {
    try {
        await db.authenticate()
        await db.sync({ force: false })
    } catch (e) {
        console.log(e)
    }
}

app.listen(process.env.APP_PORT)

init()
