/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  .List:nth-child(1){flex-grow: 1}
  .List:nth-child(2){flex-grow: 2}
  .List:nth-child(3){flex-grow: 1}
  justify-content: space-between;
  `;

const List = styled.ul`
 display: flex;
 width: 100%;
 @media screen and (max-width: 32rem ) {
    }
`

const Item = styled.li`
 list-style: none;
 width: 80px;
 height: 50px;
 text-align: center;
 border-bottom: 3px solid ${props => (props.current ? "#3498db" : "transparent")}; 
 transition: border-bottom 0.5s ease-in-out;
 @media screen and (max-width: 32rem ) {
     
}
`//transparent = 투명색

const Slink = styled(Link)`
 height: 50px;
 display:flex;
 align-items: center;
 justify-content: center;
`;

const RogoBox =styled.span`
 display: flex;
 width: 100%;
 height: 50px;
 justify-content: center;
 align-items: center;
 @media screen and (max-width: 32rem ) {
     display: none;
}
`;

const Rogo = styled.span`
 padding-top: 10px;
 height: 50px;
 text-align: center;
`
const MailItem = styled.li`
  text-align: right;
  width: 100%;
  height: 50px;
 padding-top: 20px;
 @media screen and (max-width: 32rem ) {
     display: none;
    }
`;

const Mail = styled.span`
 font-size: 12px;
 opacity: 0.5;
`

export default withRouter( ({location:{pathname}}) => (
        <Header>
            <List>
                <Item current={pathname === "/"}><Slink to ="/">Movies</Slink></Item>
                <Item current={pathname === "/tv"}><Slink to ="/tv">TV</Slink></Item>
                <Item current={pathname === "/search"}><Slink to ="/search">Search</Slink></Item>
            </List>
            <List>
            <RogoBox crrent={pathname === "/"}><Slink to ="/"><Rogo>😎</Rogo></Slink></RogoBox>
            </List>
            <List>
                <MailItem><Mail>edc94503@gmail.com</Mail></MailItem>
            </List>
        </Header>
    ));