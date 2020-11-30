import * as React from 'react';

import logo from '../../assets/img/logo.png';

export interface IHeader {}

export default function Header(props: IHeader) {
  return (
    <div className='w-1/2'>
      <img src={logo} alt='' />
    </div>
  );
}
