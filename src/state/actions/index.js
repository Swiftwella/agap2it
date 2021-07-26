export const getShow = (id) => {

  return async (dispatch) => {
    dispatch({ type: "LOADING" });
    try {
      const respInfo = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const dataInfo = await respInfo.json();

      const respSeasons = await fetch(`https://api.tvmaze.com/shows/${id}/seasons`);
      const dataSeasons = await respSeasons.json();

      const respEpisodes = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
      const dataEpisodes = await respEpisodes.json();

      dispatch({ type: "GET_SHOW", payload: dataInfo })
      dispatch({ type: "GET_SEASONS", payload: dataSeasons })
      dispatch({ type: "GET_EPISODES", payload: dataEpisodes })
      dispatch({ type: "FINISHED" });
    } catch (e) {
      console.log('There\'s been an error fetching the tv show information: ', e)
    }
  }
}

export const getSingleEpisode = (id) => {
  return async (dispatch) => {
    dispatch({ type: "LOADING" });
    try {
      const respSingleEpisode = await fetch(`https://api.tvmaze.com/episodes/${id}`);
      const dataSingleEpisode = await respSingleEpisode.json();
      dispatch({ type: "GET_SINGLE_EPISODE", payload: dataSingleEpisode });
      dispatch({ type: "FINISHED" });
    } catch (e) {
      console.log('There\'s been an error fetching the tv show information: ', e)
    }
  }
}