import React, { useEffect } from "react";
import styled from 'styled-components';
import Loading from "../components/Loading";
import Card from "../components/Card";
import EpisodeList from "../components/EpisodeList";
import Spinner from "../assets/images/loading.svg";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const StyledShow = styled.div`
  width: min(90%, 850px);
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;

  .loading {
    display: flex;
    justify-content: center;
    margin-top: 1em;
  }
`

const Show = props => {
  const state = useSelector((state) => state.shows)
  const dispatch = useDispatch();
  const showId = state.showId;
  const loading = state.isLoading;
  const { getShow } = bindActionCreators(actionCreators, dispatch);

  // Fetch the show information
  useEffect(() => {
    getShow(showId);
  }, [showId]); // eslint-disable-line


  return (
    <StyledShow>
      {loading || state.info === null || state.seasons === null ?
        <div className="loading">
          <Loading src={Spinner} />
        </div>
        :
        <>
          <Card data={state.info} />
          <EpisodeList data={state} />
        </>
      }
    </StyledShow>
  )
}

export default Show;