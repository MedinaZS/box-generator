import styled from 'styled-components';

const StyledBox = styled.div`
    background: ${props => props.bgColor};;
    width: ${props => props.size+'px' || '100px'};
    height: ${props => props.size+'px' || '100px'};
`;

export default StyledBox;

