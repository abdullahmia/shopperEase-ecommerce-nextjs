import Checkbox from "./checkbox";

const Filter = () => {
  return (
    <div>
        <div>
            <h2 className="text-[17px] font-[600] text-[#333] border-b-2 inline-block border-[#333]">All Categories</h2>
            <div className="flex flex-col justify-start gap-4 mt-2">
                <Checkbox name="Accessories" />
                <Checkbox name="Babies" />
                <Checkbox name="Beauty" />
                <Checkbox name="Decoration" />
                <Checkbox name="Electronics" />
                <Checkbox name="Fashion" />
                <Checkbox name="Food" />
                <Checkbox name="Furniture" />
                <Checkbox name="Medical" />
                <Checkbox name="Smart Phones" />
            </div>
        </div>
        
        <div className="mt-8">
            <h2 className="text-[17px] font-[600] text-[#333] border-b-2 inline-block border-[#333]">Price</h2>
            <div className="flex flex-col justify-start gap-4 mt-2 font-poppins">
                  <Checkbox name="$0 - $50.00" />
                  <Checkbox name="$50.00 - $100.00" />
                  <Checkbox name="$100.00 - $200.00" />
                  <Checkbox name="$200.00 - $300.00" />
                  <Checkbox name="$300.00 - $400.00" />
                  <Checkbox name="$400.00 - $500.00" />
            </div>
        </div>


        <div className="mt-8">
            <h2 className="text-[17px] font-[600] text-[#333] border-b-2 inline-block border-[#333]">Brands</h2>
            <div className="flex flex-col justify-start gap-4 mt-2">
                <Checkbox name="Elegent Auto Group" />
                <Checkbox name="Green Greas" />
                <Checkbox name="Node Js" />
                <Checkbox name="Akij Group" />
                <Checkbox name="Red" />
                <Checkbox name="Skysuit Tech" />
                <Checkbox name="Techland" />
                <Checkbox name="Star Tech" />
            </div>
        </div>

    </div>
  )
}

export default Filter;