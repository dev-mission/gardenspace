import Gardenimg from "./gardenimg.jpg";

function Home() {
  return (
    <div className="container">
      <div>
        <img className="" src={Gardenimg} alt="garden image"/>
      </div>
    <div className="">
      <input className="" placeholder="Find a community garden near you" type="input"/>
      <input type="submit"/>
    </div>
    <div>
      <div className="container">
        <div className="col-md-4">
          <div></div>
        </div>
        <div className="col-md-8">
            <h1>Garden</h1>
            <p>Address</p>
            <p>Type of Garden</p>
        </div>
      </div>
    </div>
    <div>
      <div className="container">
        <div className="col-md-4">
          <div></div>
        </div>
        <div className="col-md-8">
            <h1>Garden</h1>
            <p>Address</p>
            <p>Type of Garden</p>
        </div>
      </div>
    </div>
    <div>
      <div className="container">
        <div className="col-md-4">
          <div></div>
        </div>
        <div className="col-md-8">
            <h1>Garden</h1>
            <p>Address</p>
            <p>Type of Garden</p>
        </div>
      </div>
    </div>
  </div>  
  );
}

export default Home;
