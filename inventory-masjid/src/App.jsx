import InventoriForm from './components/InventoriForm';
import InventoriList from './components/InventoriList';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Inventory Masjid</h1>
      <InventoriForm />
      <InventoriList />
    </div>
  );
}

export default App;