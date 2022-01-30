import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { changeComment, searchInput } from '../redux/actions';

const Header = () => {
    const [inputText, setInputText] = useState("");
    const dispatch = useDispatch();
    const inputChangeHandler = (e) => {
        setInputText(e.target.value);
        dispatch(searchInput(e.target.value))
    }


    return (
        <HeaderWrapper>
            <HeaderTitle>
                <Link to="/">New's Blog</Link> 
            </HeaderTitle>
            <HeaderSearch>
                <input type="text" onChange={(e) => inputChangeHandler(e)}/>
            </HeaderSearch>
        </HeaderWrapper>
    )
};

const HeaderWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width:1140px;
    margin:0 auto;
    padding-top:20px;
`

const HeaderTitle = styled.div`
   
    a{
        font-size:24px;
    font-weight:700;    
    color:#000; 
    text-decoration:none;   
    }
`;

const HeaderSearch = styled.div`
    input{
        background:transparent;
        border:3px solid #000;
        border-radius:10px;
        padding:10px 250px 10px 10px;
        font-weight:700;
        font-size:20px; 
    }
`;


export default Header;
