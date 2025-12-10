import { useCallback, useState } from 'react';
// import {useMemo} from 'react'

// export const calculation = (num) => {
//     console.log('calculating');
//     // for (let i = 0; i < 1; i++){
//     //     num = num+1
//     // }
//   return num;
// };

export default function UseMemo() {
  const [counter, setCounter] = useState(0);
//   const calc = useMemo(() => calculation(counter), [counter]);

  const handleInc = useCallback(() => {
    setCounter((c) => c + 1);
  }, []);
  return (
    <div>
      <h1>usememo</h1>
      <button onClick={handleInc}>inc</button>
      <p>counter- {counter}</p>
      {/* <p>calc -{calc}</p> */}
    </div>
  );
}
