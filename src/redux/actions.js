import { ADD_COMMENT, CHANGE_COMMENT, SEARCH_INPUT } from "./types";

export function addComment(text, id, commentId){
    return {
        type: ADD_COMMENT,
        data: {
            text:text,
            id:id,
            commentId: commentId
        }
    }
}

export function changeComment(text, id, commentId){
    return {
        type:CHANGE_COMMENT,
        data: {
            text:text,
            id:id,
            commentId: commentId
        }
    }
}

export function searchInput(text){
    return{
        type: SEARCH_INPUT,
        data: text
    }
} 