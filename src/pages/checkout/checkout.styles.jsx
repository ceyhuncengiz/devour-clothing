import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  button {
    margin-left: auto;
    margin-top: -145px;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    button {
    margin-left: auto;
    margin-top: -155px;
  }
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
  @media screen and (max-width: 800px) {
    width: 22%;
    &:last-child {
    width: 12%;
  }
  }
`;

export const TotalContainer = styled.div`
  width: 50vw;
  margin-top: 30px;
  font-size: 36px;
  @media screen and (max-width: 800px) {
    width: 100%;
    font-size: 28px;
  }
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
  @media screen and (max-width: 800px) {
    font-size:20px;
  }
`;