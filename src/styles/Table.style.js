import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  color: #333;
  font-family: Arial, sans-serif;
  font-size: 16px;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const THeader = styled.th`
  ${Table};
  background-color: #bfc4c7;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid #ccc;
  white-space: nowrap;
`;

export const TRow = styled.tr`
  background-color: #fff;
  padding: 20px;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
`;
