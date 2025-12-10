import { useState, useContext } from 'react';
import { ThemeContext } from "./Context";

export default function Usestate() {
    const [name, setName] = useState('');
    const { theme, toggleTheme } = useContext(ThemeContext);
    // console.log(theme)
    
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className={theme}>
      <h2>useState</h2>
      <p>Entered name: {name ? name : '-'}</p>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={toggleTheme}>toggle</button>
    </div>
  );
}
