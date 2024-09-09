import './App.css';

import Picture from './components/picture/picture';
import PersonalData from './components/personalData/personalData';
import AboutMe from './components/aboutMe/aboutMe';

function App() {
  return (
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
