import Header from "./components/Header/Header";

function App() {
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
  };

  return (
    <div>
      <Header />
      <form className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Economia Atual (R$)</label>
            <input type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Economia Anual (R$)</label>
            <input type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">Juros Esperados (por ano)</label>
            <input type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Duração do investimento (anos)</label>
            <input type="number" id="duration" />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reiniciar
          </button>
          <button type="submit" className="button">
            Calcular
          </button>
        </p>
      </form>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <table className="result">
        <thead>
          <tr>
            <th>Ano</th>
            <th>Economia Total</th>
            <th>Juros (ao Ano)</th>
            <th>Juros Totais</th>
            <th>Capital Investido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ano</td>
            <td>Total Economizado ao final do Ano</td>
            <td>Ganho em Juros Anual</td>
            <td>Total ganho em Juros</td>
            <td>Capital Investido</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
