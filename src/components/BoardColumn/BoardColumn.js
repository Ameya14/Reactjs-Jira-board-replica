import "./BoardColumn.css";
import ViewTaskList from "../ViewTaskList/ViewTaskList";

function BoardColumn ({title, themeColor}) {
    return (
        <div className={`boardColumn ${themeColor}`}>
            <div className={`boardColumnTitle ${themeColor}Title`}>{title}</div>
            <ViewTaskList status={title}/>
        </div>
    );
}

export default BoardColumn;