import "./Sidebar.css";
import {Link} from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <Link className="link" to="/add-task">
                 Add Task
            </Link>
        </div>
    )
}

export default Sidebar;