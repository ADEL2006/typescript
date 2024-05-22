// import { useState, useCallback } from 'react';
// import { Title } from '../components'

// export default function Controller() {
//   const [count, setCount] = useState<number>(0);

//   const increment = useCallback(() => {
//     setCount(count => count + 1);
//   }, [])
//   const decrement = useCallback(() => {
//     setCount(count => count - 1);
//   }, [])

//   return (
//     <section className="mt-4 mb-8">
//       <Title>NumberState</Title>
//       <div className="flex justify-center">
//         <div className="flex items-center justify-between w-1/4 mt-4">
//           <button name="add" className="btn-primary btn-lg" onClick={increment} />
//           <p className="text-3xl text-bold text-primary">{count}</p>
//           <button name="remove" className="btn-accent btn-lg" onClick={decrement} />
//         </div>
//       </div>
//     </section>
//   )
// };
import { useState, useCallback } from 'react';

export default function Controller() {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => {
    setCount(count => count + 1);
  }, [])
  const decrement = useCallback(() => {
    setCount(count => count - 1);
  }, [])

  return (
    <div className="flex justify-center">
      <div className="flex items-center justify-between w-1/4 mt-4">
        <button name="add" className="btn-primary btn-lg" onClick={increment} />
        <button name="remove" className="btn-accent btn-lg" onClick={decrement} />
      </div>
    </div>
  )
}