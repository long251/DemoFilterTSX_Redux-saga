import React, { useState } from 'react';
import './demo.scss';
import { FormLayout, TextField } from '@shopify/polaris';
function DemoButtonDiv(props: any) {
    
    return (
<FormLayout>
      <FormLayout.Group condensed>
        {/* <TextField label="Length" onChange={() => {}} autoComplete="off" />
        <TextField label="Width" onChange={() => {}} autoComplete="off" />
        <TextField label="Height" onChange={() => {}} autoComplete="off" />
        <TextField label="Unit" onChange={() => {}} autoComplete="off" /> */}

                          
                          {/* Điện thoại */}
                          <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
                            <label className='labelName' style={{ width: '8.5%' }}>
                              Điện thoại<span className='labelNameSpan'>*</span>
                            </label>
                            <input className='phoneAreaCode' type='text' value='+84' readOnly />
                            <input
                              className='phoneNumber'
                              type='tel'
                              placeholder='Nhập số điện thoại của bạn'
                              value='0943123123'
                            />
                          </div>
      </FormLayout.Group>
    </FormLayout>
    );
}

export default DemoButtonDiv;