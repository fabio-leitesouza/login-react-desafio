import Form from "./components/Form";
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="side-left">
        <img src="/images/logo.svg" alt="logo" className="login-text__logo" />
        <Form />
      </div>
      
      <img src="/images/side-image.jpg" alt="slide imagem" className="login-text__side" />
    </div>
  );
}

export default App;
