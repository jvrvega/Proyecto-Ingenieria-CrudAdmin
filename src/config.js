import {config} from "dotenv"

const PORT_DEFAULT = 3100
const MONGO_URI_DEFAULT = "mongodb://127.0.0.1:27017/crudAdmin"

config()

export const PORT = process.env.PORT || PORT_DEFAULT
export const MONGODB_URI = process.env.MONGODB_URI || MONGO_URI_DEFAULT