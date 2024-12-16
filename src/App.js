import React, { useState } from 'react'

import Todo from './Components/Todo';
import { DeleteContextProvider } from './Components/Contexts/DeleteContext';
import { EditContextProvider } from './Components/Contexts/EditContext';

function App() {
  const [deleteValue,setDeleteValue]=useState(null);
      const [editValue,setEditValue]=useState(-1);
      return(
      <>
      <DeleteContextProvider value={{deleteValue,setDeleteValue}}>
        <EditContextProvider value={{editValue,setEditValue}}>

        <Todo></Todo>
        </EditContextProvider>
      </DeleteContextProvider>
      </>
      );
}

export default App;
