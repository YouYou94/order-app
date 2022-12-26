import './App.css';
import { useAxios } from './components/custom/UseAxios';
import Router from './router/Router';

function App() {
  const { response, error, loading } = useAxios('/users/1n2pgi02k5');

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
