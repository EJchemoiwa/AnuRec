import React from "react";
import { anuranSpecies } from "../anurans";

const SpeciesList = () => {
  return (
    <div className="bg-white text-black rounded-lg p-4">
      <h1 className="text-2xl font-bold mb-4 text-center text-green-700">Anuran Species of North Rift</h1>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {anuranSpecies.map((frog, index) => (
          <div
            key={index}
            className="border rounded-md shadow-sm p-3 bg-gray-100 hover:bg-green-50 transition duration-200 text-sm"
          >
            <h2 className="text-lg font-semibold text-blue-700 leading-tight">{frog.commonName}</h2>
            <p className="mt-1"><span className="font-medium">Family:</span> {frog.family}</p>
            <p><span className="font-medium">Genus:</span> {frog.genus}</p>
            <p><span className="font-medium">Species:</span> <em>{frog.species}</em></p>
            <a
              href={frog.iucnLink}
              className="block mt-2 text-blue-500 hover:underline text-xs"
              target="_blank"
              rel="noreferrer"
            >
              IUCN Red List →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeciesList;