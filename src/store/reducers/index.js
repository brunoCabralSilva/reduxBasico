const initialState = {
  number: 0,
  name: '',
};

function reduceEx(state = initialState, action) {
  switch (action.type) {
    case "ALTERAR_DADOS":
      return ({ number: action.number, name: action.name });
    default:
      return state;
  }
}

export default reduceEx;