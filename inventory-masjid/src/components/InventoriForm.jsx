import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/InventoriSlice';

const InventoriForm = () => {
  const [namaBarang, setNamaBarang] = useState('');
  const [kuantitas, setKuantitas] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!namaBarang || !kuantitas) return alert('Mohon isi semua bidang!');

    const newItem = {
      id: Date.now(),
      namaBarang,
      kuantitas: parseInt(kuantitas, 10),
    };

    dispatch(addItem(newItem));
    
    setNamaBarang('');
    setKuantitas('');
  };

  return (
    <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Input Barang Masuk</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Nama Barang: </label>
          <input
            type="text"
            value={namaBarang}
            onChange={(e) => setNamaBarang(e.target.value)}
            placeholder="Misal: Al-Qur'an"
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Kuantitas: </label>
          <input
            type="number"
            value={kuantitas}
            onChange={(e) => setKuantitas(e.target.value)}
            placeholder="Misal: 10"
            min="1"
            required
          />
        </div>
        <button type="submit" style={{ padding: '5px 15px', cursor: 'pointer' }}>
          Tambah Barang
        </button>
      </form>
    </div>
  );
};

export default InventoriForm;