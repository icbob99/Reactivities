
import './App.css'
import DuckItem from './assets/DuckItem'
import { ducks } from './demo'

function App() {

  return (
    <div className='App'>
      <h1>Reactivities</h1>
      {ducks.map(duck => (
        <DuckItem key={duck.name} duck={duck} />
      ))}
    </div>
  )
}

export default App
