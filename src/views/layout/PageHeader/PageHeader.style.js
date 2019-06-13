import styled from 'styled-components';

const StyledPageHeader = styled.div`
  border-bottom: 1px solid #255bc7;
  margin-bottom: 50px;
  
  .carbon-navigation-bar {
    background-color: ${props => props.theme.bg};
  }
  
  .carbon-menu--primary {
    .carbon-link__anchor {
      background: ${props => props.theme.bg};
      color: ${props => props.theme.primary};
    }
  }
`;

export default StyledPageHeader;
