import  { useState } from 'react';
import NavBar from './view/NavBar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="app">
      <NavBar handleSearch={handleSearch} />
      {/* Resto de tu aplicación */}
    </div>
  );
};

export default App;