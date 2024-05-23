import "./Premium.scss";
import PremiumPic from "../upload/PremiumPic2.png";

const Premium = () => {
    return (
        <div className="MainLayout">
            <div className="Pic">
                <img src={PremiumPic} />
            </div>
            <div className="MainText">
                <p>
                    <strong>premium подписка</strong>
                </p>
            </div>
            <div className="Text">
                <p>
                    Хватит ограничиваться обычными нотными листами! Только
                    PREMIUM подписка на нашем сайте дает вам неограниченный
                    доступ ко всем нотам в различных форматах.
                    <br />
                    Открывайте новые музыкальные горизонты и исполняйте любые
                    композиции, которые только захотите. Больше не нужно тратить
                    время на поиск отдельных партитур, приобретать их отдельно,
                    или ожидать медленную загрузку. С PREMIUM подпиской получите
                    моментальный доступ к нашей богатой библиотеке нотных
                    материалов, включая классические произведения, популярные
                    новинки, джазовые стандарты и многое другое. Все ноты
                    предоставляются в различных форматах -
                    <strong> PDF, MIDI, XML</strong> и многое другое, чтобы вы
                    могли выбрать наиболее удобный для вас.
                    <br />
                    Позвольте музыке стать вдохновением в каждом шаге своего
                    творчества, расширьте свои навыки и осуществите свои
                    музыкальные мечты с нашей PREMIUM подпиской.
                    <br />
                    <strong>
                        Присоединяйтесь к нам уже сегодня и окунитесь в мир
                        безграничных музыкальных возможностей!
                    </strong>
                </p>
            </div>
            <div className="Subs">
                <div className="Card1">
                    <h3>подписка на 1 месяц</h3>
                    <p>
                        <strong>
                            Откройте музыкальное вдохновение на месяц с PREIMUM
                            подпиской!
                        </strong>
                    </p>
                    <p className="Price">
                        <strong>300 ₽ в месяц</strong>
                    </p>
                    <a>
                        <button>оформить</button>
                    </a>
                </div>
                <div className="Card1">
                    <h3>подписка на 6 месяцев</h3>
                    <p>
                        <strong>
                            Музыкальное путешествие на 6 месяцев: исследуй,
                            играй, вдохновляйся!
                        </strong>
                    </p>
                    <p className="Price">
                        <strong>250 ₽ в месяц</strong>
                    </p>
                    <a>
                        <button>оформить</button>
                    </a>
                    <p className="Price">
                        <strong>1 500 ₽ за 6 месяцев</strong>
                    </p>
                </div>
                <div className="Card1">
                    <h3>подписка на год</h3>
                    <p>
                        <strong>
                            Погрузись в годовую сокровищницу нот: ощути силу
                            музыки с PREIMUM подпиской!
                        </strong>
                    </p>
                    <p className="Price">
                        <strong>200 ₽ в месяц</strong>
                    </p>
                    <a>
                        <button>оформить</button>
                    </a>
                    <p className="Price">
                        <strong>2 400 ₽ за год</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Premium;
