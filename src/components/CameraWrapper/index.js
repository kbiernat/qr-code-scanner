import styled from 'styled-components';

export default styled.div`
  position: relative;

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 30%; left: 25%;
    width: 50%; height: 25%;
    border: 5px solid limegreen;
  }
`;
