import React from 'react';
import { removePropertiesDeep } from '@babel/types';

function Home(props) {
  console.log(props);
  return <div className='App'>About page {props.match.params.id} </div>;
}

export default Home;

