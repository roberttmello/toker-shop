import {
  Facebook,
  Instagram,
  Pinterest,
  Room,
  Twitter,
  Phone,
  MailOutline,
} from "@material-ui/icons";
import styled from "styled-components";

import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

// LEFT-BLOCK
const LeftBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

// CENTER-BLOCK
const CenterBlock = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

// RIGHT-BLOCK
const RightBlock = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fcf5f5" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <LeftBlock>
        <Logo>TOKER.</Logo>
        <Description>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptas rerum sequi consequatur optio. Minima, consectetur magnam
          debitis illum a quidem nulla delectus et omnis eos reprehenderit
          beatae quasi nostrum.{" "}
        </Description>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </LeftBlock>

      <CenterBlock>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </CenterBlock>

      <RightBlock>
        <Title>Contact</Title>
        <ContactItem>
          {" "}
          <Room style={{ marginRight: "10px" }} /> 784 Boyce Avenue, Winston
          Curry 58745
        </ContactItem>
        <ContactItem>
          {" "}
          <Phone style={{ marginRight: "10px" }} /> +1 123 45 748
        </ContactItem>
        <ContactItem>
          {" "}
          <MailOutline style={{ marginRight: "10px" }} /> contact@tokershop.dev
        </ContactItem>

        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </RightBlock>
    </Container>
  );
};

export default Footer;
