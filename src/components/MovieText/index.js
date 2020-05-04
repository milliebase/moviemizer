import React from 'react';
import styled from 'styled-components';

const StyledMovieText = styled.div`
  margin-top: 150px;
  padding: 5%;

  h1 {
    text-transform: uppercase;
  }

  h2 {
    font-weight: normal;
  }
`;

const MovieText = (props) => {
  const isResult = props.showResult;

  if (!isResult) {
    return (
      <StyledMovieText className="text">
        <h1>Don't know what to watch?</h1>
        <h2>Find a random movie!</h2>
      </StyledMovieText>
    )
  } else {
    return(null);
  }
}

export default MovieText;
