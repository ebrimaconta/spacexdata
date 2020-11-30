import * as React from 'react';

import Header from '../component/Header/Header';
import Body from './Body/Body';


export interface IMain {}

export default function Main(props: IMain) {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}
