import React from 'react';
import MyComponent from './MyComponent';
import { a } from './utils';

export default () => (
  <div>
    <h1>Hello Next.js</h1>
    <p>{a}</p>
    <MyComponent />
  </div>
);
