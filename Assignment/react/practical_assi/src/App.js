
import './App.css';
// import Functional_compo from './Componets/Functional_compo';
// import Class_compo from './Componets/Class_compo';
import Usercard from './Props-and-state/Usercard';

function App() {
  return (
    <div className="App">
     {/* <Functional_compo  name="yug"/> */}
     {/* <Class_compo/> */}
     <Usercard  name="yug" age={22} location="india"/>
     {/* <Usercard  name="het" age={20} location="india"/> */}
    </div>
  );
}

export default App;
