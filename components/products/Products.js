import Product from "./Product"

const Products = ({label = "", products = []}) => {
  return (
    <div className="container">
        {label && <h2 className="text-[20px] font-semibold text-[#333]">{label}</h2>}

        <div className="mt-10 grid lg:grid-cols-5 grid-cols-2 gap-6">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    </div>
  )
}

export default Products