import logo from '../logo.svg';

const desc = ['Fund', 'core', 'crusial'];
const getRandom = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

const Header = () => {
  const description = desc[getRandom(2)];
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn {description} React
      </a>
    </header>
  );
};
export default Header;
