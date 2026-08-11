import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from '../common/Container'
import Heading from '../common/Heading'
import Products from '../common/Products'
import Flex from '../common/Flex'

const Bestseller = () => {

  let [allData, setAllData] = useState([])

  useEffect(() => {
    async function alldatas() {
      let data = await axios.get("https://dummyjson.com/products")
      setAllData(data.data.products)
    }

    alldatas()
  }, [])

  return (
    <div className={"mt-29.5"}>
      <Container>

        <Heading
          text={"Our Bestsellers"}
          as={"h2"}
          className={"text-3xl font-bold mb-12"}
        />

        <Flex className={"gap-x-10"}>

          {allData.slice(8, 12).map((item) => (
            <Products
              key={item.id}
              productImg={item.thumbnail}
              badgeT={"new"}
              productT={item.title}
            />
          ))}

        </Flex>

      </Container>
    </div>
  )
}

export default Bestseller
