// import AsyncStorage from "@react-native-async-storage/async-storage";

// const AnswerRequest = () => {
//   return {
//     type: "ANSWER_REQUEST",
//   };
// };

// const AnswerSuccess = (data) => {
//   return {
//     type: "ANSWER_SUCCESS",
//     payload: data
//   };
// };

// const AnswerError = (error) => {
//   return {
//     type: "ANSWER_ERROR",
//     payload: error
//   };
// };

// export const TheAnswers = () => async dispatch => {
//   // let value = await AsyncStorage.getItem('value')
//   return dispatch => {
//     dispatch(AnswerRequest());
    
//       .then(res => {
//       console.log(res, '9090')
//       dispatch(AnswerSuccess(res.data.data));
//     })
//   .catch(err => {
//     console.log(err)
//     dispatch(AnswerError(err.response.data));
//   });
//   };
// };