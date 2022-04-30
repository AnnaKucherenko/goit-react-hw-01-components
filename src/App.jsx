import Profile from './components/Profile/profile';
import user from './components/Profile/user.json';
import Section from 'components/Statistics/Section';
import StatisticsList from 'components/Statistics/StatisticsList';
import stats from './components/Statistics/statistics.json';
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/Friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import items from './components/TransactionHistory/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Section title="Upload stats">
          <StatisticsList items={stats} />
      </Section>

      <FriendList friends={friends} />

      <TransactionHistory items={items} />
      
    </div>
    
  ); 

};
