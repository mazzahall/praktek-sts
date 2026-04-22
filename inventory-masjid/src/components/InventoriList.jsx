import { useSelector } from 'react-redux';

const InventoriList = () => {
  const items = useSelector((state) => state.inventory.items);

  return (
    <div>
      <h3>Daftar Inventaris Masjid</h3>
      {items.length === 0 ? (
        <p>Belum ada barang yang diinput.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th>No</th>
              <th>Nama Barang</th>
              <th>Kuantitas</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.namaBarang}</td>
                <td>{item.kuantitas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InventoriList;