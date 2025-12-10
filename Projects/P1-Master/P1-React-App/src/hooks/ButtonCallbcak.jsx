import { memo } from "react";

const ButtonCallback= memo(function ButtonCallback({ children, ...props }) {
  console.log('buttn callback');
  return <button {...props}>{children}</button>;
});
export default ButtonCallback;
