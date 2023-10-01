import Footer from "layouts/Footer";
import Header from "layouts/Header";
import HomePage from "pages/HomePage";

const App = () => {
  return (
    <div className="App">
      <Header />
      <HomePage />
      {/* <CreatePizzaPage /> */}
      <Footer />
    </div>
  );
}

export default App;
