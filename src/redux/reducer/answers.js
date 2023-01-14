const initialState = {
  data: [{
    data
  }],
}

const Answer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "ANSWER_REQUEST":
      return { ...state, }
    case "ANSWER_ERROR":
      return { ...state, data: state.data, error: action.payload, }
    case "ANSWER_SUCCESS":
      return { ...state, data: action.payload, error: null }
    default:
      return state
  }
}

export default Answer