import { useState } from 'react';

const Viewer = () => {
  const [count, setCount] = useState<number>(0);
  return <div className="flex justify-center"><p className="text-3xl text-bold text-primary">{count}</p></div>
}
export default Viewer
