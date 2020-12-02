import * as React from 'react';

import Header from '../component/Header/Header';
import Body from './Body/Body';

export interface IMain {}

export default function Main(props: IMain) {
  return (
    <div className='ml-4 mt-2'>
      <Header />
      <Body />
    </div>
  );
}
