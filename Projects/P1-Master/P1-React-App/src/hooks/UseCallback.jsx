import { useCallback, useState } from 'react';
import ButtonCallback from './ButtonCallbcak';

export default function UseCallback() {
  const [counter, setCounter] = useState(0);

  //without useCallback

  //   function handleDec() {
  //     setCounter((c) => c - 1);
  //   }
  //   function handleInc() {
  //     setCounter((c) => c + 1);
  //   }
  //with callback
  const handleDec = useCallback(function handleDec() {
    setCounter((c) => c - 1);
  }, []);
  const handleInc = useCallback(()=> {
    setCounter((c) => c + 1);
  }, []);
  return (
    <div>
      <h1>use callback</h1>
      <ButtonCallback onClick={handleInc}>Inc</ButtonCallback>
      <ButtonCallback onClick={handleDec}>Dec</ButtonCallback>
      <h2>counter - {counter}</h2>
    </div>
  );
}
