import React from "react";
import CardsProduit from "../Components/Card.js/CardsProduit";

const AccessoiresScreen = () => {
  return (
    <div>
      <main className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <CardsProduit className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          </div>
          {/* /End replace */}
        </div>
      </main>
    </div>
  );
};

export default AccessoiresScreen;
