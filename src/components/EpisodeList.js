import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledEpisodeList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  color: rgb(199, 199, 199);

  .list {
    background-color: #282C34;
    text-align: left;
    padding: 1.25em 1.75em;
    margin-top: 1.25em;
    border-radius: 10px;
  }

  .list h3 {
    margin-block-start: 0em;
  }

  img {
    width: 100px;
    display: block;
  }

  li {
    margin-top: 0.5em;
  }

  li h4 {
    margin: 0;
  }

  li a {
    display: flex;
    gap: 1em;
    align-items: center;
    text-decoration: none;
    color: inherit;
    transition: all 0.15s ease-out;

    &:hover {
      color: rgb(122, 122, 122);
    }
  }
`

const EpisodeList = ({ className, data }) => {

  return (
    <StyledEpisodeList className={className}>
      {data.seasons.map(s => {
        return (
          <section className="list" key={s.id}>
            <h3>Season {s.number}</h3>
            {data.episodes.filter(e => s.number === e.season).map(e =>
              <li key={e.id}>
                <Link to={`/episode/${e.id}`}>
                  <aside><img src={e.image.medium} alt={e.name} /></aside>
                  <h4>{e.name}</h4>
                </Link>
              </li>
            )}
          </section>
        )
      })}
    </StyledEpisodeList>
  )
}

export default EpisodeList