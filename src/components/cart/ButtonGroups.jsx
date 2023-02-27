import { Button, ButtonGroup, styled } from "@mui/material"


const Component=styled(ButtonGroup)`
margin-top:30px;
`;
const StyledButton=styled(Button)`
border-radius:50%;
`;

const ButtonGroups = () => {
  return (
    <Component>
        <StyledButton>-</StyledButton>
        <Button>1</Button>
        <StyledButton>+</StyledButton>
    </Component>
  )
}

export default ButtonGroups;
