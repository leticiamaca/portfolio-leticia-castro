import React from 'react'
import Banner from "../components/banner";
import Carrosel from "../components/carrosel";
import Tecnologias from "../components/tecnologiasSection";
import Footer from "../components/footer";

import Formacao from "../components/formacao";
import Sobre from "../components/sobre";
import BannerCTA from "../components/bannerCTA"
import Contato from "../components/contatoCTA"


const HomePage = () => {
  return (
    <>
      <Banner />
      <Sobre />
      <Carrosel />
      <Formacao />
      <BannerCTA />
      <Tecnologias />
      <Contato />
      <Footer />
    </>
  );
}

export default HomePage
