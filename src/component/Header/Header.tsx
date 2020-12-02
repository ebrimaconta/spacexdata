import * as React from 'react';

import logo from '../../assets/img/logo.png';

export interface IHeader {}

export default function Header(props: IHeader) {
  return (
    <div className='w-full flex flex-row justify-between   '>
      <div className='flex flex-row'>
        <div className='w-48'>
          <img src={logo} alt='' />
        </div>
        <div className='uppercase text-xl pt-1 text-sc  tracking-widest'>
          lunches
        </div>
      </div>

      <div className='bg-fr w-44 text-white pl-5 h-10 py-2 rounded-l-3xl'>
        Reload Data
      </div>
    </div>
  );
}
