"use client";
// App.tsx
import React, { useState } from 'react';
import DrugSearch from './components/DrugSearch';
import DrugList from './components/DrugList';
// import Table from '@/components/Table';
import { TableDemo } from '@/components/TablesDemo';

function App(): JSX.Element {
  const [drugs, setDrugs] = useState<any[]>([]);

  const handleDrugsUpdate = (newDrugs: any[]) => {
    setDrugs(newDrugs);
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Madina Pharmarcy Dashboard</h1>
        <div className="flex flex-col items-center justify-center">
          {/* table */}
          <div>
            <TableDemo />
          </div>
          {/* end of table */}
          <div>
            <DrugSearch onDrugsUpdate={handleDrugsUpdate} />
          </div>
          <div>
            <DrugList drugs={drugs} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

