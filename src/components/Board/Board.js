import "./Board.css";
import BoardColumn from "../BoardColumn/BoardColumn";

function Board() {
    return (
        <div className="board">
            <div className="columnDiv"><BoardColumn title="To Do" themeColor="grey" /></div>
            <div className="columnDiv"><BoardColumn title="In Progress" themeColor="blue"/></div>
            <div className="columnDiv"><BoardColumn title="Ready for QA" themeColor="purple"/></div>
            <div className="columnDiv"><BoardColumn title="Done" themeColor="green"/></div>
            <div className="columnDiv"><BoardColumn title="Cancelled" themeColor="red"/></div>
        </div>
    )
}

export default Board;