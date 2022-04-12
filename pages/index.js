import Hero from '../lib/Hero.js'
import { FeaturesAsymmetrical } from '../lib/Features.js'
import { FooterSimple } from '../lib/Footer.js'
import { Demo } from '../lib/Timeline.js'
// import 

import { Center, Text } from '@mantine/core';
import { DevInfo } from '../lib/TeamPanels.js';


export default function Home() {
  const footerLinks = [
    {
      link: 'www.google.com',
      label: 'Yoru'
    },
    {
      link: "/about",
      label: "About"
    },
    {
      link: "https://github.com/bryanmontalvan/yoru",
      label: "Contribute"
    }
  ];

  const developers = [
    {
      avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQEvzlyDM_QsAw/profile-displayphoto-shrink_200_200/0/1645294102854?e=1654128000&v=beta&t=PJNJTZP9FfGMZDho3xki-nnL-BNyxDOdQdN6ZqSD3wQ",
      name: "Bryan Montalvan",
      title: "Software Engineer",
      email: "bmontalvandev@gmail.com",
      github: "bryanmontalvan",
      ghlink: "https://github.com/bryanmontalvan"
    },
    {
      avatar: "",
      name: "Jake Correnti",
      title: "Software Engineer",
      email: "placeholder@gmail.com",
      github: "jakecorrenti ",
      ghlink: "https://github.com/jakecorrenti"
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/44294979?v=4",
      name: "James Pope",
      title: "Software Engineer",
      email: "placeholder@gmail.com",
      github: "jpope15",
      ghlink: "https://github.com/jpope15"
    },
    {
      avatar: "",
      name: "Dan Nguyen",
      title: "Software Engineer",
      email: "placeholder@gmail.com",
      github: "DanNguyen1",
      ghlink: "https://github.com/DanNguyen1",
    },
  ]

  return (
    <>
      <Hero />
      <FeaturesAsymmetrical />
      <Center style={{ marginTop: "100px" }}>
        <Demo />
      </Center>
      <Text align="center" weight={700} style={{ fontSize: 35, marginTop: 80 }}>Our Developer team</Text>
      <DevInfo devs={developers}/>
      <FooterSimple links={footerLinks} />
    </>
  )
}