import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import { connect } from 'react-redux';
import styled from 'styled-components';
import CommentItem from './CommentItem';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../redux/actions';
import { commentReducer } from '../redux/commentReducer';

const BlogItem = (props) => {
    const posts = useSelector(state => {
        const {commentReducer}  = state;
        return commentReducer.posts;
    }) 
    const dispatch = useDispatch();

  const [inputText, setInputText] = useState("");  

  let { id } = useParams();
  let item = posts[id-1];

  const inputChangeHandler = (e) => {
    setInputText(e.target.value)
  }

  return (  
    <BlogItemSection>
        <BlogItemTitle>
            {item.title}    
        </BlogItemTitle>
        <BlogItemImg>
            <img src={item.imgUrl} />
        </BlogItemImg>
        <BlogItemText>
            {item.fullText}
        </BlogItemText>
        <CommentBlock>
            <CommentTitle>
                Comments
            </CommentTitle>
            <CommentsAdd>
                <input type="text" onChange={(e) => inputChangeHandler(e)} value={inputText} />
                <button onClick={() => {
                    dispatch(addComment(inputText, id, Math.round(Math.random()*100000)))
                    setInputText("");
                }} >Comment</button>   
            </CommentsAdd>
            { 
               item.comments.map(item => {
                   return (
                    <CommentItem text={item.text} id={id} commentId={item.id} />
                   )
               })
            }
        </CommentBlock>
    </BlogItemSection>  
  );
};

const BlogItemSection = styled.div`
    max-width:760px;
    margin:0 auto;
    margin-top:30px;
    border:3px solid #000;
    padding:10px;       
`

const BlogItemTitle = styled.div`
    padding-top:30px;  
    padding-bottom:30px;
    border-bottom:2px solid #000;  
    margin-bottom:30px;
`

const BlogItemImg = styled.div`
    margin-bottom:30px;
    img{
        width:560px;
    }
`;

const BlogItemText = styled.div`
    padding:0 50px;
    font-weight:500;    
    line-height:25px;
    letter-spacing:2px;
    margin-bottom:30px;
`;

const CommentBlock = styled.div``;

const CommentTitle = styled.div`
    text-transform:uppercase;
    font-weight:700;
    font-size:24px; 
    margin-bottom:30px;
`;

const CommentsAdd = styled.div`
    margin-bottom:30px;
    input{
        background:transparent;
        border:1px solid #000;
        width:500px;
        padding:20px;
        border-radius:10px;
        outline:none;
        font-weight:700;
        margin-right:10px;
    }
    button{
        padding:20px;
        background:transparent;
        border:1px solid #000;
        outline:none;
        border-radius:10px;
        font-weight:700px;
    }
` 





export default BlogItem;
