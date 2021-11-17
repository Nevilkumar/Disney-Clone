import React, { useState,useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { useParams } from "react-router";

const Detail = () => {
    let {id, media_type} = useParams();
    console.log(id);
    const [content,setcontent]=useState([]);
    const main_url=`https://api.themoviedb.org/3/${media_type}/${id}?api_key=3f66b57e468e104429e647efd009c6d5`;
    
    const fetchtrending = async ()=>{
        const {data} = await axios.get(main_url);
        setcontent(data);
        console.log(data);
    }
    useEffect(() => {
        fetchtrending();
    },[]);

    return (
        <Container>
            {/* <Background>
                <img src="/images/bg.jpg" />
            </Background> */}
            <ImageTitle>
                <img src={"https://image.tmdb.org/t/p/w300" + content.poster_path } />
            </ImageTitle>
            <Content>
                <MovieTitle>
                    <h1>{media_type == "movie"? content.title : content.name}</h1>
                    { content.tagline!="" && <SubTitle>{content.tagline}</SubTitle> }
                </MovieTitle>
                <Control>
                    
                    <PlayButton>
                        <img src="/images/play-icon-black.png" />
                        <span>PLAY</span>
                    </PlayButton>
                    <TrailerButton>
                        <img src="/images/play-icon-white.png" />
                        <span>TRAILER</span>
                    </TrailerButton>
                    <AddButton>
                        <span>+</span>
                    </AddButton>
                    <GroupWatchButton>
                        <img src="/images/group-icon.png" />
                    </GroupWatchButton>
                </Control>
                <SubTitle>Vote Average: {content.vote_average}</SubTitle>
                <SubTitle>
                    Release Date: {media_type=="movie" ? content.release_date : content.first_air_date}
                </SubTitle>
                
                <Description>
                {content.overview}
                </Description>
            </Content>
            
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 120px);
    padding: calc(2vw);
    position:relative;
    display:flex;
    justify-content:center;
    margin-top:50px;
    align-items:flex-start;
`

const Background = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    opacity: 0.8;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`

const ImageTitle = styled.div`
    height:500px;
    width:400px;
    img{
        border:3px solid white;
        border-radius:4px;
        object-fit:contain;
        cursor:pointer;
        transition:all 300ms;
    }
    img:hover{
        transform:scale(1.05);
    }
`
const Content = styled.div`
    max-width: 780px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
`
const Control = styled.div`
    margin-top:25px;
    margin-bottom:10px;
    display:flex;
    align-items:center;
`

const MovieTitle = styled.div`
    h1{
        margin:0px;
    }
`
const PlayButton = styled.button`
    border-radius:4px;
    font-size:15px;
    display:flex;
    padding: 8px 24px;
    margin-right:22px;
    align-items:center;
    height:56px;
    background-color:white;
    border:none;
    outline:none;
    letter-spacing:1.8px;
    font-size:20px;
    font-weight:bold;
    cursor:pointer;
    transition: all 250ms;
    &:hover{
        background: rgba(198, 198, 198);
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0,0,0,0.3);
    border: 1px solid white;
    color: white;

    &:hover{
        background:black;
    }
`

const AddButton = styled.button`
    width:44px;
    height:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:100%;
    outline:none;
    border:2px solid white;
    cursor:pointer;
    background-color: rgba(0,0,0,0.6);
    color:white;
    margin-right:16px;
    span{
        font-size:34px;
        margin-bottom:5px;
    }
`
const GroupWatchButton = styled(AddButton)`
`

const SubTitle = styled.div`
    font-size:20px;
    letter-spacing: 1px;
    min-height:20px;
    margin-top:8px;
`
const Description = styled.div`
    line-height:1.4;
    font-size:22px;
    letter-spacing:1px;
    margin-top:16px;
`
