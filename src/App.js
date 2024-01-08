import './App.css';
import Header from '../src/components/Header'
import { Route, Routes } from 'react-router';
import Dashboard from './components/Dashboard';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <div>
     <Header/>
     <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/allemployee' element={<EmployeeList/>}/>
     </Routes>
    
    </div>
  );
}

export default App;
