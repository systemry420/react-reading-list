import Navbar from './components/Navbar';
import BookContextProvider from './context/BookCotext';
import './index.css';

function App() {
  return (
    <div className="App">
        <BookContextProvider>
          <Navbar />
        </BookContextProvider>
    </div>
  );
}

export default App;
