import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user);
  // const [service,setService] = useState()
  // setService(loadedData)
  // const {title,price,_id}= service;
  console.log(service);
  const { _id,title, price, img } = service;

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value
    const date = form.date.value
    const email = form.date.value;
    const amount = form.amount.value;

    const options = {
        CustomerName:name, date, email, amount,service_id: _id,service:title,img
    }

    console.log(options);

    fetch('http://localhost:5000/bookings', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(options)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold">
        Service Name: {title}
      </h1>
      <div>
        <form onSubmit={handleSubmit} className="card-body w-full">
          <div className="flex gap-5 w-full">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                defaultValue={user?.email}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                type="text"
                name="amount"
                defaultValue={price}
                placeholder="Due Amount"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Product Description</span>
          </label>
          <input type="text" placeholder="Product Description" className="input input-bordered" required />
        </div> */}

          <div className="form-control mt-6">
            <button className="btn btn-primary">Book</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
