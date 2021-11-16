import './components/css/App.css';

function App() {

  const mainScreens = [<SignIn />, <Order />, <Checkout />, <NewCustomer />]


  return (
    <div className="App">
      <InfoBar />
      <Main screens={mainScreens} />
    </div>
  );
}

export default App;
