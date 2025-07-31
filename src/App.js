import { useState } from "react";
import SpeciesList from "./components/SpeciesList";
import Recorder from "./components/Recorder";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  const tabs = ["Home", "Record", "History", "Settings"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Home":
          return (
    <div className="space-y-4">
      <div className="text-3xl font-bold mb-4 text-center text-green-300">Welcome to ANUREC 🐸</div>
      <SpeciesList />
      <Recorder />
    </div>
  );
      case "Record":
        return <div className="p-4">Audio Recorder goes here</div>;
      case "History":
        return <div className="p-4">Past recordings will show here</div>;
      case "Settings":
        return <div className="p-4">Preferences + model info here</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#112125] text-green-500 font-sans">
      <header className="bg-[#2B3D2D] p-4 shadow-md">
        <h1 className="text-2xl font-semibold">ANUREC</h1>
      </header>

      <nav className="flex justify-around bg-[#367074] text-sm font-medium rounded-b-lg shadow-sm sticky top-0 z-50">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-2 flex-1 text-center ${
  activeTab === tab
    ? "bg-[#038b94] text-white font-semibold"
    : "bg-[#306761] text-gray-200"
} rounded-md mx-8 transition-colors duration-200`}

          >
            {tab}
          </button>
        ))}
      </nav>

      <main className="p-4">{renderTabContent()}</main>
    </div>
  );
}

export default App;