import { GlobalProvider } from './helpers/GlobalContext';
import './index.css';
import Home from './pages/Home';
import Footer from './components/Footer'

function App() {
  return (
    <GlobalProvider>
      <div className="static h-auto">
        <Home />
        <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;
