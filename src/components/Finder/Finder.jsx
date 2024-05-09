import "./Finder.scss";
import poisk from "../upload/poisk.png";

const Finder = () => {
    return (
        <div className="MainDiv">
            <form>
                <button type="submit" className="poiskLink">
                    <img src={poisk} alt="" className="poisk" />
                    <p className="link2">Поиск</p>
                </button>
                <input
                    className="inputFinder"
                    type="text"
                    placeholder="Искать здесь..."
                />
            </form>
        </div>
    );
};

export default Finder;
