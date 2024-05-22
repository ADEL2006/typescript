import './App.css';
import InputTest from './pages/InputTest';
import HigherOrderRadioInputTest from './pages/HigherOrderRadioInputTest';
import NumberState from './pages/NumberState';
import RadioInputTest from './pages/RadioInputTest';
import ShowHideModal from './pages/ShowHideModal';

// function App() {
//   return (
//     <main>
//       <HigherOrderRadioInputTest />
//       <RadioInputTest />
//       <ShowHideModal />
//       <InputTest />
//       <NumberState />
//     </main>
//   );
// }

// export default App;

// import {useState} from 'react';
// import NameForm from './pages/NameForm';
// import {Subject} from './components';

// export default function App() {
//   const [name, setName] = useState<string>('');

//   return (
//     <main>
//       <Subject>NameFome</Subject>
//       <NameForm name={name} setName={setName}/>
//     </main>
//   )
// }

export default function App() {
  return (
    <div>
      <InputTest />
      <HigherOrderRadioInputTest />
      <NumberState />
      <RadioInputTest />
      <ShowHideModal />
    </div>
    )
}