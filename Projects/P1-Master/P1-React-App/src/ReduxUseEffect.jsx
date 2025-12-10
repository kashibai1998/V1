import { useEffect, useState } from 'react';
import Notification from './thunk/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from './thunk';

export default function ReduxUseEffect() {
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  //1 way using use effect
  useEffect(() => {
    const fetchData = async () => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Pending',
          message: 'pending...',
        })
      );
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );
      if (!response.ok) {
        throw new Error('Failed');
      }
      const resData = await response.json();
      setData(resData);
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success',
          message: 'success...',
        })
      );
    };
    fetchData().catch((err) => {
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success',
          message: 'success...',
        })
      );
    });
  }, [dispatch]);
  return (
    <div>
      <h1>ReduxThunk</h1>
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
