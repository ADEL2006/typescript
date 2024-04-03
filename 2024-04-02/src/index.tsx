import ReactDOM from 'react-dom/client';
import App from "./App";
import * as D from './data';
import { Component } from 'react';

// const children = [
//   <li>
//     <a href="http://www.google.com" target = "_blank">
//       <p>go to Google</p>
//     </a>
//   </li>,
//   <li>
//     <a href="http://www.facebook.com" target = "_blank">
//       <p>go to Facebook</p>
//     </a>
//   </li>,
//   <li>
//     <a href="http://www.twitter.com" target = "_blank">
//       <p>go to Twitter</p>
//     </a>
//   </li>
// ]
// const rootVirtualDOM = <ul>{children}</ul>

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(rootVirtualDOM);

// ------------------------------------------------------------------------------------------------

// const websites = [
//   { name: "Google", url: "http://www.google.com" },
//   { name: "Facebook", url: "http://www.facebook.com" },
//   { name: "Twitter", url: "http://twitter.com" }
// ];
// const children = websites.map((site, index) => (
//   <li key={index}>
//     <a href={site.url} target="_blank" rel="noreferrer noopener">
//       <p>go to {site.name}</p>
//     </a>
//   </li>
// ));
// // 생성된 li 요소 배열을 ul 요소에 포함
// const rootVirtualDOM = <ul>{children}</ul>;
// // ReactDOM.createRoot를 사용하여 DOM에 렌더링
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(rootVirtualDOM);

// ------------------------------------------------------------------------------------------------

// const children = D.makeArray(10).map((notUsed, index) => (
//   <div key={index}>
//     <p>{D.randomId()}</p>
//     <p>{D.randomName()}</p>
//     <p>{D.randomJobTitle()}</p>
//     <p>{D.randomSentence()}</p>
//     <img src={D.randomAvatar()} width={100} height={100} />
//   </div>
// ))
// const rootVirtualDOM = <div>{children}</div>;

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(rootVirtualDOM);

// ------------------------------------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);