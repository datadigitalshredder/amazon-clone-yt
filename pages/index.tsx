import Head from "next/head";
import {
  BackgroundImg,
  HomeContainer,
  ProductRows
} from "@/styles/homestyles";

export default function Home() {
  return (
    <HomeContainer>
      <BackgroundImg
        src="https://m.media-amazon.com/images/I/61xnEcip5RL._SX3000_.jpg"
        alt="Amazon Background"
      />
      <ProductRows>
        Home Page
      </ProductRows>
      
    </HomeContainer>
    
  );
}
