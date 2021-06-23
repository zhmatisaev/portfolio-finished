import {
  ADD_USER,
  EXIT_USER,
  LOGIN_USER,
  EDIT_USER,
  DELETE_USER,
} from "../actions";

// localStorage.removeItem("users")
const local = JSON.parse(localStorage.getItem("users"));

const initialState = {
  localUsers: local ? local.localUsers : [],
  currentUser: local
    ? local.currentUser
    : { },
  success: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      let isLogin = state.localUsers.findIndex(
        (el) => el.userEmail === action.user.userEmail
      );
      if (isLogin === -1) {
        return {
          ...state,
          localUsers: [...state.localUsers, action.user],
          currentUser: action.user,
          success: true,
        };
      } else {
        return state;
      }
    case EXIT_USER:
      return {
        ...state,
        currentUser: {
          userName: "",
          userEmail: "",
          userPassword: "",
          photo: "",
          id: "",
        },
        success: false,
      };
    case LOGIN_USER:
      let inUser = state.localUsers.find(
        (el) =>
          el.userEmail === action.obj.inEmail &&
          el.userPassword === action.obj.inPassword
      );
      if (inUser) {
        return {
          ...state,
          currentUser: inUser,
          success: true,
        };
      } else {
        return state;
      }
    case EDIT_USER:
      return {
        ...state,
        currentUser: action.obj,
        localUsers: state.localUsers.map((el, id) => {
          return el.userEmail === state.currentUser.userEmail ? action.obj : el;
        }),
      };
    case DELETE_USER:
      if (action.password === state.currentUser.userPassword) {
				return {
					...state,
					currentUser: action.obj,
					localUsers: state.localUsers.filter(
						(el) => el.userEmail !== action.email,
					),
				}
			}
    default:
      return state;
  }
};
