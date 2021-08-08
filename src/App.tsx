import React, { useState } from 'react';
import './App.css';
import List from './components/List';



interface IState {
  invitee: {
    name: string
    age:number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState['invitee']>([
    
    {
    name: 'beyoncee ',
    age: 45,
    url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8m55v9XIDZNexdnV_jIkHcK_dhId61hibJQ&usqp=CAU',
    note: 'You are invited to the high table'
    

  }
])
  return (
    <div className="App">
      <h1>People Invited Into My Party</h1>
      <List  guests={people}/>
    </div>
  );
}

export default App;
