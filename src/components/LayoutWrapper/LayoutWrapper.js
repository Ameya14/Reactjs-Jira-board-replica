import "./LayoutWrapper.css";
function LayoutWrapper(props) {
    return(
        <div className="layoutWrapper">
            {props.children}
        </div>
    )
}

export default LayoutWrapper;