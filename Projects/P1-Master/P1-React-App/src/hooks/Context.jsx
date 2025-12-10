import { createContext, useState } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export default function ThemeProvider({ children }) {
  const [themee, setThemee] = useState('light');
  function handleTheme() {
    // console.log('click');
    setThemee((curr) => (curr === 'light' ? 'dark' : 'light'));
  };
  // const ctxValue = {
  //   theme: themee,
  //   toggleTheme: handleTheme,
  // };
  return (
    <ThemeContext.Provider value={{theme:themee,toggleTheme:handleTheme}}>{children}</ThemeContext.Provider>
  );
}
