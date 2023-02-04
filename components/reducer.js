// reducer.js
const INITIAL_STATE = {
  VirshiniPirfilo: 'Mahesh',
  contact: 'xzvxcv',
  praveen: '',
}

const ReducerFunction= (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        ...action.content,
      }
    case 'SET_Contact':
      return {
        ...state,
        ...action.content,
      }
    default:
      return state
  }
}
export default ReducerFunction