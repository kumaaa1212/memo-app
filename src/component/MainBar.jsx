import React, { useContext } from 'react'
import { MyEdit, MyMeno } from '../MemoInfo'
const MainBar = () => {
  const [editstate, seteditstate] = useContext(MyEdit)
  const [state, setstate] = useContext(MyMeno)
  // console.log(editstate)
  const handlechenge = (key, value) => {
    const newFile = {
      ...editstate,
      [key]: value
    }
    seteditstate(newFile);
    onUpdataNote()
  }
  const onUpdataNote = () =>{
    const updatedNoteArry = state.map((note) =>{
      if(note.id === editstate.id){
        return editstate
      }
      else{
        return note
      }
    })
    console.log(updatedNoteArry);
    setstate(updatedNoteArry)
  }
  if (editstate == '') {
    return <h1>選択されていません</h1>
  }
  return (
    <div>
      <div>
        <div>
          <input type="text" value={editstate.title} onChange={(e) => handlechenge('title', e.target.value)} />
          <textarea value={editstate.text} onChange={(e) => handlechenge('text', e.target.value)}>
          </textarea>
        </div>
      </div>
      <div>
        <div key={editstate.id}>
          <h1>{editstate.title}</h1>
          <p>{editstate.text}</p>
        </div>
      </div>
    </div>
  )
}
export default MainBar