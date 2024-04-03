


  
  

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
    {
      index: "#1",
      drug: "Diclofenac",
      totalAmount: "KES 80",
      quantity: "3",
      paymentMethod: "Credit Card",
    },
    {
      index: "#2",
      drug: "Paracetamol",
      totalAmount: "KES 120",
      quantity: "2",
      paymentMethod: "PayPal",
    },
    {
      index: "#3",
      drug: "Amoxicillin",
      totalAmount: "KES 200",
      quantity: "5",
      paymentMethod: "Bank Transfer",
    },
    {
      index: "#4",
      drug: "Loratadine",
      totalAmount: "KES 50",
      quantity: "1",
      paymentMethod: "Cash",
    },
    {
      index: "#5",
      drug: "Ibuprofen",
      totalAmount: "KES 160",
      quantity: "4",
      paymentMethod: "Credit Card",
    },
    {
      index: "#6",
      drug: "Ciprofloxacin",
      totalAmount: "KES 240",
      quantity: "6",
      paymentMethod: "PayPal",
    },
    {
      index: "#7",
      drug: "Omeprazole",
      totalAmount: "KES 90",
      quantity: "3",
      paymentMethod: "Bank Transfer",
    },
    {
      index: "#8",
      drug: "Aspirin",
      totalAmount: "KES 70",
      quantity: "2",
      paymentMethod: "Cash",
    },
    {
      index: "#9",
      drug: "Metformin",
      totalAmount: "KES 100",
      quantity: "5",
      paymentMethod: "Credit Card",
    },
    {
      index: "#10",
      drug: "Hydrochlorothiazide",
      totalAmount: "KES 150",
      quantity: "3",
      paymentMethod: "PayPal",
    },
    // Additional 15 invoices
    {
      index: "#11",
      drug: "Ranitidine",
      totalAmount: "KES 110",
      quantity: "2",
      paymentMethod: "Credit Card",
    },
    {
      index: "#12",
      drug: "Levofloxacin",
      totalAmount: "KES 180",
      quantity: "3",
      paymentMethod: "PayPal",
    },
    {
      index: "#13",
      drug: "Cephalexin",
      totalAmount: "KES 90",
      quantity: "4",
      paymentMethod: "Bank Transfer",
    },
    {
      index: "#14",
      drug: "Atorvastatin",
      totalAmount: "KES 200",
      quantity: "2",
      paymentMethod: "Cash",
    },
    {
      index: "#15",
      drug: "Losartan",
      totalAmount: "KES 120",
      quantity: "3",
      paymentMethod: "Credit Card",
    },
    {
      index: "#16",
      drug: "Gabapentin",
      totalAmount: "KES 70",
      quantity: "1",
      paymentMethod: "PayPal",
    },
    {
      index: "#17",
      drug: "Naproxen",
      totalAmount: "KES 150",
      quantity: "2",
      paymentMethod: "Bank Transfer",
    },
    {
      index: "#18",
      drug: "Furosemide",
      totalAmount: "KES 60",
      quantity: "5",
      paymentMethod: "Cash",
    },
    {
      index: "#19",
      drug: "Citalopram",
      totalAmount: "KES 180",
      quantity: "3",
      paymentMethod: "Credit Card",
    },
    {
      index: "#20",
      drug: "Pantoprazole",
      totalAmount: "KES 100",
      quantity: "4",
      paymentMethod: "PayPal",
    },
    {
      index: "#21",
      drug: "Simvastatin",
      totalAmount: "KES 140",
      quantity: "2",
      paymentMethod: "Bank Transfer",
    },
    {
      index: "#22",
      drug: "Doxycycline",
      totalAmount: "KES 80",
      quantity: "3",
      paymentMethod: "Cash",
    },
    {
      index: "#23",
      drug: "Metronidazole",
      totalAmount: "KES 100",
      quantity: "1",
      paymentMethod: "Credit Card",
    },
    {
      index: "#24",
      drug: "Fluoxetine",
      totalAmount: "KES 130",
      quantity: "2",
      paymentMethod: "PayPal",
    },
    {
      index: "#25",
      drug: "Escitalopram",
      totalAmount: "KES 150",
      quantity: "4",
      paymentMethod: "Bank Transfer",
    },
    {
      index: "#26",
      drug: "Tramadol",
      totalAmount: "KES 90",
      quantity: "3",
      paymentMethod: "Cash",
    },
    {
      index: "#27",
      drug: "Azithromycin",
      totalAmount: "KES 200",
      quantity: "5",
      paymentMethod: "Credit Card",
    },
    {
      index: "#28",
      drug: "Warfarin",
      totalAmount: "KES 60",
      quantity: "2",
      paymentMethod: "PayPal",
    },
    {
      index: "#29",
      drug: "Carvedilol",
      totalAmount: "KES 180",
      quantity: "3",
      paymentMethod: "Bank Transfer",
    },
    {
      index: "#30",
      drug: "Lisinopril",
      totalAmount: "KES 120",
      quantity: "4",
      paymentMethod: "Cash",
    },
    {
      index: "#31",
      drug: "Alprazolam",
      totalAmount: "KES 150",
      quantity: "2",
      paymentMethod: "Credit Card",
    },
    {
      index: "#32",
      drug: "Metoprolol",
      totalAmount: "KES 80",
      quantity: "3",
      paymentMethod: "PayPal",
    },
    {
      index: "#33",
      drug: "Olanzapine",
      totalAmount: "KES 100",
      quantity: "1",
      paymentMethod: "Bank Transfer",
    },
    {
      index: "#34",
      drug: "Diazepam",
      totalAmount: "KES 70",
      quantity: "2",
      paymentMethod: "Cash",
    },
    {
      index: "#35",
      drug: "Fluconazole",
      totalAmount: "KES 90",
      quantity: "3",
      paymentMethod: "Credit Card",
    },
  ];
export function TableDemo() {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayCount, setDisplayCount] = useState(10); // State to keep track of displayed drugs count

  const filteredInvoices = invoices.filter(index =>
    index.drug.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, displayCount); // Only display the first `displayCount` number of drugs

  const loadMore = () => {
    // Increase display count by 10 when load more button is clicked
    setDisplayCount(prevCount => prevCount + 10);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name of drug"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 w-full max-w-md focus:outline-none focus:border-blue-500"
      />

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Drug</TableHead>
            <TableHead>Payment</TableHead>
            <TableHead className="text-right">In stock</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredInvoices.map((index) => (
            <TableRow key={index.index}>
              <TableCell className="font-medium">{index.index}</TableCell>
              <TableCell>{index.drug}</TableCell>
              <TableCell>{index.paymentMethod}</TableCell>
              <TableCell className="text-right">{index.quantity}</TableCell>
              <TableCell className="text-right">{index.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5} className="text-right">
              {filteredInvoices.length < invoices.length && (
                <button onClick={loadMore} className="text-blue-500">Load More</button>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">
              KES {filteredInvoices.reduce((acc, curr) => acc + parseFloat(curr.totalAmount.replace('KES ', '')), 0).toFixed(2)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
