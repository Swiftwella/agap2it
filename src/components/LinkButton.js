import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

const StyledButton = styled.button`
  font: inherit;
  display: inline-block;
  padding: 0.5em 1em;
  background-color: #282C34;;
  color: rgb(199, 199, 199);
  border: none;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 15%) 2px 2px 2px;
`

const LinkButton = (props) => {
  const { history, location, match, staticContext, to, onClick, children, ...rest } = props
  return (
    <StyledButton
      onClick={(event) => {
        onClick && onClick(event)
        history.push(to)
      }}
      {...rest}
    >{children}</StyledButton>
  )
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default withRouter(LinkButton)