import * as React from 'react';

import img from '../../assets/img/lunch.png';

export interface IBody {}

export default function Body(props: IBody) {
  return (
    <div className='lg:ml-3'>
      <img src={img} alt='' />
    </div>
  );
}
