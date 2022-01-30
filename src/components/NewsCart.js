import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NewsCart = ({imgUrl, title,text, comment,id}) => {
  return (
    <Link to={`/blog/${id}`} style={{color:'#000', textDecoration:'none'}}>
        <NewsCartSection>
            <NewsCartImg>
                <img src={imgUrl} width="320" alt=''/>
            </NewsCartImg>
            <NewsCartTitle>
                {title}
            </NewsCartTitle>
            <NewsCartText>
                {text}
            </NewsCartText>
        </NewsCartSection>
    </Link>
  )
};

const NewsCartSection = styled.div`
    max-width:320px;
    border:2px solid #000; 
    cursor:pointer;
    height:400px;
    margin-bottom:30px;
`;

const NewsCartImg = styled.div`
    img{
        border-bottom:2px solid #000;
    }
`;

const NewsCartTitle = styled.div`
        margin-top:10px;
    margin-bottom:10px;
    font-weight:700;
`;

const NewsCartText = styled.div`
    opacity:0.6;
    font-weight:700;
    padding:0 20px;
    margin-bottom:20px;
`

export default NewsCart;
