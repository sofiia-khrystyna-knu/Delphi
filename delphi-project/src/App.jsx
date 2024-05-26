import React from 'react';
import './App.css';
import { Stacked } from './components/firstRound/Stacked';
import { StackedRec } from './components/firstRound/StackedRec';
import { dataset, datasetRec } from './components/datasets';

function App() {
  return (
    <div className="app-container">
      <h1>Аналіз та реалізація методу Делфі</h1>
      <h2>Перший раунд</h2>
      <div className="chart-container">
        <Stacked data = {dataset} title = {'Твердження'}/>
        <Stacked data = {datasetRec} title = {'IQD Твердження'}/>
      </div>
      <div className="chart-container">
        <Stacked data = {dataset} title = {'Рекомендації'}/>
        <Stacked data = {datasetRec} title = {'IQD Рекомендації'}/>
      </div>

      {/* ще не зроблено */}
      <h2>Другий раунд</h2>
      <div className="chart-container">
        <Stacked data = {dataset} title = {'Твердження'}/>
        <Stacked data = {datasetRec} title = {'IQD Твердження'}/>
      </div>
      <div className="chart-container">
        <Stacked data = {dataset} title = {'Рекомендації'}/>
        <Stacked data = {datasetRec} title = {'IQD Рекомендації'}/>
      </div>
    </div>
  );
}

export default App;
