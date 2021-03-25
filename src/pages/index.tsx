import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import WhatsAppConfig from '@/infra/whatsapp/config'
import InstagramConfig from '@/infra/instagram/config'
import Anchor from '@/components/Anchor'
import WhatsappButton from '@/patterns/WhatsAppButton'
import InstagramButtom from '@/patterns/InstagramButtom'

import { Container, SocialButtons } from '@/styled/home'

export default function Home(): React.ReactElement {
  return (
    <Container>
      <Head>
        <title>Alex Munhoz Tattoo</title>
        <meta name="description" content="Tatuagens em Itapetininga" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Image src="/images/logo.jpg" alt="Logo Alex Munhoz Tattoo" width={226} height={226} />
      <SocialButtons>
        <Anchor href={WhatsAppConfig.src} rel="noreferrer">
          <WhatsappButton>Agendar por Whatsapp!</WhatsappButton>
        </Anchor>
        <Anchor href={InstagramConfig.src} rel="noreferrer">
          <InstagramButtom>Agendar por Instagram!</InstagramButtom>
        </Anchor>
      </SocialButtons>
    </Container>
  )
}
