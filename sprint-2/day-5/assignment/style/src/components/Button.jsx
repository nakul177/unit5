const { default: styled } = require("styled-components");

const Button = styled.button`
  background-color:${(props) => props.bg};
  border:${(props) => props.border};
  color: ${(props) => props.color};
  padding:10px 10px;
  text-align:center;
  font-size: 16px;
  margin-left: 20px;
  border-radius: 5px;
  margin-top: 100px; 
`
const Button2 = styled(Button)






export{Button}