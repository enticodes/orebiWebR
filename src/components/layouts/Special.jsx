import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from '../common/Container'
import Heading from '../common/Heading'
import Products from '../common/Products'

const Special = () => {

  let [allData, setAllData] = useState([])

  useEffect(() => {
    async function alldatas() {
      try {
        let data = await axios.get("https://dummyjson.com/products")
        setAllData(data.data.products || [])
      } catch (err) {
        console.error(err);
      }
    }

    alldatas()
  }, [])

  return (
    <section className={"py-12 mb-12"}>
      <Container>

        <Heading
          text={"Special Offers"}
          as={"h2"}
          className={"text-3xl font-black mb-8 dark:text-white"}
        />

        <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"}>

          {allData.slice(12, 16).map((item) => (
            <Products
              key={item.id}
              item={item}
              productImg={item.thumbnail}
              badgeT={"30% OFF"}
              productT={item.title}
              price={item.price}
              category={item.category}
              rating={item.rating}
            />
          ))}

        </div>

      </Container>
    </section>
  )
}

export default Special
