import BookList from './components/BookList';
import Navbar from './components/Navbar';
import BookContextProvider from './context/BookCotext';
import './index.css';

function App() {
  return (
    <div className="App">
        <BookContextProvider>
          <Navbar />
          <BookList />
        </BookContextProvider>
    </div>
  );
}

export default App;
