import Usestate from './hooks/Usestate';
import Useref from './hooks/Useref';
import Portal from './hooks/Portal';
import './index.css';
import ThemeProvider, { ThemeContext } from './hooks/Context';
import { useContext } from 'react';
import Reducer from './hooks/Reducer';
import Effect from './hooks/Effect';
// import useFetch from './hooks/Usefetch';
import Header from './hooks/Header';
import UseCallback from './hooks/UseCallback';
// import UseMemo from './hooks/UseMemo';

export default function Hooks() {
  const { theme } = useContext(ThemeContext);
  // const data = useFetch('https://jsonplaceholder.typicode.com/todos');
  // console.log(data);
  const cls = theme;
  return (
    <ThemeProvider>
      <div className={cls}>
        <Header />
        <h1>Hooks</h1>
        <Usestate />
        <Useref className={cls} />
        <Portal />
        <Reducer />
        <Effect />
        <UseCallback />
        {/* <UseMemo /> */}
      </div>
    </ThemeProvider>
  );
}
