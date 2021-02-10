import { useEffect } from 'react';
import ReactDOM from 'react-dom';

export const Portal = ({ children }) => {
  const el = document.createElement('div');

  useEffect(() => {
    document.body.append(el);

    return (
      () => {
        document.body.removeChild(el);
      }
    );
  }, []);

  return ReactDOM.createPortal(children, el);
};

export default Portal;
