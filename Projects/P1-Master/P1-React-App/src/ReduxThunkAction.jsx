import { useEffect } from 'react';
import Notification from './thunk/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './thunk/action';

export default function ReduxThunkAction() {
  const ui = useSelector((state) => state.ui);
  const { items: data, notification } = ui;
  const dispatch = useDispatch();

  //1 way using use effect
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div>
      <h1>ReduxThunk with action creators</h1>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}
