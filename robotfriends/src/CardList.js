import React from 'react';
import { robots } from './robot';
import Card from './Card';

const CardList = () => {
  const cardComponent = robots.map((user) => {
    return (
      <div key={user.id}>
        <Card id={user.id} name={user.name} email={user.email} />
      </div>
    );
  });
  return <div className="container">{cardComponent}</div>;
};

export default CardList;
