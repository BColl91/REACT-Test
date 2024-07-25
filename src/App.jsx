import './App.css'
import Job from './Job'
import Person from './Person'

const App = () => {

  return (
    <div className= 'app'>
     <h2>My first REACT</h2>
     <Person name= "bob" age= "30" petsName= "Glen" type="cat" />
     <Person name= "ginger" age= "33" petsName= "goose" type= "snake" />
     <Person name= "sheila" age= "59" petsName="Waffle" type= "spider" />

     <Job job="junior developer" />
     <Job job="Food tester" />
     <Job job="article writer" />
    </div>
  );
};

export default App;
