/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PrayerTimes from "./components/PrayerTimes";
import DailyDua from "./components/DailyDua";
import RamadanQuotes from "./components/RamadanQuotes";
import Footer from "./components/Footer";
import Animations from "./components/Animations";
import CustomCursor from "./components/CustomCursor";
import { cityTimes } from "./data/duas";

function App() {
  const [city, setCity] = useState("Karachi");
  const times = cityTimes[city] || {};

  return (
    <div className="bg-gradient-to-b from-purple-900 via-pink-900 to-pink-500 min-h-screen relative font-sans overflow-x-hidden">
      <CustomCursor />
      <Animations />
      <Navbar />
      <Header />
      <PrayerTimes city={city} times={times} />
      <RamadanQuotes />
      <DailyDua />
      <Footer />
    </div>
  );
}

export default App;
