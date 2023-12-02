/* eslint-disable react/no-unescaped-entities */
"use client";
import faceboook from "../../../public/assets/facebook.svg";
import instagram from "../../../public/assets/instagram.svg";
import twitter from "../../../public/assets/twitter .svg";
import youtube from "../../../public/assets/youtube.svg";
import * as S from "./Footer.style";
import React from "react";

export default function Footer() {
  return (
    <S.Container>
      <S.Informations>
        <S.Register >
          <S.RegisterText>
            <h1>Register now so you don't miss our programs</h1>
          </S.RegisterText>
          <S.SubcribeContainer>
            <S.InputEmail placeholder="Enter your Email" />
            <S.SubcribeButton>
              Subcribe Now
            </S.SubcribeButton>
          </S.SubcribeContainer>

        </S.Register>

        <S.SwiftAccess>
          <S.LinkContainer>
            <ul>
              <li><a>Home</a></li>
              <li><a>Category</a></li>
              <li><a>About</a></li>
              <li><a>Contact</a></li>
            </ul>
          </S.LinkContainer>
          <S.SocialMediaContainer>
            <ul>
              <li>
                <a href="#">
                  <img src={faceboook} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={instagram} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitter} alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={youtube} alt="Youtube" />
                </a>
              </li>
            </ul>
          </S.SocialMediaContainer>
        </S.SwiftAccess>
      </S.Informations>
      <S.FooterTerms>
        <p>© 2022 Monito. All rights reserved.</p>
        <img src="" alt="LOGO" />
        <S.Terms>
          <ul>
            <li>
              <a href="#">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </S.Terms>
      </S.FooterTerms>
    </S.Container>
  );
}
