import { useState } from "react";

const App = () => {

  const [name, setName] = useState('Nine Dev');

  const nameList = ['Nine Dev', '2023', 'wwww'];
  const nameObj = {
    name: 'Nine Dev',
    old: 2023,
    email: 'tienkim9920@gmail.com',
  }

  const handleChangeName = () => {
    setName('Nine Dev Welcome');
  }

  console.log("Render");

  return (
    <div className="App">
      <div>{name}</div>
      <div>{nameList}</div>
      <div>{nameObj.email}</div>
      <div>{nameObj.old}</div>
      <div>{nameObj.name}</div>

      <button onClick={handleChangeName}>Change Name</button>
    </div>
  );
}

export default App;
