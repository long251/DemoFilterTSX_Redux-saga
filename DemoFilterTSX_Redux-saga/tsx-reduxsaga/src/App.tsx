import React from 'react';
import '@shopify/polaris/build/esm/styles.css';
import './App.css';
import DemoIcon from 'Components/Demo/DemoMini/DemoIcon';
import InfiniteLoop from 'Components/Demo/DemoLarge/DemoScrollXListItem';
import DemoNhapNho from 'Components/Demo/DemoMini/DemoNhapNho';
// import DemoScrollXListItem from 'Components/Demo/DemoScrollXListItem';
function App() {
  return (
    <div className="App">
      {/* <DemoIcon /> */}
      {/* <InfiniteLoop/> */}
      <DemoNhapNho/>
    </div>
  );
}

export default App;
