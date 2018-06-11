import styled from 'styled-components';
import colors from '../helpers/colors';

export const Ul = styled.ul`
  min-height: 100px;
  max-height: 45vh;
  overflow: scroll;
  list-style: none;
`;
export const Div = styled.div`
  display: block;
  margin: auto;
  width: 25vw;
  height: 400px;
`;
export const Row = styled.div`
  display: flex;
  width: 100%;
	height: 100%;
	align-items: center;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  border: 4px solid black;
  border-radius: 10px;
  justify-content: center;
  height: 100%;
  align-items: center;
`;
export const Key = styled.span`
  height: 80%;
  width: 100%;
  margin: 15px;
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
	border: 2px solid black;
	transform: ${props => props.key % 3 === 1 ? 'rotate(20deg)' : 'rotate(-20deg)'};
	border-radius: ${props => props.key % 3 === 1 ? '100px 40px' : '40px 100px'};


}
`;
export const Number = styled.span`
	font-size: 30px;
	margin: 0 4px;
`;
export const Value = styled.span`
  font-size: 12px;
`;
