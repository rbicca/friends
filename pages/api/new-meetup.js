//POST /api/new-meetup
import { MongoClient } from 'mongodb';


async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body;
        //const { title, image, address, description} = data;

        //Persistir a bagaça
        const client = await MongoClient.connect('mongodb+srv://uHerval:herval@cluster0.ubhpk.mongodb.net/maxnext?retryWrites=true&w=majority');
        const db = client.db();

        const eventos = db.collection('eventos');
        const result = await eventos.insertOne(data);

        console.log(result);

        //client.close();

        res.status(201).json({message: 'mitá inserido!'});

    }
}

export default handler;