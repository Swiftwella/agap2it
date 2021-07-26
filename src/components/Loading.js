import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Loading = ({ src }) => <StyledLoading src={src} alt="Loading..." />

export default Loading

Loading.propTypes = {
  src: PropTypes.string
}

const StyledLoading = styled.img`
  width: max(150px, 15vw);
`