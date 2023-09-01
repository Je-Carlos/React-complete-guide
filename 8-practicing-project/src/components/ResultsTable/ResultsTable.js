const ResultsTable = () => {
  return (
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
  );
};
export default ResultsTable;
