import logo from './logo.svg';
import './App.css';

import Picture from './picture';
import PersonalData from './personalData';
import AboutMe from './aboutMe';

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/

    <div class="container">
            <Picture />
            <PersonalData
                name="Alejandro Herrera"
                dateOfBirth="25 Oct 1984"
                nationality="Argentina"
                gender="Male"
                phoneNumber="+35677143011"
                email="j.alejandroherrera@gmail.com"
                address="161 Triq Is-Swieqi"
                linkedIn="https://www.linkedin.com/in/alejandro-herrera-23910a52/"
            />
            <AboutMe />
        </div>
  );
}

export default App;
