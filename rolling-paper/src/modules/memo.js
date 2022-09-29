const SET_PAPER_LIST = "memo/SET_PAPER_LIST";

export const setPaperList = (newPaper) => ({
  type: SET_PAPER_LIST,
  newPaper,
});

const initialState = {
  paperList: [],
};

export default function memo(state = initialState, action) {
  switch (action.type) {
    case SET_PAPER_LIST:
      return { ...state, paperList: [...state.paperList, action.newPaper] };
    default:
      return state;
  }
}
