import Profile from './components/Profile/profile';
import user from './components/Profile/user.json';
import Section from 'components/Statistics/Section';
import StatisticsList from 'components/Statistics/StatisticsList';
import stats from './components/Statistics/statistics.json';


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
      
    </div>
    
  ); 
  
};
