import styled from "styled-components";
import { Icon } from "./Icon";

const commonStyles = `
 background-color: #1F1F1F;
 color: #fff;
 font-size: 18px;
 line-height: 1.56;
 padding: 8px 32px;
 border-radius: 4px;
 :hover{
  background-color: #fff;
  color: #000;
  transition: all 0.5s;
}
`;

const StyledButton = styled.button`
  ${commonStyles};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLinkButton = styled.a`
  ${commonStyles};
  text-decoration: underline;
`;

export function Button ({type, label, handleClick}) {
  return (
    <StyledButton type={type ?? 'button'} onClick={handleClick}>{label}</StyledButton>
  )
}

export function IconButton ({iconId, label}) {
  return (
    <StyledButton>
      {label}
      <Icon iconId={iconId}/>
    </StyledButton>
  )
}

export function Link ({path, label, handleClick}) {
  return (<StyledLinkButton href={path || ''} onClick={handleClick}>{label}</StyledLinkButton>)
}
