import React, { useState } from 'react';

interface DrugSearchProps {
  onDrugsUpdate: (drugs: any[]) => void;
}

const DrugSearch: React.FC<DrugSearchProps> = ({ onDrugsUpdate }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false); // New state for loading

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true when submitting form
    try {
      const response = await fetch(`https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=${searchTerm}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e8b15a086fmsh0a560ec470aa5cap1495e9jsn67a7bdcc31af',
          'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
        }
      });
      const data = await response.json();
      onDrugsUpdate(data);
    } catch (error) {
      console.error('Error fetching drugs:', error);
    } finally {
      setIsLoading(false); // Set loading state to false after fetching data
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center md:w-full w-max">
      <input 
        type="text" 
        value={searchTerm} 
        onChange={handleChange} 
        placeholder="Enter drug name" 
        className="border border-gray-300 px-4 py-3 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 flex-grow md:w-[600px]" 
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-3 rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        {isLoading ? (
          <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0117.709 6H20c0 6.627-5.373 12-12 12v-2.709zM20 12c0-6.627-5.373-12-12-12v2.709A8.001 8.001 0 0117.291 18H20zm-8 8c3.313 0 6-2.687 6-6h-2c0 2.21-1.79 4-4 4v2zm0-16c-3.313 0-6 2.687-6 6h2c0-2.21 1.79-4 4-4v-2z"></path>
          </svg>
        ) : (
          'Search'
        )}
      </button>
    </form>
  );
};

export default DrugSearch;
