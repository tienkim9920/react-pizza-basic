import { useState } from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import HomePage from "./pages/HomePage";

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
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
