import styled, { createGlobalStyle } from "styled-components";

export const Title = styled.h1`
  text-align: center;
  color: #f3c623;
`;

export const Description = styled.h4`
  text-align: center;
  color: #888888;
`;

export const Weblogo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 150px;
`;

export const GlobalStyle = createGlobalStyle`
body {
  color: #706c61;
  background-color: #dbdbdb
}
`;

export const ListWrapper = styled.div`
  border-radius: 8px;
  align-items: right;
  justify-content: right;
  display: flex;
`;

export const ItemWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  p{
    color:  #888888;}
  }
`;

export const MovieTitle = styled.div`
  color: #ef962d;
`;
