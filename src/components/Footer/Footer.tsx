/* eslint-disable react/no-unescaped-entities */
"use client";
import faceboook from "../../../public/assets/facebook.svg";
import instagram from "../../../public/assets/instagram.svg";
import twitter from "../../../public/assets/twitter .svg";
import youtube from "../../../public/assets/youtube.svg";
import logo from "../../../public/assets/logo.svg";
import * as S from "./Footer.style";
import Image from "next/image";
import React from "react";

const socialMediaLinks = [
  { icon: faceboook, alt: "Facebook", url: "#" },
  { icon: instagram, alt: "Instagram", url: "#" },
  { icon: twitter, alt: "Twitter", url: "#" },
  { icon: youtube, alt: "Youtube", url: "#" },
];

const footerLinks = [
  { text: "Home", url: "#" },
  { text: "Category", url: "#" },
  { text: "About", url: "#" },
  { text: "Contact", url: "#" },
];

const termsLinks = [
  { text: "Terms of Service", url: "#" },
  { text: "Privacy Policy", url: "#" },
];

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
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </S.LinkContainer>
          <S.SocialMediaContainer>
            <ul>
              {socialMediaLinks.map((socialMedia, index) => (
                <li key={index}>
                  <a href={socialMedia.url}>
                    <Image src={socialMedia.icon} alt={socialMedia.alt} />
                  </a>
                </li>
              ))}
            </ul>
          </S.SocialMediaContainer>
        </S.SwiftAccess>
      </S.Informations>
      <S.FooterTerms>
        <p>© 2022 Monito. All rights reserved.</p>
        <Image src={logo} alt="Logo" />
        <S.Terms>
          <ul>
            {termsLinks.map((term, index) => (
              <li key={index}>
                <a href={term.url}>{term.text}</a>
              </li>
            ))}
          </ul>
        </S.Terms>
      </S.FooterTerms>
    </S.Container>
  );
}
