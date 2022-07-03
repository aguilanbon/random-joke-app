import { GlobalProvider } from './helpers/GlobalContext';
import './index.css';
import Home from './pages/Home';

function App() {
  return (
    <GlobalProvider>
      <div className="">
        <Home />
      </div>
    </GlobalProvider>
  );
}

export default App;
