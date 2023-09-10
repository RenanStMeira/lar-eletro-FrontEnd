import styled from "styled-components";

export const Section = styled.section`
    background-color: rgba(128, 128, 128, 0.527);
    width: 100%;

    @media (max-width: 768px) {
       display: flex;
       flex-direction: column;
       width: 100%;
    }
`;

export const DivContainerText = styled.div`
    color: white;
    background-color: rgba(24, 24, 24, 0.726);
    width: 35%;
    margin-left: 100px;
    padding: 9px;
    margin-top: 90px;

    @media (max-width: 768px) {
        display: block;
        justify-content: right;
        margin-bottom: 4px;
        width: 60%;
    }
    
`;

export const DivContent = styled.div`
    background-color: rgb(73, 73, 73);
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: 100px;
    margin-right: 100px;
    height: 13vh;
    padding: 10px;
    width: 90%;

@media (max-width: 768px) {
    width: 60%;
    height: 25vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
    }
`;

export const Message = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: auto;
    max-width: 350px;
    font-size: 20px;

    textarea {
        background-color: rgb(216, 214, 214);
        font-size: 18px;
        font-weight: bold;
        padding: 25px;
        margin: auto;
        border-radius: 10px;
        border: none;
        width: 80%;
        height: 30vh;
    }

    .btn-send {
        margin-top: 5px;
        margin-left: 10px;
        width: 90px;
    }

    @media (max-width: 768px) {
        margin-left: 10px;
        margin-right: 10px;
        width: auto;
        margin: auto;
        margin-top: -50px;
    }
`;

export const TitleMessage = styled.div`
    color: white;

    @media (max-width: 768px) {
        margin-right: 680px;
        margin-top: 25px;
    }

`;

export const InputContainer = styled.div` 

    input {
    padding: 8px;
    width: 280px;
    margin: 5px;
    }
    
    @media (max-width: 768px) {
        width: 160%;
        display: block;
        align-items: center;
        justify-content: center;

        input {
            padding: 8px;
            width: 60%;
            margin: 5px;
            box-sizing: border-box;
        }
    }
    
`;
