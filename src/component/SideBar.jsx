import React, { useContext } from 'react'
import {MyEdit, MyMeno } from '../MemoInfo'
import { v4 as uuidv4 } from "uuid";
const SideBar = () => {
  const [state,setstate] =useContext(MyMeno)
  const [editstate,seteditstate] =useContext(MyEdit)
  const handlebtn = () =>{
    const newData = {
      id:uuidv4(),
      title:'',
      text:''
    }
    setstate([...state,newData])
    // ここは復習する
  }
  const handleddelate = (id) =>{
    const newList = state.filter((note) =>note.id !== id);
    // 条件にあったものを返す
    setstate(newList);
  }
  const selectedEdit = (id) =>{
  seteditstate(state.find((note) =>note.id ===id))
  }
  return (
    <div>
    <div>
      <button onClick={handlebtn}>追加</button>
    </div>
    <div>
      {state.map((note) =>(
        <div key={note.id} onClick={() =>selectedEdit(note.id)}>
        <h3>{note.title}</h3>
        <p>{note.text}</p>
        <button onClick={() =>handleddelate(note.id)}>
          削除
        </button>
        </div>
      ))}
    </div>
    </div>
  )
}

export default SideBar