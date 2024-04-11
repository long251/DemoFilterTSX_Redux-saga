import React, { useState } from 'react';

function DemoButtonDiv(props: any) {
    const [selectedDiv, setSelectedDiv] = useState<number | null>(null);
    const handleDivClick = (index: number) => {
        setSelectedDiv(index);
      };
    return (
        <div style={{display: 'flex'}}>
            <div>
            <div style={{width: '100px', height: '100px', border: '1px solid red', backgroundColor: selectedDiv === 1 ? 'gray' : 'transparent',}} onClick={() => handleDivClick(1)}>1</div>
            <div style={{width: '100px', height: '100px', border: '1px solid red', backgroundColor: selectedDiv === 2 ? 'gray' : 'transparent',}} onClick={() => handleDivClick(2)}>2</div>
            <div style={{width: '100px', height: '100px', border: '1px solid red'}} onClick={() => handleDivClick(3)}>3</div>
            <div style={{width: '100px', height: '100px', border: '1px solid red'}} onClick={() => handleDivClick(4)}>4</div>
            <div style={{width: '100px', height: '100px', border: '1px solid red'}} onClick={() => handleDivClick(5)}>5</div>
            </div>
            <div>
            <div style={{width: '100px', height: '100px', border: '1px solid red'}} onClick={() => handleDivClick(6)}>6</div>
            <div style={{width: '100px', height: '100px', border: '1px solid red'}} onClick={() => handleDivClick(7)}>7</div>
            <div style={{width: '100px', height: '100px', border: '1px solid red'}} onClick={() => handleDivClick(8)}>8</div>
            <div style={{width: '100px', height: '100px', border: '1px solid red'}} onClick={() => handleDivClick(9)}>9</div>
            <div style={{width: '100px', height: '100px', border: '1px solid red'}} onClick={() => handleDivClick(10)}>10</div>
            </div>
        </div>
    );
}

export default DemoButtonDiv;