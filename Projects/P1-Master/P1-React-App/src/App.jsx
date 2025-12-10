// eslint-disable-next-line
import './App.css';
import conepts from './data';
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButtons';
import { useState } from 'react';
function App() {
  const [tab, setTab] = useState('please chek');

  const handleSelect = (sel) => {
    setTab(sel);
  };
  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {conepts.map((con) => (
          <CoreConcept key={con.title} title={con.title} desc={con.desc} />
        ))}
      </div>
      <menu>
        <TabButton
          isSelected={tab === 'Components'}
          onSelect={() => handleSelect('Components')}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={tab === 'prop'}
          onSelect={() => handleSelect('prop')}
        >
          props
        </TabButton>
        <TabButton
          isSelected={tab === 'jsx'}
          onSelect={() => handleSelect('jsx')}
        >
          jsx
        </TabButton>
        <TabButton
          isSelected={tab === 'state'}
          onSelect={() => handleSelect('state')}
        >
          state
        </TabButton>
      </menu>
      <div>{tab}</div>
      <div>
        learn react
      </div>
    </div>
  );
}

export default App;
