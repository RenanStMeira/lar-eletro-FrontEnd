import styled from 'styled-components';

export const MainContainer = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px;
    margin-bottom: 80px;

    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
    }
`;

export const DivProduct = styled.div`
    width: calc(33.33% - 20px); /* Distribui igualmente em 3 colunas */
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    text-align: center;

    h3 {
    font-size: 18px;
    margin-top: 10px;
    padding: 5px;
    color: black;
    }

    p {
    font-weight: bold;
    margin-top: 10px;
    }

    a {
    background-color: green;
    padding: 8px;
    border: none;
    border-radius: 8px;
    }

    @media (max-width: 768px) {
        width: 90%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
    }
`;

export const Image = styled.img`
    max-width: 280px;
    max-height: 150px;
    height: auto;
`;
