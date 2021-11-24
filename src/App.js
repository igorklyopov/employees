import EmployeesActiveList from './components/EmployeesActiveList/EmployeesActiveList';
import EmployeesAllList from './components/EmployeesAllList/EmployeesAllList';

function App() {
  return (
    <main className="App">
      <EmployeesAllList />
      <EmployeesActiveList />
    </main>
  );
}

export default App;
