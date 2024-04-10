// import React from 'react';

// function DemoFixed(props: any) {
//   return (
//     <div style={{ display: 'flex', gap: '24px' }}>
//       <div style={{ width: '320px', height: '216px', backgroundColor: 'red' , position: 'fixed'}}>1</div>
//       <div>
//         <div style={{ width: '1000px', height: '500px', backgroundColor: 'lightpink' }}>2</div>
//         <div style={{ width: '1000px', height: '500px', backgroundColor: 'yellow' }}>2</div>
//         <div style={{ width: '1000px', height: '500px', backgroundColor: 'green' }}>2</div>
//         <div style={{ width: '1000px', height: '500px', backgroundColor: 'gray' }}>2</div>
//         <div style={{ width: '1000px', height: '500px', backgroundColor: 'lightpink' }}>2</div>
//         <div style={{ width: '1000px', height: '500px', backgroundColor: 'yellow' }}>2</div>
//         <div style={{ width: '1000px', height: '500px', backgroundColor: 'green' }}>2</div>
//         <div style={{ width: '1000px', height: '500px', backgroundColor: 'gray' }}>2</div>
//       </div>
//     </div>
//   );
// }

// export default DemoFixed;

import React from 'react';

function DemoFixed(props: any) {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
 <div style={{width: '100%', height:'500px', backgroundColor: 'red', marginBottom: '20px', zIndex: 10}}>header
    <div style={{ display: 'flex', gap: '24px' }}>
      <div style={{ width: '320px', height: '216px', backgroundColor: 'red' , position: 'fixed', top: '0'}}>1</div>
      <div style={{ marginLeft: '344px' }}> {/* Thêm margin left để tạo khoảng cách */}
        <div style={{ width: '1000px', height: '500px', backgroundColor: 'lightpink' }}>2</div>
        <div style={{ width: '1000px', height: '500px', backgroundColor: 'yellow' }}>2</div>
        <div style={{ width: '1000px', height: '500px', backgroundColor: 'green' }}>2</div>
        <div style={{ width: '1000px', height: '500px', backgroundColor: 'gray' }}>2</div>
        <div style={{ width: '1000px', height: '500px', backgroundColor: 'lightpink' }}>2</div>
        <div style={{ width: '1000px', height: '500px', backgroundColor: 'yellow' }}>2</div>
        <div style={{ width: '1000px', height: '500px', backgroundColor: 'green' }}>2</div>
        <div style={{ width: '1000px', height: '500px', backgroundColor: 'gray' }}>2</div>
      </div>
    </div>
    </div>
    </div>
   
  );
}

export default DemoFixed;


