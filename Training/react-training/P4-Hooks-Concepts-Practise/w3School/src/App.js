import './App.css';
import ClassComponentDemo from './components/class-components/ClassComponentDemo.jsx';
import FunctionalComponentDemo from './components/function-components/FunctionalComponentDemo.js';
import ClassLifeCycleMethods from './components/class-components/ClassLifeCycleMethods.jsx';
import MainList from './components/function-components/react-list/MainList.jsx';
import ReactMemo from './components/function-components/react-memo/MemoIndex.jsx';
import UseStateHook from './components/function-components/use-state-hook/UseStateReactHook.jsx';
import UseEffectReactHook from './components/function-components/use-effect-hook/UseEffectReactHook.jsx'
import ComponentA from './components/function-components/use-context-hook/ComponentA.jsx';
import ReduxComponent from './components/function-components/redux-component/ReduxComponent.jsx';
import TableComponent from './components/html-css-components/TableComponent/TableComponent.jsx';
import ListComponent from './components/html-css-components/ListComponent/ListComponent.jsx';
import DivInlineBlockComponent from './components/html-css-components/Div-Inline-Block-Component/DivInlineBlockComponent.jsx';
import ClassIdComponent from './components/html-css-components/Class-ID-Component/ClassIdComponent.jsx';
// import FormComponent from './components/html-css-components/Form-Component/FormComponent';
import Counter1 from './components/custum-hooks-counter/Counter1.jsx';
import Counter2 from './components/custum-hooks-counter/Counter2.jsx';

//React-router-dom
{/* <Route path="/*" /> */}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <p> */}
      {/* WelCome to React App */}
      {/* <ClassComponentDemo /> */}
      {/* <FunctionalComponentDemo /> */}
      {/* <ClassLifeCycleMethods /> */}
      {/* <MainList/> */}
      {/* <ReactMemo /> */}
      {/* <UseEffectHook1 /> */}
      {/* <UseStateHook /> */}
      {/* <UseEffectReactHook /> */}
      {/* <ComponentA /> */}
      {/* <ReduxComponent /> */}
      {/* <TableComponent/> */}
      {/* <ListComponent /> */}
      {/* </p> */}
      {/* </header> */}
      {/* <DivInlineBlockComponent /> */}
      {/* <ClassIdComponent /> */}
      {/* <FormComponent /> */}
      <Counter1 />
      <Counter2 />
    </div>
  );
}

export default App;
