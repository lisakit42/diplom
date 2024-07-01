import "./Spisok.scss";

const Spisok = () => {
    return (
        <div className="ea">
            <h3 className="TextAnons">что еще нужно сделать</h3>

            <ol className="TextAnons">
                <li>добавить стрелочки для главной карусели</li>
                <li>главная карусель ширина прыгает</li>
                <li>
                    изменить всплывающего на рассылке в соотвествии с логином
                </li>
                <li>починить поля кнопок входа</li>
            </ol>
        </div>
    );
};

export default Spisok;
