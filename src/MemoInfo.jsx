import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from "uuid";
export const MyMeno =createContext();
export const MyEdit =createContext();
const MemoInfo = ({children}) => {
  const MemoData = [
    {
      id:uuidv4(),
      title:'新規投稿',
      text:'これから、投稿を始めて行きます。よろしくお願いします。'
    },
    {
      id:uuidv4(),
      title:'継続投稿１',
      text:'これから、投稿を始めて行きます。よろしくお願いします。'
    },
    {
      id:uuidv4(),
      title:'継続投稿２',
      text:'これから、投稿を始めて行きます。よろしくお願いします。'
    },
  ]
  const [state,setstate] =useState(MemoData)
  const [editstate,seteditstate] =useState([])
  return (
    <div>
      <MyMeno.Provider value={[state,setstate]}>
        <MyEdit.Provider value={[editstate,seteditstate]}>
        {children}
        </MyEdit.Provider>
      </MyMeno.Provider>
    </div>
  )
}
export default MemoInfo;
