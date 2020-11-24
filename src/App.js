import LoginForm from './components/login/login-form';
import EmployeeList from './components/employee/employee_list';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Route exact path="/" component={LoginForm} />
      <Route path="/empList" component={EmployeeList} />
    </Router>
    
  );
 
}

export default App;
