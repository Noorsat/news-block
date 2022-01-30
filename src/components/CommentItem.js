import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { changeComment } from '../redux/actions';

const CommentItem = ({text,id, commentId}) => {
  const [edited, setEdited] = useState(false);
  const [inputText, setInputText] = useState(text);
  const dispatch = useDispatch();

  const editOnHandler = () => {
    setEdited(true);
  } 

  const inputChangeHandler = (e) => {
    setInputText(e.target.value);
  } 

  const editOffHandler = () => {
    dispatch(changeComment(inputText,id, commentId))
    setEdited(false); 
  }

  return (
    <CommentBlock>
        <CommentText>
          {
            edited ? <EditedBlock><input type="text" value={inputText} onChange={(e) => inputChangeHandler(e)} /> <button onClick={editOffHandler}>Change</button> </EditedBlock>: text
          }
        </CommentText>
        <CommentEdit onClick={editOnHandler}>
          Edit...
        </CommentEdit>
    </CommentBlock>
  )
};

const CommentBlock = styled.div`
  text-align:left;
  padding-left:50px;
  border:1px solid #0f0f0f;
  border-radius:15px;
  padding:15px 0;
  margin-left:50px;
  margin-right:50px;
  padding-left:20px;
  margin-bottom:20px;

`

const CommentText = styled.div`
&:hover{
  text-decoration:underline;
}
  margin-bottom:20px
`

const CommentEdit = styled.div`
  cursor:pointer;
  opacity:0.64;
` 
const EditedBlock = styled.div`
input{
  background:transparent;
  border:1px solid #000;
  width:450px;
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


export default CommentItem;
