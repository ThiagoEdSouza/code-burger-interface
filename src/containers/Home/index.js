import React from 'react';

import HomeLogo from '../../assets/home-logo.svg'

import { Container, HomeImg } from './styles'
import CategoryCarousel from '../../components/CategoryCarousel';

function Home() {
    return (
        <Container>
            <HomeImg src={HomeLogo} alt="Logo da Home" />
            <CategoryCarousel />
        </Container>
    )
}

export default Home