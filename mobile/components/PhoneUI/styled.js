import styled, { css } from 'styled-components';
import {colors} from '../../helpers';

const borders = css`
  border-top-left-radius: ${props => props.count % 3 !== 1 ? props.count % 3 === 2 ? 40 : 20 : 20};
  border-top-right-radius: ${props => props.count % 3 !== 1 ? props.count % 3 === 2 ? 20 : 40 : 20};
  border-bottom-right-radius: ${props => props.count % 3 !== 1 ? props.count % 3 === 2 ? 40 : 20 : 20};
  border-bottom-left-radius: ${props => props.count % 3 !== 1 ? props.count % 3 === 2 ? 20 :40 : 20};
`;
export const Container = styled.View`
  flex: 1;
  width: 300px;
  justify-content: flex-end;
  paddingVertical: 10;
`;
export const Row = styled.View`
  display: flex;
  flex-direction:row;
  align-items: center;
`;
export const Column = styled.View`
  display: flex;
  flex-direction: column;
  border: 4px solid ${colors.column};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 40;
  border-bottom-left-radius: 40;
  justify-content: center;
  align-items: center;
  background-color: ${colors.column};
  padding: 10px 0;
`;
export const Key = styled.TouchableOpacity`
  width: 100%;
  margin: 15px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 2px solid ${colors.column};
  background-color: ${colors.ui};
  opacity: ${props => props.disabled ? 0.5 : 1};
  ${borders};
  &:active {
    background-color: ${props => !props.disabled && '#616161'};
  }
`;
export const Number = styled.Text`
	font-size: 30px;
  margin: 0 4px;
  color: ${colors.text};
`;
export const Value = styled.Text`
  font-size: 12px;
  color: ${colors.text};
`;
export const Clear = styled.TouchableOpacity`
  display: flex;
  align-self: center;
  height: 40px;
  width: 90%;
  border: 2px solid ${colors.column};
  background-color: ${colors.ui};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;
export const ClearText = styled.Text`
  text-align: left;
  color: ${colors.text};
`;
export const Screen = styled.View`
  height: 200;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border: 4px solid ${colors.column};
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${colors.screen};
`;
export const Ul = styled.View`
  padding: 10px 0;
  margin: auto;
`;
export const Li = styled.Text`
  flex-direction: row;
  font-size: 16px;
  color: ${colors.text};
  font-weight: 400;
  letter-spacing: 2px;
`;
