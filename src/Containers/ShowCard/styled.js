import styled from 'styled-components';

export const CardContainer = styled.div`
  display: inline-block;
  vertical-align: middle;

  &.selected {
    border: 1px solid #fff;

    img {
      width: 330px;
    }
  }

  :not(:first-child) {
    margin-left: 10px;
  }

  img {
    display: block;
    transition: width .5s;
    width: 300px;
  }
`;