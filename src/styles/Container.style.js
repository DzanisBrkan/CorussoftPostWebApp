import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: grey;
  margin: 20px;
  flex-direction: column;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: grey;
  flex-direction: column;
  width: 550px;
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid lightgrey;
  border-radius: 4px;
`;
