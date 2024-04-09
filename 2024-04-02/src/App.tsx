import * as D from './data';
import P from './P';
import { Component } from 'react';
import ClassComponent from './ClassComponent';

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

// export default class App extends Component {
//   render() {
//     const isLoading = true;
//     if (isLoading) return <p>Loading...</p>

//     return (
//       <ul>
//         <li>
//           <a href="http://www.google.com">
//             <p>go to Google</p>
//           </a>
//         </li>
//       </ul>
//     )
//   }
// }

// ------------------------------------------------------------------------------------------------

// export default class App extends Component {
//   render() {
//     const isLoading = true;
//     const children = (
//       <li>
//         <a href="http://www.google.com">
//           <p>go to Google</p>
//         </a>
//       </li>
//     )

//     return (
//       <div>
//         {isLoading && <p>loading...</p>}
//         {!isLoading && <ul>{children}</ul>}
//       </div>
//     )
//   }
// }

// ------------------------------------------------------------------------------------------------

// export default class App extends Component {
//   render() {
//     const isLoading = true;
//     const children = isLoading ? (
//       <p>loading......</p>
//     ) : (
//       <ul>
//         <li>
//           <a href="http://www.google.com">
//             <p>go to Google</p>
//           </a>
//         </li>
//       </ul>
//     )
//     return (
//       <div>
//         <div>{children}</div>
//       </div>
//     )
//   }
// }

// ------------------------------------------------------------------------------------------------

// export default class App extends Component {
//   render() {
//     return (
//       <ul>
//         {/* <ClassComponent href="http://www.google.com" text="go to Google"/> */}
//         <ClassComponent href="http://www.twitter.com" text="go to Twitter"/>
//       </ul>
//     )
//   }
// }

// ------------------------------------------------------------------------------------------------

export default function App() {
  const texts = ['hello', 'world']. map((text, index) => <P key={index} children={text}/>)
  return <div children={texts}/>
}