import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock.jsx';
import Weather from './frontend/weather.jsx';
import Tabs from './frontend/tabs.jsx';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<div className="outer">
    <a className='headers'>Clock</a>
    <div className='clock-block'><Clock /></div>
    <a className='headers'>Weather</a>
    <div className='weather-block'><Weather /></div>
    <a className='headers'>Tabs</a>
    <div className='tabs-block'><Tabs /></div>
  </div>, root);
});
