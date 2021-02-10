import React from 'react';
import { Tarif } from "../Tarif";
import PropTypes from 'prop-types';

export const TarifList = ({ tarifList, selectedTarif, selectTarif }) => (
  tarifList.map(tarif => (
    <Tarif
      key={tarif.id}
      payMoney={tarif.pay}
      getMoney={tarif.get}
      id={tarif.id}
      selectTarif={selectTarif}
      selectedTarif={selectedTarif}
    />
  ))
)

TarifList.propTypes = {
  tarifList: PropTypes.array.isRequired,
  selectTarif: PropTypes.func.isRequired,
  selectedTarif: PropTypes.number.isRequired,
}

