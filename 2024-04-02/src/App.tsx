import * as D from './data';
import { Component } from 'react';

// export default function App() {
//   return (
//     <div>
//       <p>
//         {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
//       </p>
//       <img src={D.randomAvatar()} height="50" />
//       <img src={D.randomImage()} height="300" />
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------

// export default class App extends Component {
//   render() {
//     return (
//       <ul>
//         <li>
//           <a href="http://www.google.com">
//             <p>go to google</p>
//           </a>
//         </li>
//       </ul>
//     )
//   }
// }

// ------------------------------------------------------------------------------------------------

export default class App extends Component {
  render() {
    const isLoading = true;
    if (isLoading) return <p>Loading...</p>

    return (
      <ul>
        <li>
          <a href="http://www.google.com">
            <p>go to Google</p>
          </a>
        </li>
      </ul>
    )
  }
}