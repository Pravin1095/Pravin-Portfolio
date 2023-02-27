// reducer.js
const INITIAL_STATE = {
 myName:'Pravin',
 myEdu:
 [
  {
      "link":"https://www.salemholycross.com/",
      "institute":"Holy Cross Matriculation Higher Secondary School",
      "school":"-Class X",
      "percent":"Percentage: 97.8 %",
      "year":"2015-2016",
      "downloadlink":"./Docs/10th MarkSheet.jpg"
      
  },
  {
      "link":"https://www.salemholycross.com/",
      "institute":"Holy Cross Matriculation Higher Secondary School",
      "school":"-Class XII",
      "percent":"Percentage: 91.25 %",
      "year":"2017-2018",
      "downloadlink":"./Docs/12th MarkSheet.jpg"
  },
  {
      "link":"https://www.sastra.edu/",
      "institute":"SASTRA Deemed To Be University",
      "school":"-B.Tech Mechanical Engineering",
      "percent":"CGPA: 7.6954",
      "year":"2018-2022",
      "downloadlink":"./Docs/ProvisionalCertificate.pdf"
  }
 ]


 
  
}

const ReducerFunction= (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
       myName:action.content,
      }
    case 'Name_Set_Data':
      return {
        ...state,
         ...action.content,
      }
    default:
      return state
  }
}
export default ReducerFunction