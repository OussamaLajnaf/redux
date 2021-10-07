import React, {useState} from 'react'
import Modal from 'react-modal';
import {useDispatch} from 'react-redux';
import {handeledit} from '../redux/action';

const EditTask = ({el}) => {
    const [edit, setEdit] =useState(el.action)
    const dispatch = useDispatch()
    let handelSubmit=(e)=>{
        e.preventDefault()
        let edited={
            id:el.id,action:edit,isDone:el.isDone 
        }
        dispatch(handeledit(edited))
        closeModal()
    }
    const customStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom:'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    const [ modalIsOpen, setIsOpen] = React.useState(false);

    function openModal(){
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false)
    }
    return (
        <div>
            <button className="boton3" onClick={openModal} >Edit</button>
            <Modal
            isOpen={modalIsOpen}

            onRequestClose={closeModal}
            style={customStyle}
            contentLabel="Example Modal"
            > <form onSubmit={handelSubmit}> <input type="text" value={edit} onChange={(e)=>setEdit(e.target.value)} /> </form> </Modal>
        </div>
    )
}

export default EditTask
