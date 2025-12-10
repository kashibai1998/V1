import React from 'react';
import { useEffect, useState } from 'react';

// const withLoadingComponent = (props) => {
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     setLoading(true);
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 500);
//     return () => {
//       clearTimeout(timer);
//     };
//   });
// };

const WithLoading = (WrappedComponent) => {
  return function WithLoadingComponent(props) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }, []);
    return <WrappedComponent {...props} loading={loading} />;
  };
};

const MyComponent = ({ loading }) => {
  return (
    <div>{loading ? <p>loading</p> : <p> data loaded successfully</p>}</div>
  );
};

const EnhancedLoading = WithLoading(MyComponent);
export default EnhancedLoading;
