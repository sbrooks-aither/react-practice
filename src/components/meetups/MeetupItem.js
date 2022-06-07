import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

const MeetupItem = ({ id, image, title, address, description }) => {
    return (
        <li className={classes.item}>
          <Card>
            <div>
                <img src={ image } alt={ title } className={classes.image} />
            </div>
            <div className={classes.content}>
                <h3>{ title }</h3>
                <address>{ address }</address>
                <p>{ description }</p>
            </div>
            <div className={classes.actions}>
                <button>To Favorites</button>
            </div>
          </Card>
        </li>
    );
};

export default MeetupItem;