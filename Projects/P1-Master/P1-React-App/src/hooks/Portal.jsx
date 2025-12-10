import { createPortal } from 'react-dom';
export default function Portal() {
  return createPortal(
    <div>hello from creatPortal</div>,
    document.getElementById('portal')
  );
}
