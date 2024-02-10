import env from "dotenv";
import { Sequelize } from 'sequelize'

env.config({ path: `./.env.${process.env.NODE_ENV}` })

const host = process.env.DB_HOST
const port = process.env.DB_PORT
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const name = process.env.DB_NAME

const sequelize = new Sequelize(name, username, password, {
    host,
    port,
    dialect: 'mysql'
})

export default sequelize
