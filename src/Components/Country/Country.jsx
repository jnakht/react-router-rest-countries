
import './Country.css'
const Country = ({country}) => {
    const {name, capital, population, region, flags} = country;
    return (
        
        <div>
            <div className="card bg-gray-500 w-96 h-[500px] shadow-sm country">
  <figure>
    <img 
      className='w-full h-[180px] rounded-xl'
      src={flags.png}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name.common}</h2>
    <p><small>{capital}</small></p>
    <p>Population: {population}</p>
    <p>Region: {region}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Country;