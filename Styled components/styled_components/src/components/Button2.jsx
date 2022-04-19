import styled from "styled-components"

const Button2 = styled.button`
background : ${(props)=>(props.btn_type==="primary"?"blue":"white")};
color:${(props)=>(props.btn_type==="primary"?"white":"black")};
width : 150px;
cursor: pointer;
font-weight: bold;
padding: 10px 15px;
border-style: ${(props)=>(props.bdr)};
margin-right:30px;
margin-top : 50px
`

export {Button2}