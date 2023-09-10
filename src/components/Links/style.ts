import styled from "styled-components";

export const DivContenainerLinks = styled.div` 
    margin: 20px;
    padding: 8px;

    a {
    text-decoration: none;
    margin-left: 10px;
    color: white;
    background-color: green;
    border: none;
    border-radius: 8px;
    padding: 8px;
}

a:hover {
    background-color: black;
}

@media(max-width: 768px){
    a {
        font-size: 11px;
    }
}

`;