import React, {useEffect, useRef} from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../styles/GlobalComponents';
import {ContainerAnimation, Animation} from '../styles/notAvailableStyles';
import lottie from 'lottie-web'
import notFoundAnimation from '../../public/images/404.json'

export default function notAvailable() {

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: notFoundAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../public/images/404.json')
    })
  })

  return (
    <Section>
        <ContainerAnimation>
            <Animation ref={container}/>
        </ContainerAnimation>
        <SectionDivider style={{marginTop: 0,}}></SectionDivider>
        <SectionTitle style={{marginTop: 30,}}>Sorry, this project page is not available for public</SectionTitle>
        <SectionText>We can't make it available for the public at the moment. Get in touch to know more about this project</SectionText>
    </Section>
  )
}
