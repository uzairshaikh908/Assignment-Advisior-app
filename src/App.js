import React, { useState, useEffect } from "react";
import AdviceCard from "./components/AdviceCard";
import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState("Click the button to get some advice!");
  const [loading, setLoading] = useState(false);

  const fetchAdvice = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      setAdvice("Oops! Couldn't fetch advice. Try again!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="app">
      <AdviceCard advice={advice} loading={loading} fetchAdvice={fetchAdvice} />
    </div>
  );
};

export default App;
