import styled, { createGlobalStyle } from "styled-components";

export const Title = styled.h1`
  text-align: center;
  color: #f3c623;
`;

export const Description = styled.h4`
  text-align: center;
  color: #f0f0f0;
`;

export const Weblogo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 200px;
`;

export const GlobalStyle = createGlobalStyle`
body {
  color: #706c61;
  background-color:#2b2b28;
}
`;

export const ListWrapper = styled.div`
  border-radius: 8px;
  align-items: right;
  justify-content: right;
  display: flex;
  flex-wrap: wrap;
`;

export const ItemWrapper = styled.div`
  margin: 20px;
  width:150px;
  img {
    width: 150px;
    height: 200px;
  }
  p{
    color:  #f0f0f0;}
  }
  
`;

export const MovieTitle = styled.div`
  color: #ef962d;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    display: block;
    width: 20%;
    height: 20%;
    padding: -1em;
    overflow: hidden;
    float: left;
  }

  p {
    font-size: 20px;
    color: #f0a500;
    text-aling: justify;
    text-align-last: center;
    vertical-align: middle;
    text-indent: 50px;
  }
`;

export const BeautyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export const RecoWrapper = styled.div`
display table
  border-radius 8px;
  align-items right;
  justify-content right;
  display flex;
`;
export const ImageReco = styled.div`
  margin 20px;
  img {
    width 150px;
    height 200px;
  }
`;
export const SearchBarStyled = styled.input`
  height: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;

  background-color: #706c61;
`;
export const Homelogo = styled.img`
  display: block;
  margin-left: 100%;
  margin-right: auto;
  width: 200px;
  height: 200px;
`;
