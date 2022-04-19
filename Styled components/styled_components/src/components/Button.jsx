// import "./button.css"
import styled from "styled-components"
// export const Button = ({children, onClick})=>{
//     return (
//         <button className="button-32" onClick={onClick}>{children}</button>
//     )
// }

const Button = styled.button`
    background-color: ${(props)=>(props.theme === "dark"?"red":"#fff000")};
    border-radius: 12px;
    color: #000;
    cursor: pointer;
    font-weight: bold;
    padding: 10px 15px;
    text-align: center;
    transition: 200ms;
    width: 100px;
    margin-left: 30px;
    box-sizing: border-box;
    border: 0;
    font-size: 16px;
    &:hover{
        box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
    }
`;
export {Button}
