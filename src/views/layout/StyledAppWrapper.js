import styled from 'styled-components';

const StyledAppWrapper = styled.div`
  & {
    position: relative;
  }
  
  .fade {
    &-enter {
      position: relative;      
      opacity: 0;
      z-index: 2;
    }
    &-enter-active {
      opacity: 1;
      transition: 400ms;
      transform: none;
    }    
    //&-enter-done {
    //  opacity: 1;
    //}
    &-exit {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      opacity: 1;
      transform: none;
    }
    &-exit-active {
      opacity: 0;
      transition: 400ms;
      transform: translateX(-10%);
    }
    //&-exit-done {
    //  opacity: 0;
    //}
  }
`;

export default StyledAppWrapper;
