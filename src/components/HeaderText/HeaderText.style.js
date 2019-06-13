import styled from 'styled-components';

const StyledHeaderText = styled.div`
  padding: 30px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.primary};
`;

export default StyledHeaderText;
