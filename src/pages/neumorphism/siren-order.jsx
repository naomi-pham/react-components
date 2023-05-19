import { Nav, ProductInfo, Selection } from 'components/neumorphism/siren-order'
import React from 'react'

const SirenOrder = () => {
  return (
    <div className="py-16">
      <div className="space-y-[30px] px-5">
        <Nav />
        <ProductInfo />
      </div>

      <section className="mt-7 space-y-10 border-t border-light-neutral-600/50 py-[30px] px-5">
        <Selection />
        {/* <Cards />
        <Favorites /> */}
      </section>
    </div>
  )
}

export default SirenOrder
