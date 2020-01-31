import styled from "styled-components";

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background: #eee;
`;

export const Loginbox = styled.div`
  width: 400px;
  height: 220px;
  margin: 80px auto;
  background: #fff;
  padding-top: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;
export const LogTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;
export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  margin: 10px auto;
  color: #777;
`;

export const Button = styled.div`
  width: 220px;
  background: #3194d0;
  border-radius: 15px;
  margin: 10px auto;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
`;
