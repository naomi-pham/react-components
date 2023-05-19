import { IconArrow } from 'components/common/Icons'
import Image from 'next/image'
import Link from 'next/link'
import creamCoffee from 'public/images/starbucks/cream-coffee.png'

const ProductInfo = () => {
  return (
    <div className="flex flex-col gap-5 px-[10px]">
      <div className="relative h-[180px] w-[180px] self-center rounded-full">
        <Image
          src={creamCoffee}
          alt="cinnamon dolce latte"
          width={180}
          height={180}
          className="absolute inset-0 object-cover"
        />
      </div>

      <div className="space-y-[10px]">
        <h1 className="text-title-1 font-semibold text-light-neutral-800">
          Cinnamon Dolce Latte
        </h1>
        <p className="text-body-2">
          We add freshly steamed milk and cinnamon dolce-flavored syrup to our
          classic espresso, topped with sweetened whipped cream and a
          cinnamon...
        </p>
        <Link href="/" className="text-body-3 tracking-wider flex items-center gap-[5px]">
          See more
          <span>
            <i>
              <IconArrow size={16} />
            </i>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default ProductInfo
