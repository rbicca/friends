import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

export const DATA = [
    {
        id: 'm1',
        title: 'Dev Intersection',
        image: 'data:image/jpeg;base64,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',
        address: 'The great Swan and Doplhin at WDW',
        description: 'Where dreams come true'
    },{
        id: 'm2',
        title: 'Cruise Line',
        image: 'data:image/jpeg;base64,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',
        address: 'The new Wish!',
        description: 'Where relax come true'
    }
];

const Home = (props) => {

    return (
        <>
        <Head>
            <title>Meus mitás</title>
            <meta name='description' content='Lista os encontros memoráveis dos friends' />
        </Head>
        <MeetupList meetups={props.meetups} />
        </>
    );
}


export async function getStaticProps(){
    //chama api
    //pqp -> O cara vai rodar chamada aqui, sem criar api
    const client = await MongoClient.connect('mongodb+srv://uHerval:herval@cluster0.ubhpk.mongodb.net/maxnext?retryWrites=true&w=majority');
    const db = client.db();

    const eventos = db.collection('eventos');

    const dados = await eventos.find().toArray();

    return {
        props:{
            meetups: dados.map(e => ({
                title: e.title,
                address: e.address,
                image: e.image,
                description: e.description,
                id: e._id.toString()
            }))
        }
    }
}

export default Home;