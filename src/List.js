import React from 'react';

const List = ({people}) => {
  return (
    <ul>
      {people.map((person)=>
      <li key={person.id} 
      className='person'>
        <img src = {person.image} alt={person.name}></img>
        <div>
          <h4>{person.name}</h4>
          <p>{person.age} years</p>
        </div>
      </li>)}
    </ul>
  );
};

export default List;
