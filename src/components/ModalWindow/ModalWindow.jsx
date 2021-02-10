import React, { useState } from 'react';
import { Timer } from "../Timer";
import { SelectPay } from "../SelectPay";
import Alert from '@material-ui/lab/Alert';

import './ModalWindow.scss';

import PropTypes from 'prop-types';
import { TarifList } from "../TarifList";
import { Button } from "../Button";

export const ModalWindow = ({ onChangeVisModalWindow }) => {
  const [selectedTarif, setSelectedTarif] = useState(2)
  const [amountCredited, setAmountCredited] = useState(1000)
  const [paymentMethod, setPaymentMethod] = useState("Банковская карта")
  const [visAlert, setVisAlert] = useState(false)
  const tarifList = [
    {
      id: 1,
      pay: 50,
      get: 100,
    },
    {
      id: 2,
      pay: 500,
      get: 1000,
    },
    {
      id: 3,
      pay: 100,
      get: 200,
    }
  ];

  const selectTarif = (id, amountMoney) => {
    if (id !== selectedTarif) {
      setSelectedTarif(id)
      setAmountCredited(amountMoney)
      setVisAlert(false)
    }
  }

  const getPayMethod = (selectedOption) => {
    const { label } = selectedOption

    setPaymentMethod(label);
    setVisAlert(false)
  }

  return (
    <div className="modal-window">
      {visAlert && (
        <div className="modal-window__alert">
          <Alert
            onClose={() => {setVisAlert(false)}}
          >
            Способ оплаты: <b>{paymentMethod}</b> <br/> К зачислению: <b>{amountCredited}</b>
          </Alert>
        </div>
      )}
      <img
        onClick={() => onChangeVisModalWindow(false)}
        className="modal-window__close"
        src="./close.svg"
        alt="close"
      />
      <div className="modal-window__trigger">
        +100%
      </div>
      <div className="modal-window__timer">
        <Timer />
      </div>
      <h1
        className="modal-window__title"
      >
        Увеличьте свой депозит!
      </h1>
      <SelectPay
        handleSelect={getPayMethod}
      />
      <div className="modal-window__tarifs">
        <TarifList
          tarifList={tarifList}
          selectTarif={selectTarif}
          selectedTarif={selectedTarif}
        />
      </div>
      <p className="modal-window__amount-cradit">
        <span
          className="modal-window__amount-cradit__value"
        >
          ${amountCredited},
        </span>
        <span className="modal-window__amount-cradit__after-point">
          00
        </span>
        {" "}
        будет зачислено вам на счет
      </p>
      <div className="modal-window__button-wrap">
        <Button
          handleClick={() => setVisAlert(true)}
          buttonName={"Пополнить"}
        />
      </div>
      <p className="modal-window__info">При пополнении счета с банковской карты списание средств
        <br/>происходит по курсу банка клиента
      </p>
      <a
        className="modal-window__details"
        href="https://www.google.com/"
        target="_blank"
        rel="noreferrer"
      >
        ПОДРОБНЕЕ
      </a>
    </div>
  )
}

ModalWindow.propTypes = {
  onChangeVisModalWindow: PropTypes.func.isRequired,
}
