import React from 'react';
import '@shopify/polaris/build/esm/styles.css';
import './App.css';
import AccountTableFilter from './Components/Account/AccountTableFilter';
import AccountLogic from './Logic/AccountLogic';

function App() {
  return (
    <div className="App">
      <AccountLogic/>
    </div>
  );
}

export default App;
