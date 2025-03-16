import { useState } from "react";

export default function UserInput() {
    const [userInput, setUserInput] = useState(
        {
            initalInvestment: 1000,
            annualInvestment: 1500,
            expectedReturn: 7,
            duration: 5,
        });

    function handleChange(inputIdentifier, value) {
        setUserInput((prev) => {
            return {
                ...prev,
                [inputIdentifier]: value,
            };
        });
    }
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number"
                        required
                        value={userInput.initalInvestment}
                        onChange={(event) => handleChange('initalInvestment', event.target.value)}>
                    </input>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number"
                        required
                        value={userInput.annualInvestment}
                        onChange={(event) => handleChange('initalInvestment', event.target.value)}>

                    </input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number"
                        required
                        value={userInput.expectedReturn}
                        onChange={(event) => handleChange('initalInvestment', event.target.value)}>
                    </input>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number"
                        required
                        value={userInput.duration}
                        onChange={(event) => handleChange('initalInvestment', event.target.value)}>
                    </input>
                </p>
            </div>
        </section>
    );
}
