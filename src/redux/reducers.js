import { ADD_TASK, DELETE_TASK, EDIT_TASK } from './actions';

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => index !== action.payload),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload.id ? action.payload.newTask : task
        ),
      };
    default:
      return state;
  }
};

export default tasksReducer;
