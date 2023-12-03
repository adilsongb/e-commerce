import styled from "styled-components";

export const ButtonContainer = styled.button<{
  $radius: "circular" | "default";
  $isOutLined: boolean;
  $color: string;
  $textColor: string;
  $isDisable: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 12px 28px;
  gap: 8px;
  border-radius: ${(props) => (props.$radius === "circular" ? "50%" : "57px")};
  background-color: ${(props) => (props.$isOutLined ? "white" : props.$color)};
  border: ${(props) =>
    props.$isOutLined ? `1.5px solid ${props.$color}` : "none"};
  color: ${(props) => (props.$isOutLined ? props.$color : props.$textColor)};

  cursor: ${(props) => (props.$isDisable ? "not-allowed" : "pointer")};

  &:hover {
    opacity: ${(props) => (props.$isDisable || props.$isOutLined ? 1 : 0.9)};
  }
`;
