import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Image from '../common/Image'
import adOne from '/src/assets/adOne.jpg'
import adTwo from '/src/assets/adTwo.png'
import adThree from '/src/assets/adThree.jpg'

const Ads = () => {
  return (
    <div className={"py-68.75"}> 
        <Container>
            <Flex className={"gap-x-10"}>
                <div className={"w-[45%]"}><Image imgSrc={adOne} className={"w-full"}/></div>
                <div className={"w-[45%] gap"}>
                    <div className={"w-full"}><Image imgSrc={adTwo}/></div>
                    <div className={"w-full mt-10"}><Image imgSrc={adThree}/></div>
                 
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Ads