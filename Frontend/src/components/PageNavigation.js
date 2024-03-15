import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
    return (
        <Wrapper>
            <NavLink exact to="/home" activeClassName="active">
                Home
            </NavLink>
            <Separator>/</Separator>
            <Title>{title}</Title>
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    height: 6rem;
    line-height: 6rem; /* Vertically center the content */
    background-color: #222;
    color: #fff;
    padding: 0 2rem;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;
    overflow: hidden; /* Prevent content overflow */

    a {
        text-decoration: none;
        color: #fff;
        transition: color 0.3s ease;
        margin-right: 1.5rem;
        padding: 0.5rem 0;
        &:hover {
            color: #FFD700;
        }
    }
`;

const Separator = styled.span`
    color: #FFD700;
    font-size: 1.6rem;
    margin: 0 1rem;
`;

const Title = styled.span`
    font-weight: bold;
`;

export default PageNavigation;

