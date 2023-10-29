import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
    const service = useLoaderData()
    // const [service,setService] = useState()
    // setService(loadedData)
    // const {title,price,_id}= service;
    console.log(service)
    const {title, price} = service;
    return (
        <div>
            {title}
            <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
      <form className="card-body w-full">
       <div className="flex gap-5">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input type="text" placeholder="Service Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Price</span>
          </label>
          <input type="text" placeholder="Price" className="input input-bordered" required />
        </div>
       </div>
       <div className="flex gap-5">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Text Here</span>
          </label>
          <input type="text" placeholder="text" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Type</span>
          </label>
          <input type="text" placeholder="Service Type" className="input input-bordered" required />
        </div>
       </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Description</span>
          </label>
          <input type="text" placeholder="Product Description" className="input input-bordered" required />
        </div>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Checkout;