import Container from '../common/Container'
import Heading from '../common/Heading'
import Products from '../common/Products'
import watch from '/src/assets/watch.png'
import Flex from '../common/Flex'
import React from 'react'


const Special = () => {
  return (
    <div className={"mb-35"}>
        <Container>
            <Heading text={"Special Offers"} as={"h2"} className={"text-3xl font-bold mb-12"}/>
            <Flex className={"gap-x-10"}>
                <Products productImg={watch} badgeT={"new"} productT={"Basic Crew Neck Tee"} />
                <Products productImg={watch} badgeT={"new"} productT={"Basic Crew Neck Tee"} />
                <Products productImg={watch} badgeT={"new"} productT={"Basic Crew Neck Tee"} />
                <Products productImg={watch} badgeT={"new"} productT={"Basic Crew Neck Tee"} />
            </Flex>
        </Container>
    </div>
  )
}

export default Special