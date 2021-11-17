import axios from 'axios';
import React, { useState,useEffect } from 'react';
import styled from 'styled-components'

const Movies = () => {

    const [content,setcontent]=useState([]);
    const main_url=`https://api.themoviedb.org/3/trending/all/day?api_key=3f66b57e468e104429e647efd009c6d5`;
    
    const fetchtrending = async () =>{
        const {data} = await axios.get(main_url);
        setcontent(data.results);
        console.log(data.results);
    }
    useEffect(() => {
        fetchtrending();
    },[]);
    const img_300 = 'https://image.tmdb.org/t/p/w300';
    const img_500 = 'https://image.tmdb.org/t/p/w500';
    return (
        <Container>
            <h2>TRENDING</h2>
            <Content>
                {
                        content && content.map((v) => 
                        <Wrap>
                            <a href= {"/detail/" + v.media_type +"/" + v.id}><img src= {img_300 + v.poster_path} /></a>
                            <div>
                                <span>{v.media_type=="movie"? v.title : v.name}</span>
                                
                            </div>
                        </Wrap>

                        )
                }
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
    margin-bottom:80px;

    h2{
        letter-spacing:1.8px;
        font-size:25px;
        
    }
`

const Content = styled.div`
    display:grid;
    grid-gap:30px;
    grid-template-columns:repeat(4, minmax(0,1fr));
   
`

const Wrap = styled.div`
    border-radius: 4px;
    height:450px;
    width:260px;
    overflow:hidden;
    border: 3px solid rgba(255,255,255,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 300ms;
    cursor:pointer;
    
    img{
        width:100%;
        height:85%;
        object-fit: cover;

    }
    div{
        height:12%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:space-between;
        margin-left:10px;
        
        span{
            text-align:center;
            font-size:18px;
            letter-spacing:1.5px;
        }
    }
    &:hover{
        transform: scale(1.05);
        border-color:white;
    }
`