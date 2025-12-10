import { useRef, useState } from 'react';
import Forwardref from './Forwardref';

export default function Usestate() {
  const [name, setName] = useState('');
  //   const [submit, setSubmit] = useState(false);
  const playerName = useRef();
  const player = useRef();
  //   const handleChange = (event) => {
  //     setSubmit(false);
  //     setName(event.target.value);
  //   };
  const handleClick = () => {
    // setSubmit(true);
    setName(playerName.current.value);
    console.log(player.current.value);
  };

  return (
    <div>
      <h2>useRef</h2>
      {/* <p> welcome {submit ? name : 'unknown'}</p> */}
      <p> welcome {name ? name : 'unknown'}</p>
      <input type="text" ref={playerName} />
      {/* working */}

      <Forwardref ref={player} />
      <button onClick={handleClick}>save</button>
    </div>
  );
}
