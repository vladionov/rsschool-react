import React from 'react';
import { ICardProps } from '../../types';

import './Card.scss';

const Card: React.FC<ICardProps> = ({ values }) => {
  const { username, checked, city, isMale, birth } = values;
  return (
    <li className={checked ? 'card' : 'card disagree'}>
      <h4 className="card-title">{username}</h4>
      <p className="card-birthdate">Birth Date: {birth}</p>
      <p className="card-prgph">Sex: {isMale ? 'male' : 'female'}</p>
      <p className="card-prgph">From: {city}</p>
    </li>
  );
};

export default Card;
