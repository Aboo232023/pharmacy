// DrugList.tsx
import React from 'react';

interface Drug {
  product_ndc: string;
  generic_name: string;
  brand_name: string;
  active_ingredients: { name: string; strength: string }[];
  dosage_form: string;
  route: string[];
}

interface DrugListProps {
  drugs: Drug[];
}

const DrugList: React.FC<DrugListProps> = ({ drugs }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Drug List</h2>
      <tbody>
  {drugs.map((drug, index) => (
    <React.Fragment key={index}>
      <tr className="bg-white shadow-md rounded-md mb-4">
        <td className="px-4 py-2 border border-gray-300"><strong className="text-blue-600">Brand Name</strong></td>
        <td className="px-4 py-2 border border-gray-300">{drug.brand_name}</td>
      </tr>
      <tr className="bg-white shadow-md rounded-md mb-4">
        <td className="px-4 py-2 border border-gray-300"><strong className="text-blue-600">Generic Name</strong></td>
        <td className="px-4 py-2 border border-gray-300">{drug.generic_name}</td>
      </tr>
      <tr className="bg-white shadow-md rounded-md mb-4">
        <td className="px-4 py-2 border border-gray-300"><strong className="text-blue-600">Active Ingredients</strong></td>
        <td className="px-4 py-2 border border-gray-300">{drug.active_ingredients.map(ingredient => `${ingredient.name} (${ingredient.strength})`).join(', ')}</td>
      </tr>
      <tr className="bg-white shadow-md rounded-md mb-4">
        <td className="px-4 py-2 border border-gray-300"><strong className="text-blue-600">Dosage Form</strong></td>
        <td className="px-4 py-2 border border-gray-300">{drug.dosage_form}</td>
      </tr>
      <tr className="bg-white shadow-md rounded-md mb-4">
        <td className="px-4 py-2 border border-gray-300"><strong className="text-blue-600">Route</strong></td>
        <td className="px-4 py-2 border border-gray-300">{drug.route?.join(', ')}</td>
      </tr>
    </React.Fragment>
  ))}
</tbody>

    </div>
  );
};

export default DrugList;
