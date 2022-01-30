import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import NewsCart from './NewsCart';

const NewsBlock = () => {   
    const [activePosts, setActivePosts] = useState([]);

    const posts = useSelector(state => {
        const { commentReducer } = state;
        return commentReducer.posts;
    })

    const searchInput = useSelector(state => {
        const { searchReducer } = state;
        return searchReducer.inputText;
    })
    useEffect(() => {
        setActivePosts(posts.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase())))
    })

    return (
        <NewsSection>
            <NewsSectionTitle>
                News        
            </NewsSectionTitle>
            <NewsItems>
                {
                    activePosts.map(item => {
                        return (
                            <NewsCart imgUrl={item.imgUrl} title={item.title} text={item.text} comment={item.comment} id={item.id}/>
                        )
                    })
                }
                
            </NewsItems>
        </NewsSection>
    )
};


const NewsSection = styled.div`
    padding-top:40px;
    max-width:1140px;
    margin:0 auto;
`;

const NewsSectionTitle = styled.div`
    text-align:center;
    text-transform:uppercase;
    font-size:30px;
    font-weight:700;
    margin-bottom:30px;
`;

const NewsItems = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`



export default NewsBlock;
