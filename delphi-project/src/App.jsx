import React from 'react';
import './App.css';
import { Stacked } from './components/Stacked';
import { dataset1, dataset2, datasetRec } from './components/datasets';
import { statements1, recomendations1, statements2, recomendations2 } from '../../answers';
import { IQD } from './components/IQD';

function App() {
  return (
    <div className="app-container">
      <h1>Аналіз та реалізація методу Делфі</h1>
      <h2>Перший раунд</h2>
      <div className="chart-container">
        <Stacked data={dataset1} title={'Твердження'} text={'Порядковий номер твердження'}/>
        <IQD answers={statements1} title={'IQD Твердження'} labels={dataset1.labels} text={'Порядковий номер твердження'}/>
      </div>
      <div className="chart-container">
        <Stacked data={datasetRec} title={'Рекомендації'} text={'Порядковий номер рекомендації'} labels={datasetRec.labels}/>
        <IQD answers={recomendations1} title={'IQD Рекомендації'} labels={datasetRec.labels} text={'Порядковий номер рекомендації'}/>
      </div>
      
      <h2>Другий раунд</h2>
      <div className="chart-container">
        <Stacked data={dataset2} title={'Твердження'} text={'Порядковий номер твердження'}/>
        <IQD answers={statements2} title={'IQD Твердження'} labels={dataset1.labels} text={'Порядковий номер твердження'}/>
      </div>
      <div className="chart-container">
        <Stacked data={datasetRec} title={'Рекомендації'} text={'Порядковий номер рекомендації'} labels={datasetRec.labels}/>
        <IQD answers={recomendations2} title={'IQD Рекомендації'} labels={datasetRec.labels} text={'Порядковий номер рекомендації'}/>
      </div>
    </div>
  );
}

export default App;
