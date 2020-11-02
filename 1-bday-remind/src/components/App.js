import React, { useState } from 'react';
import data from '../data'
import List from './List'

const App = () => {
  const [persons, setPersons] = useState(data)

  return (
    <div className="container">
      <h3>There are {persons.length} bdays today!</h3>
      <List persons={persons} />
      <button onClick={()=>setPersons([])}>Clear List?</button>
    </div>
  )
}


export default App;
