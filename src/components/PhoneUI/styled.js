import styled from 'styled-components';
import { colors } from '../../helpers';

export const Div = styled.div`
  display: block;
  margin: auto;
  width: 300px;
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
  border: 4px solid ${colors.column};
  border-radius: 0 0 40px 40px;
  justify-content: center;
  height: 100%;
  align-items: center;
  background-color: ${colors.column};
  padding: 10px 0;
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
  border: 2px solid ${colors.column};
  background-color: ${colors.ui};
  color: ${colors.text};
  opacity: ${props => props.disabled ? 0.5 : 1};
  border-radius: ${props => props.index % 3 !== 1 ? props.index % 3 === 2 ? '40px 20px' : '20px 40px' : '20px'};
  &:active {
    background-color: ${props => !props.disabled && '#616161'};
  }
`;
export const Number = styled.span`
	font-size: 30px;
	margin: 0 4px;
`;
export const Value = styled.span`
  font-size: 12px;
`;
export const Clear = styled.span`
  display: flex;
  align-self: center;
  color: ${colors.text};
  text-align: left;
  height: 40px;
  width: 90%;
  border: 2px solid ${colors.column};
  background-color: ${colors.ui};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const Screen = styled.div`
  height: 200px;
  border-radius: 20px 20px 0 0;
  border: 4px solid ${colors.column};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: auto;
  background-color: ${colors.screen};
`;
export const Ul = styled.ul`
  box-sizing: border-box;
  list-style: none;
  text-align: center;
  padding: 10px 0;
  margin: 0;
`;
export const Li = styled.li`
  display: inline-block;
  width: 100%;
  font-size: 16px;
  text-transform: capitalize;
  color: ${colors.text};
  font-weight: 400;
  letter-spacing: 2px;
`;
