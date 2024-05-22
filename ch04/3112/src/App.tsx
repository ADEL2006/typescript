import './App.css'
import { Title } from './components'
import Controller from './pages/Controller';
import Viewer from './pages/Viewer';

function App() {
  return (
    <div className="App">
      <Title className="m-4">Counter</Title>
      <section><Viewer /></section>
      <section><Controller /></section>
    </div>
  )
}

export default App
