import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUser } from '../Actions/userActions';

export default function User() {
  const { user, error, loading } = useSelector((state) => state.user);
  console.log('user', user);
  console.log('err', error);
  console.log('loading', loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (!error && !loading) {
    return (
      <div>
        {user?.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    );
  }
  return <div>erro not auth</div>;
}
