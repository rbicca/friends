//import { DATA } from '../index'
import { MongoClient , ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = (props) => {
    return (
        <MeetupDetail data={props.meetupData} />
    );
};


export async function getStaticPaths(){
    const client = await MongoClient.connect('mongodb+srv://uHerval:herval@cluster0.ubhpk.mongodb.net/maxnext?retryWrites=true&w=majority');
    const db = client.db();

    const eventos = db.collection('eventos');
    const data = await eventos.find({}, { _id: 1}).toArray();

    return {
        fallback: 'blocking',
        paths: data.map(e => ({ params: { mid: e._id.toString() } }))
        
        //paths: [
        //    { params: { mid: 'm1' } },
        //    { params: { mid: 'm2' } },
        //]
    };
}

export async function getStaticProps(ctx){
    const id = ctx.params.mid;
    //console.log(id);
    const client = await MongoClient.connect('mongodb+srv://uHerval:herval@cluster0.ubhpk.mongodb.net/maxnext?retryWrites=true&w=majority');
    const db = client.db();

    const eventos = db.collection('eventos');
    const e = await eventos.findOne({ _id: ObjectId(id)});


    return {
        props: {
            meetupData: {
                title: e.title,
                address: e.address,
                image: e.image,
                description: e.description,
                id: e._id.toString()
            }
        }
    };
}

export default MeetupDetails;