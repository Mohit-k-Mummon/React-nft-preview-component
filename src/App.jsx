import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const cardInfo = {
    title: 'Equilibrium # 3429',
    tagline: 'Our Equilibrium collection promotes balance and calm.',
    price: 0.041,
    daysLeft: 3,
    creator: 'Jules Wyvern'
  };

  return (
    <Card cardInfo={cardInfo} />
  );
}

export default App;
