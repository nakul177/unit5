const { default: styled } = require("styled-components");

const Button = styled.button`

  background-color:${({theme}) => theme==="a" ? "#2FA4FF" : "#874356s" };
  border:1px${({theme}) => theme==="b"   ?"#EFFFFD" : "none" };
  color: ${({theme}) => theme==="a" ? "#EFFFFD" : "#141E27" && theme === "e" ?"#2FA4FF" : "#141E27" };
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 20px;
  border-radius: 5px;
  margin-top: 100px;
  border-style: ${({theme}) => theme==="c" ? "dotted" : "none" }; 
`
const Button2 = styled(Button)`
color: black;

`





export{Button , Button2}