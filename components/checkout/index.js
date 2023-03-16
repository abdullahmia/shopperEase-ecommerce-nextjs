import CheckoutDetail from "./CheckoutDetail"
import Form from "./Form"

const index = () => {
    return (
        <div className="grid grid-cols-12 lg:gap-10 gap-3 mt-10">
            
            <div className="lg:col-span-8 col-span-12">
                <Form/>
            </div>
            <div className="lg:col-span-4 col-span-12">
                <CheckoutDetail />
            </div>
        </div>
    )
}

export default index