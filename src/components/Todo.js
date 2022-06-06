import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = ({title, hi}) => {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

    const deleteHandler = () => {
      setModalIsOpen(true);
    };

    const closeModalHandler = () => {
      setModalIsOpen(false);
    };

    return (
      <div className="card">
        <h2>{title}</h2>
        <div>
          <button className="btn" onClick={deleteHandler}>Delete</button>
          <p>{hi}</p>
        </div>
        {modalIsOpen && <Modal onClick={closeModalHandler}/>}
        {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
      </div>
    );
};

export default Todo;