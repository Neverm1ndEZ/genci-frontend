import React from 'react';
import Iframe from 'react-iframe';
import Spline from '@splinetool/react-spline';

export default function SplineTab() {
  return (
    <Iframe
      src="https://my.spline.design/gens-98ea05d5f8cb855d4e3c4f774e1230a0/"
      width="350px"
      styles={{
        borderRadius: '13px',
        backgroundColor: '#0D0F10',
        height: '450px',
      }}
    ></Iframe>
  );
}
