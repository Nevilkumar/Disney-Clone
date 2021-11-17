import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a href="/">
                    <img src="/images/home-icon.svg"/>
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg"/>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg"/>
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg"/>
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg"/>
                    <span>MOVIE</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg"/>
                    <span>SERIES</span>
                </a>
            </NavMenu>
           
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display:flex;
    align-items:center;
    padding: 0 36px;
`
const Logo = styled.img`
    width:80px;

`

const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-left:25px;
    align-items:center;
    a{
        display:flex;
        align-items:center;
        padding: 0 18px;
        cursor: pointer;
        text-decoration:none;
        color:white;
        img{
            height: 25px;
            margin-right:6px;
        }
        span{
            font-size:18px;
            letter-spacing: 1.5px;
            position:relative;

            &:after{
                content: "";
                height:2px;
                background:white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                transform: scaleX(0);
                opacity:0;
                transform-origin: left center;
                transition: all 250ms ease-out;
            }
        }

        &:hover{
            span:after{
                opacity:1;
                transform: scaleX(1);
            }
        }
    }
`
