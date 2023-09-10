import styled from "styled-components";

export const DivFooter = styled.div` 
    text-align: center;
    background-color: rgb(82, 81, 81);
    padding: 8px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8vh;
    margin-top: 25px;

    @media(max-width: 768px){
        img {
            width: 40px;
        }
    }
`;