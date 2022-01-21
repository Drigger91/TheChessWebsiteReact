import React from 'react'
import { FooterContainer,FooterLinkItems,FooterWrap,FooterLinkTitle,FooterLinksWrapper,FooterLinksContainer,FooterLink } from './footerElements'
import {NavLogo} from '../Navbar/navElements';
import{FaPhone ,FaAddressCard,FaMailBulk,FaInstagram} from'react-icons/fa'
const Footer = () => {
    return (
        <>
        <FooterContainer id='signup'>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle><NavLogo to='/'>TheChessWebsite</NavLogo></FooterLinkTitle><p>Learn from the best.</p>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Get in touch</FooterLinkTitle>
                            <FooterLink disable to='/'><FaPhone className='icon'/>  : +91-8103595203</FooterLink>
                            <FooterLink disable to='/'><FaAddressCard className='icon' /> : Jhabua,Madhya Pradesh </FooterLink>
                            <FooterLink disable to='/'><FaMailBulk className='icon' /> : mepiyusht@gmail.com</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Follow Us</FooterLinkTitle>
                            <FooterLink to='/'>Github</FooterLink>
                            <FooterLink to='/'>LinkedIn</FooterLink>
                            <FooterLink to='/'>Instagram</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
            
        </>
    )
}

export default Footer
