import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';


const NewMeetup = () => {
    const router = useRouter();

    async function addMeetupHandler(enteredMeetupData){
        //console.log(enteredMeetupData);
        const resp = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const retorno = await resp.json();

        console.log(retorno);

        router.push('/');
        
    }

    return (
        <NewMeetupForm  onAddMeetup={addMeetupHandler} />

    );
}

export default NewMeetup;