import {MongoClient, Db} from 'mongodb'


const uri = process.env.MONGODB_URI

let cachedDb: Db

async function connectToDatabase(uri: string) {
  
  if (cachedDb) return cachedDb

    const client = await MongoClient.connect(uri)
  
    const db = client.db('newsletter')
    cachedDb = db

    return db

}


export default connectToDatabase