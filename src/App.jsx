import React, { useState } from 'react';
import { Portal } from './components/Portal';
import { ModalWindow } from "./components/ModalWindow";
import { Button } from "./components/Button";
import './App.scss';

function App() {
  const [modalActive, setModalActive] = useState(false);

  const changeVisModalWindow = (bool) => (
    setModalActive(bool)
  );

  return (
    <>
      <div className="button-wrap">
        <Button
          handleClick={changeVisModalWindow}
          buttonName={'Открыть модалку'}
        />
      </div>
      {modalActive && (
        <Portal>
          <ModalWindow
            onChangeVisModalWindow={changeVisModalWindow}
          />
        </Portal>
      )}
    </>
  );
}

export default App;
