import React, { Fragment, useState } from 'react';
import '../styles/main.scss';
import Form from './Form/Form';
import Card from './Card/Card';
import { IFormData } from '../types';

const App: React.FC = () => {
  const [cards, setCards] = useState<IFormData[] | null>([]);

  const updateValues = (value: IFormData): void => {
    setCards((prev) => [...prev, value]);
  };

  return (
    <>
      <Form updateValues={updateValues} />
      <ul>
        {cards.map((item) => (
          <Card key={Math.random() * 100} values={item} />
        ))}
      </ul>
    </>
  );
};

export default App;
