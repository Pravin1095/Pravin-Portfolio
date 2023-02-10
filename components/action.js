import React from "react"
import axios from "axios"

const setData = (content) => {
  return {
    type: 'SET_DATA',
    content,
  }
}

const NamesetData=(content)=>{
  return{
    type:'Name_Set_Data',
    content,
  }
}

const appendData = () => {
  return async (dispatch) => {
   const {edudata} = await axios.get('https://gist.githubusercontent.com/Pravin1095/cfef0014701516609f1c59bce19ea6a3/raw/cff44eabb5352e228ae705a24f7038996b2e8999/EducationArray.json')
    dispatch(setData(edudata))
    
  }
}
const nameappendData=(obj)=>{
  return (dispatch)=>{
    dispatch(NamesetData(obj))
  }
}

export { appendData,nameappendData }
