import classes from './MeetupDetail.module.css';

const MeetupDetail = (props) => {
    return(
        <section className={classes.detail}>
            <img src={props.data.image} alt=''></img>
            <h1>{props.data.title}</h1>
            <address>{props.data.address}</address>
            <p>{props.data.description}</p>
        </section>
    );
};

export default MeetupDetail;