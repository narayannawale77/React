import React from 'react';
import Product from './Component/Product.js';

const App = () => {
  const products = [
    {
      id: 'p1',
      title: 'Nirma', 
      amount: 100,
      date: new Date(2021, 8, 10)
    },
    {
      id: 'p2',
      title: 'SurfExcel', 
      amount: 200,
      date: new Date(2021, 8, 10)
    },
    {
      id: 'p3',
      title: 'Tide', 
      amount: 300,
      date: new Date(2021, 8, 10)
    },
    {
      id: 'p4',
      title: 'Arial', 
      amount: 400,
      date: new Date(2021, 8, 10)
    },
  ];

  return (
    <div>
      <Product items={products} />
    </div>
  );
}

export default App;
