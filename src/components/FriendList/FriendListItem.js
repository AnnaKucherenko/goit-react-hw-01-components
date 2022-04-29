import PropTypes from 'prop-types';
import style from './FriendList.module.css';

const FriendListItem = ({
  avatar,
  name,
  isOnline,
  id,
}) => {
  return (
    <li  key={id} className={style.item}>
      <span className={style.status}  style={{backgroundColor:isOnline?'green':'red'}}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;