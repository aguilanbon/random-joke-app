import { GlobalProvider } from './helpers/GlobalContext';
import './index.css';
import Home from './pages/Home';
import Footer from './components/Footer'
import Overlay from './components/modal/Overlay';

function App() {
  return (
    <GlobalProvider>
      <div className="static h-auto">
        <Overlay />
        <Home />
        <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;
