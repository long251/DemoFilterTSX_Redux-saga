import React, { useState } from 'react';
import '@shopify/polaris/build/esm/styles.css';
import './App.css';
import DemoCreateNewAddressLastest from 'Components/DEMO/DemoCreateNewAddressLastest';
import Demo63citys from 'Components/DEMO/Demo63citys';
import DemoFixed from 'Components/DEMO/DemoFixed';
import DemoButtonDiv from 'Components/DEMO/DemoButtonDiv';
import TopBarExample from 'Components/DEMO/Demo2';
function App() {
  return (
    <div className="App">
{/* <DemoCreateNewAddressLastest/> */}
{/* <Demo63citys/> */}
{/* <DemoFixed/> */}
<DemoButtonDiv/>
<TopBarExample/>
    </div>
  );
}

export default App;
