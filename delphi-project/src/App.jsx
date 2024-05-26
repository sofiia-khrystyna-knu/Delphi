import React from 'react';
import './App.css';
import { Stacked } from './components/firstRound/Stacked';
import { dataset, datasetRec } from './components/datasets';
import { statements, recomendations } from '../../answers';
import { IQD } from './components/firstRound/IQD';

function App() {
  return (
    <div className="app-container">
      <h1>Аналіз та реалізація методу Делфі</h1>
      <h2>Перший раунд</h2>
      <div className="chart-container">
        <Stacked data={dataset} title={'Твердження'} />
        <IQD answers={statements} title={'IQD Твердження'} labels={dataset.labels}/>
      </div>
      <div className="chart-container">
        <Stacked data={datasetRec} title={'Рекомендації'} />
        <IQD answers={recomendations} title={'IQD Рекомендації'} labels={datasetRec.labels}/>
      </div>
      {/* ще не зроблено */}
      <h2>Другий раунд</h2>
      <div className="chart-container">
        <Stacked data={dataset} title={'Твердження'} />
        <Stacked data={datasetRec} title={'IQD Твердження'} />
      </div>
      <div className="chart-container">
        <Stacked data={datasetRec} title={'Рекомендації'} />
        <Stacked data={datasetRec} title={'IQD Рекомендації'} />
      </div>
    </div>
  );
}

export default App;
