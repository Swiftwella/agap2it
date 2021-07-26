import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledCard = styled.article`
  display: grid;
  grid-template-areas: 'img general-info'
  'extra-info extra-info';
  grid-row-gap: 1em;
  grid-column-gap: 1em;
  margin: 1em auto 0;
  padding: 1.25em 1.75em;
  background-color: #282C34;
  border-radius: 10px;
  color: rgb(199, 199, 199);

  @media screen and (max-width: 768px) {
    ${props => props.isEpisode && css`
      grid-template-areas: 'general-info general-info'
      'img extra-info';
      grid-template-columns: auto 1fr;
    `}
  }

  @media screen and (max-width: 540px) {
    grid-template-areas: 'general-info'
    'img'
    'extra-info';
  }

  h2 {
    margin-block-start: 0em;
  }

  #image {
    grid-area: img;
    align-self: center;
  }

  #image img {
    width: 200px;
    border-radius: 10px;
  }

  #general-info {
    grid-area: general-info;
    text-align: left;
  }

  #extra-info {
    grid-area: extra-info;
    text-align: left;

    div:not(:first-child) {
      margin-top: 0.25em;
    }
  }
`

const Card = ({ className, data, isEpisode }) => {

  return (
    !isEpisode ?
      <StyledCard className={className}>
        <aside id="image">
          <img src={data.image.original} alt={data.name} />
        </aside>
        <div id="general-info">
          <h2>{data.name}</h2>
          <div dangerouslySetInnerHTML={{ __html: data.summary }}></div>
        </div>
        <div id="extra-info">
          <div><strong>Genres:</strong> {data.genres.map((e, i, ref) => i < ref.length - 1 ? e + ', ' : e)}</div>
          <div><strong>Show Type:</strong> {data.type}</div>
          <div><strong>Status:</strong> {data.status}</div>
        </div>
      </StyledCard>
      :
      <StyledCard className={className} isEpisode={isEpisode}>
        <aside id="image">
          <img src={data.image.original} alt={data.name} />
        </aside>
        <div id="general-info">
          <h2>{data.name}</h2>
          <div dangerouslySetInnerHTML={{ __html: data.summary }}></div>
        </div>
        <div id="extra-info">
          <div><strong>Season:</strong> {data.season}</div>
          <div><strong>Episode Nº:</strong> {data.number}</div>
          <div><strong>Air Date:</strong> {data.airdate}</div>
          <div><strong>Runtime:</strong> {data.runtime} {data.runtime === 1 ? 'minute' : 'minutes'}</div>
        </div>
      </StyledCard>
  )
}

export default Card;

Card.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired
}

