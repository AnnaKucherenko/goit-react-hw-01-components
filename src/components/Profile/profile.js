import PropTypes from 'prop-types';
import style from './profile.module.css';

export default function Profile(props) {

    const { username, avatar, tag, location, followers, views, likes } = props;
    return (
        <div className={style.profile}>
            <div className={style.description}>
                <img
                    src={avatar}
                    alt={username}
                    className={style.avatar}
                />
                <p className={style.username}>{username}</p>
                <p className={style.tag}>@{tag}</p>
                <p className={style.location}>{location}</p>
            </div>

            <ul className={style.stats}>
                <li className={style.statsItem}>
                    <span className={style.label}>Followers</span>
                    <span className={style.quantity}>{followers}</span>
                </li>
                <li className={style.statsItem}>
                    <span className={style.label}>Views</span>
                    <span className={style.quantity}>{views}</span>
                </li>
                <li className={style.statsItem}>
                    <span className={style.label}>Likes</span>
                    <span className={style.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};

