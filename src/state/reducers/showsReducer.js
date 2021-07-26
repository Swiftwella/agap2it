const initialState = { showId: 1955, isLoading: true, info: {}, seasons: {}, episodes: [], episode: null }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };
    case "GET_SHOW":
      return { ...state, info: action.payload };
    case "GET_SEASONS":
      return { ...state, seasons: action.payload };
    case "GET_EPISODES":
      return { ...state, episodes: action.payload };
    case "GET_SINGLE_EPISODE":
      return { ...state, episode: action.payload };
    case "FINISHED":
      return { ...state, isLoading: false };
    default:
      return state
  }
}

export default reducer;