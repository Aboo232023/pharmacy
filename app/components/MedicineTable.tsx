import React, { useState } from 'react';

interface Medicine {
  _id: string;
  name: string;
  quantity: number;
}

interface MedicineTableProps {
  medicines: Medicine[];
  onAddMedicine: (medicine: Medicine) => void;
}

const MedicineTable: React.FC<MedicineTableProps> = ({ medicines, onAddMedicine }) => {
  const [newMedicine, setNewMedicine] = useState({ name: '', quantity: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewMedicine((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!newMedicine.name || !newMedicine.quantity) return;
    const medicine: Medicine = {
      _id: Math.random().toString(),
      name: newMedicine.name,
      quantity: parseInt(newMedicine.quantity),
    };
    onAddMedicine(medicine);
    setNewMedicine({ name: '', quantity: '' });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine) => (
            <tr key={medicine._id} className="bg-white border-b">
              <td className="px-4 py-2">{medicine._id}</td>
              <td className="px-4 py-2">{medicine.name}</td>
              <td className="px-4 py-2">{medicine.quantity}</td>
            </tr>
          ))}
          <tr className="bg-white">
            <td className="px-4 py-2">New Medicine</td>
            <td className="px-4 py-2">
              <input
                type="text"
                name="name"
                value={newMedicine.name}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1"
                placeholder="Name"
              />
            </td>
            <td className="px-4 py-2">
              <input
                type="number"
                name="quantity"
                value={newMedicine.quantity}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1"
                placeholder="Quantity"
              />
            </td>
            <td className="px-4 py-2">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MedicineTable;
