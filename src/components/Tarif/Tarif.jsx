import React from 'react';
import PropTypes from 'prop-types';
import './Tarif.scss';


export const Tarif = ({ getMoney, payMoney, id, selectedTarif, selectTarif }) => (
  <div
    className={selectedTarif === id ? "tarif-card tarif-card--active" : "tarif-card"}
    onClick={() => (
      selectTarif(id, getMoney)
    )}
  >
    <h2 className="tarif-card__pay">Пополнить на</h2>
    <span className="tarif-card__pay__value">$ {payMoney}</span>
    <h2 className="tarif-card__get">Получить</h2>
    <span
      className={
        selectedTarif === id
          ? "tarif-card__get__value tarif-card__get__value--active"
          : "tarif-card__get__value"}
    >
      $ {getMoney}
    </span>
  </div>
)

Tarif.propTypes = {
  id: PropTypes.number.isRequired,
  getMoney: PropTypes.number.isRequired,
  payMoney: PropTypes.number.isRequired,
  selectTarif: PropTypes.func.isRequired,
  selectedTarif: PropTypes.number.isRequired,
}
