import { styled } from "styled-components";
import theme from "@/app/styles/theme";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 130px 40px 130px;
  border-radius: 40px 40px 0px 0px;
  gap: 40px;
  background: linear-gradient(
    103deg,
    ${theme.colors.yellowPrimary} 6.43%,
    ${theme.colors.yellowPrimary} 78.33%,
    ${theme.colors.yellowLight} 104.24%
  );

  @media (max-width: 1100px) {
    width: 100%;
    border-radius: 20px 20px 0px 0px;
    padding: 40px 60px 40px 60px;
  }
`;

export const Informations = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  border-bottom: 1px solid ${theme.colors.gray20};
  padding-bottom: 40px;
`;

export const Register = styled.div`
  width: 100%;
  display: flex;
  padding: 32px;
  border-radius: 16px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: ${theme.colors.darkBlue};

  @media (max-width: 1100px) {
    display: flex;
    padding: 16px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

export const RegisterText = styled.div`
  h1 {
    color: ${theme.colors.white};
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    text-transform: capitalize;
  }

  @media (max-width: 1100px) {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    text-transform: capitalize;
  }
`;

export const SubcribeContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 70px;
  align-items: center;
  padding: 12px;
  gap: 12px;
  border-radius: 14px;
  background: ${theme.colors.white};

  @media (max-width: 1100px) {
    width: 100%;
    display: flex;
    padding: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const InputEmail = styled.input`
  border-radius: 8px;
  border: 1px solid ${theme.colors.gray40};
  display: flex;
  padding: 14px 28px;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;

  @media (max-width: 1100px) {
    width: -webkit-fill-available;
    padding: 14px 28px;
    align-items: center;
    gap: 10px;
  }
`;

export const SubcribeButton = styled.button`
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 8px;
  padding: 10px 28px 10px 28px;
  gap: 10px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.darkBlue};
  border: none;
  cursor: pointer;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.blue};
  }

  &:active {
    background-color: ${theme.colors.bluePrimary};
  }

  @media (max-width: 1100px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const SwiftAccess = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1100px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 60px;
  }

  a {
    text-decoration: none;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    cursor: pointer;
    color: ${theme.colors.blueSecondary};
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;

  ul {
    list-style: none;
    display: flex;
    gap: 60px;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    cursor: pointer;
    color: ${theme.colors.blueSecondary};
  }
`;

export const FooterTerms = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    color: ${theme.colors.gray60};
    cursor: pointer;
  }

  @media (max-width: 1100px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Terms = styled.div`
  display: flex;
  gap: 40px;

  ul {
    list-style: none;
    display: flex;
    gap: 60px;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    color: ${theme.colors.gray60};
    cursor: pointer;
  }

  @media (max-width: 1100px) {
    a {
      font-size: 12px;
    }
  }
`;
