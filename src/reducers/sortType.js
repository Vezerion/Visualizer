const initial = {
  sorting: 'Слиянием'
};

export default (state = initial, { type, value }) => {
  switch (type) {
    case 'SORT/SET_SORT':
      return { ...state, sorting: value };
    default:
      return state;
  }
};