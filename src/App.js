import './App.css';

function App() {
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="App">
      <h2>{today}</h2>
    </div>
  );
}

export default App;