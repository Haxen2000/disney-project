import styled from 'styled-components';

export const CollectionContainer = styled.div`
  height: 256px;
  padding: 0 20px;
  overflow-x: auto;
  white-space: nowrap;

  ::-webkit-scrollbar {
    display: none;
  }

  h4 {
    color: #fff;
  }
`;

export const ShowContainer = styled.div`
  position: relative;
  transition: left .5s;
`;