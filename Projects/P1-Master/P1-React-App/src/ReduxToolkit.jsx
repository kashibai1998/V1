import Auth from './store/Auth';
import CounterToolkit from './store/CounterToolkit';

export default function ReduxToolkit() {
  return (
    <div>
      <h1>REDUX Toolkit</h1>
      <Auth />
      <CounterToolkit />
    </div>
  );
}
