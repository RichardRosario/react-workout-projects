import React from 'react';

const List = (props) => {
  
  return (
    <>
      {props.persons.map(person=>{
        const {id, name, age, image } = person
        
        return <article key={id} className="person">
          <div><img src={image} alt={name}/></div>
          <div>
            <h4>Name: {name}</h4>
            <p>Age: {age}</p>
          </div>
        </article>
      })}
    </>
  );
};

export default List;
