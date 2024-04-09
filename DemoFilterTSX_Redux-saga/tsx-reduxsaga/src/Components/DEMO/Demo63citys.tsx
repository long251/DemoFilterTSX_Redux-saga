import React, { useState, useEffect } from 'react';

const Demo63citys = () => {
  // State for radio button value
  const [addressType, setAddressType] = useState('HOME');
  const [initialAddressType, setInitialAddressType] = useState('HOME');

  // Effect to set initial radio button value when component mounts
  useEffect(() => {
    setInitialAddressType(addressType);
  }, []);

  // Function to handle radio button change
  const handleAddressTypeChange = (event: any) => {
    setAddressType(event.target.value);
  };

  // Function to reset radio button to initial value
  const resetAddressType = () => {
    setAddressType(initialAddressType);
  };

  // Function to save or update address
  const saveOrUpdateAddress = () => {
    // Logic to save or update address with addressType
  };

  return (
    <div>
      <div>
        {/* Radio buttons */}
        <input
          type="radio"
          id="home"
          value="HOME"
          checked={addressType === 'HOME'}
          onChange={handleAddressTypeChange}
        />
        <label htmlFor="home">Home</label>

        <input
          type="radio"
          id="office"
          value="OFFICE"
          checked={addressType === 'OFFICE'}
          onChange={handleAddressTypeChange}
        />
        <label htmlFor="office">Office</label>
      </div>

      {/* Button to save or update address */}
      <button onClick={saveOrUpdateAddress}>Save/Update Address</button>

      {/* Button to reset address type */}
      <button onClick={resetAddressType}>Reset Address Type</button>
    </div>
  );
};

export default Demo63citys;
