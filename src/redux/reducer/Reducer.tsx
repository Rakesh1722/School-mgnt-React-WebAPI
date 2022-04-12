export const Reducer = (state = { userinfo: [] }, action: { type: any; payload: any; }) => {
    switch (action.type) {
      case "ADD_USER":
        console.log("reducer",action.payload);
        return {
          userinfo: action.payload,
        };
      default:
        return state;
    }
  };


// const initialState = {
//     cardData: []
// }

// interface actionTypes {
//     type: any, data: any
// }

// export default function cardItems(state = [] , action: actionTypes) {
//     switch (action.type) {
//         case "ADD_TO_CART":
//             return [
//                 ...state,
//                 {cardData: action.data}
//             ]
//         default:
//             return state
//     }
// }