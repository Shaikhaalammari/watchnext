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
    width: 150px;
    height: 200px;
  }
  p{
    color:  #888888;}
  }
`;

export const MovieTitle = styled.div`
  color: #ef962d;
`;

export const DimagWrapper = styled.div`
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

//   img {
//     display: block;
//     width: 20%;
//     height: 20%;
//     padding: 5em;
//     overflow: hidden;
//     float: left;
//   }
//   p {
//     color: #888888;
//     letter-spacing: -1px;
//     padding: 20px;
//     line-height: 34px;
//     float: center;
//     display: block;
//   }
//
// display: block;
// //    margin-left: 200;
//     margin-right: 100;
//  display: flex;
//   align-items: center
//   text-align:center
// font: Barlow Condensed, sans-serif;
