import "./Spisok.scss";

const Spisok = () => {
  return (
    <div className="ea">
      <h3 className="TextAnons">что еще нужно сделать</h3>

      <ul className="TextAnons">
        <li>личный кабинет</li>
        <li>избранное</li>
        <li>с каталогом чет придумать (смотри футер)</li>
        <li>адапт</li>        
        <li>поиск(?)</li>
      </ul>

      <h3 className="TextAnons">мелкие доработки</h3>

      <ul className="TextAnons">
        <li>ФОС))</li>
        <li>каталог фулл кликабельность ячейки, а не текста</li>
        <li>карусель на главной</li>
      </ul>
    </div>
  );
};

export default Spisok;
