import React from 'react';
import '@shopify/polaris/build/esm/styles.css';
import './App.css'; 
import DemoWrap from 'Components/Demo/DemoWrap';
import AccountLogic from 'Logic/AccountLogic';
import DemoImg from 'Components/Demo/DemoImg';

// import DemoScrollXListItem from 'Components/Demo/DemoScrollXListItem';
function App() {
  return (
    <div className="App">
      {/* <DemoWrap/> */}
      {/* <AccountLogic/> */}
      <DemoImg/>
    </div>
  );
}

export default App;
