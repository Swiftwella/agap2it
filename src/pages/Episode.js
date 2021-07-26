import React, { useEffect } from 'react';
import styled from 'styled-components';
import Loading from "../components/Loading";
import Card from "../components/Card";
import Button from "../components/LinkButton";
import Spinner from "../assets/images/loading.svg";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const StyledEpisode = styled.article`
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

  button {
    margin-top: 1em;
    align-self: flex-start;
  }
`

const Episode = ({ match }) => {
  const { params: { episodeId } } = match;
  const state = useSelector((state) => state.shows)
  const dispatch = useDispatch();
  const loading = state.isLoading;
  const { getSingleEpisode } = bindActionCreators(actionCreators, dispatch);

  // Fetch the show information
  useEffect(() => {
    getSingleEpisode(episodeId);
  }, [episodeId]); // eslint-disable-line

  return (
    <StyledEpisode>
      {loading || state.episode === null ?
        <div className="loading">
          <Loading src={Spinner} />
        </div>
        :
        <>
          <Card className="card" data={state.episode} isEpisode />
          <Button to="/">Back</Button>
        </>
      }
    </StyledEpisode>
  )
}

export default Episode;