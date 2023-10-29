const ServiceCard = ({service}) => {
    const {title,img,price} = service;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          className="h-64"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-lg font-bold text-orange-500">Price: {price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
