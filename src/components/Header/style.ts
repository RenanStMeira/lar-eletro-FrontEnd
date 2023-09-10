import styled from 'styled-components';

export const HeaderNav = styled.header`
display: inline-flex;
background-color: rgb(82, 81, 81);
color: white;   
width: 100%;
justify-content: space-between;

@media (max-width: 768px) {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
`;

export const Logo = styled.img`
width: 70px;
height: 70px;
padding: 8px;
margin: 10px;

@media (max-width: 768px){
    margin-left: 125px;
}
`;

export const ContentDiv = styled.div`
display: flex;
font-weight: bold;
font-size: 15px;
padding: 8px;
align-items: center;

@media (max-width: 768px){
    font-size: 12px;
}
`;

export const ContantDivLinks = styled.div`
display: flex;
align-items: center;
margin-right: 100px;

p {
font-size: 15px;
text-align: center;
margin-top: 0;
}

@media (max-width: 768px){
    display: flex;
    justify-content: center;
}
`;

export const ButtonHeader = styled.button`
font-size: 16px;
padding: 5px;
margin-left: 15px;
font-size: 15px;
`;

export const NavBtn = styled.nav`
    margin-bottom: 10px;
`