import { forwardRef } from 'react';

export default forwardRef(function Forwardref({ ...props }, ref) {
  return (
    <div>
      <h2>forward ref</h2>
      <input type="text" ref={ref} {...props} />
    </div>
  );
});
