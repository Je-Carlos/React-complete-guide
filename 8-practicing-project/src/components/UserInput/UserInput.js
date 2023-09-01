const UserInput = () => {
  return (
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
  );
};
export default UserInput;
