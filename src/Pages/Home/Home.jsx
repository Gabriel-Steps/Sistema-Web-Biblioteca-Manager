import React from 'react'
import './Home.css';
import Cabecalho from './Cabecalho/Cabecalho'
import Carrossel from './Carrossel/Carrossel';
import Dashboards from './Dashboards/Dashboards';
import Apresentacao from './Apresentacao/Apresentacao';
import SobreMim from './SobreMim/SobreMim';
import Rodape from './Rodape/Rodape';

export default function Home() {
  return (
    <div className='AppContainer'>
      <Cabecalho />
      <Carrossel />
      <Dashboards />
      <SobreMim />
      <Apresentacao />
      <Rodape />
    </div>
  )
}
