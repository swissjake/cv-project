import './app.css'
import Button from './components/button/Button';
import EducationalExperience from './components/educationalExperience/EducationalExperience';
import GeneralInfo from './components/generalInfo/GeneralInfo';
import PracExperience from './components/practicalExperience/PracExperience';

function App() {
  return (
    <div className="App">
      <h1>Resume Form</h1>
        <form>
            <GeneralInfo />
            <EducationalExperience />
            <PracExperience />
            <Button />
        </form>
    </div>
  );
}

export default App;
