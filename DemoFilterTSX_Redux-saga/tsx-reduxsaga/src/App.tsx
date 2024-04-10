import React, { useState } from 'react';
import '@shopify/polaris/build/esm/styles.css';
import './App.css';
import DemoCreateNewAddressLastest from 'Components/DEMO/DemoCreateNewAddressLastest';
import Demo63citys from 'Components/DEMO/Demo63citys';
import DemoFixed from 'Components/DEMO/DemoFixed';
function App() {
  return (
    <div className="App">
{/* <DemoCreateNewAddressLastest/> */}
{/* <Demo63citys/> */}
<DemoFixed/>
    </div>
  );
}

export default App;
