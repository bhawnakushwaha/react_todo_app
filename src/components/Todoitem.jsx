import { MdAutoDelete } from "react-icons/md";

function Todoitem({todoname, tododate, onDeleteClick}){


    return (<div className="list-container">
        <div className="row grid-row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
            <button type="button" className="btn btn-danger"
            onClick={ ()=> onDeleteClick(todoname) }>
                <MdAutoDelete />
            </button>
        </div>
    </div>
    </div>
    );
}

export default Todoitem;