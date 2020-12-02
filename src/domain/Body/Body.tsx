import * as React from 'react';

import img from '../../assets/img/lunch.png';

export interface IBody {}

export default function Body(props: IBody) {
  return (
    <div className='lg:ml-3 flex lg:mt-8 '>
      <div className=''>
        <img src={img} alt='' />
      </div>
      <div className='flex justify-end w-2/3 mr-10'>
        <div className='bg-fr text-white h-12 mr-10 py-3 px-4 w-44'>
          Filter by Year
        </div>
        <div className='bg-fr text-white h-12 mr-10 py-3 px-4 w-44 '>
          Sort Descending
        </div>
      </div>
    </div>
  );
}
