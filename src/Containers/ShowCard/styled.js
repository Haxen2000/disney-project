import styled from 'styled-components';

export const CardContainer = styled.div`
  display: inline-block;

  :not(:first-child) {
    margin-left: 10px;
  }

  img {
    width: 300px;
  }
`;