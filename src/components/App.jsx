import React, { createContext, useState } from "react";
import TopSection from "./TopSection";
import Content from "./Content";

export const DataContext = createContext();

const App = () => {
  const [data, setData] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      <div className="container">
        <TopSection />
        <Content />
      </div>
    </DataContext.Provider>
  );
};

export default App;
