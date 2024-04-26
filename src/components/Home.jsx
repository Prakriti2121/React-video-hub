import React from 'react';
import {Box, Container, Heading, Image, Stack, Text} from '@chakra-ui/react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/1.jpg';
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";
import { transform } from 'framer-motion';

const headingOptions = {
    pos:"absolute",
    left:'50%',
    top: "50%", 
    transform:"translate(-50%, -50%)",
textTransform: "uppercase", p:"4",
size: "3xl",
}

const Home = () => {
  return (
  <Box>
<MyCarousel />
<Container maxW={'container.xl'} minH={'100vh'} p={'16'} >
<Heading textTransform={'uppercase'} py="2" w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>Services</Heading>

<Stack h="full" p={'4'} alignItems={'center'} direction={['column', 'row']}>
    <Image src= {img5} filter={'hue-rotate(-130deg)'} h={["40", "400"]} />
    <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
    Discover, watch, and share your favorite videos with our intuitive video hub app. With a vast library of content spanning every genre imaginable, from entertainment and education to lifestyle and sports, there's something for everyone. Enjoy seamless streaming in stunning HD quality, whether you're on your smartphone, tablet, or smart TV. Dive into curated playlists tailored to your interests, or explore trending videos to stay up-to-date with what's hot. Plus, our personalized recommendations ensure you never miss out on must-watch content. Experience the ultimate video entertainment hub, right at your fingertips.
    </Text>

</Stack>
</Container>
  </Box>
  ); 
};

const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false}
    showArrows={false}>
        <Box w="full" h={'100vh'}>
            <Image src={img1} />
            <Heading bgColor ={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Watch The Future
            </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
            <Image src={img2} />
            <Heading bgColor ={'whiteAlpha.900'} color={'black'}  {...headingOptions}>
             Future is Gaming
            </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
            <Image src={img3} />
            <Heading bgColor ={'whiteAlpha.600'} color={'black'}  {...headingOptions}>
             Gaming on Console
            </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img4} />
            <Heading bgColor ={'whiteAlpha.600'} color={'black'}  {...headingOptions}>
             Night Life is cool
            </Heading>
        </Box>

    </Carousel>
)

export default Home;
