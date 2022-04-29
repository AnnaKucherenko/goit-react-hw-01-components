import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import style from './FriendList.module.css';


function FriendList({ friends }) {
  return (
    <ul className={style.friendList}>
      {friends.map(friend  => (
        <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
        />
        
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;