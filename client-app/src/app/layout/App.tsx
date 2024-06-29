
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react'
import './styles.css'
import { Activity } from '../models/Activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data)
    })
  }, [])

  return (
    <div className='App'>
      <NavBar />
      <Container style={{ marginTop: '7em' }} >
       <ActivityDashboard activities={activities}></ActivityDashboard>
      </Container>
    </div>
  )
}

export default App
