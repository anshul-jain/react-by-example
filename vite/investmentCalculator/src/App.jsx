import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState(
    {
      initialInvestment: 1000,
      annualInvestment: 1500,
      expectedReturn: 7,
      duration: 5,
    });

function handleChange(inputIdentifier, value) {
    setUserInput((prev) => {
        return {
            ...prev,
            [inputIdentifier]: +value, // the "+" sign is used to convert the string to a number
        };
    });
}
  return (
   <>
   <Header />
   <UserInput userInput={userInput} onChange={handleChange}/>
   <Results resultInput={userInput}/>
   </>
  )
}

export default App
