import Gardenimg from "./gardenimg.jpg";
import './Home.scss';

function Home() {
  return (
    <div className="container" id="body-container">
      <div className="col-md-6">
        <img src={Gardenimg} class="img-thumbnail" alt="Garden Image"/>
      </div>

    <div className="col-md-6">
      {/*<div className="">
      <input className="" placeholder="Find a community garden near you" type="input"/>
      <input type="submit"/>
      </div>*/}
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Find a community garden near you" />
        <button class="btn btn btn-success" type="button" id="button-addon2">Submit</button>
      </div>
    <div>
      <div className="container">
        <div className="col-md-4 mapBox">
         
        </div>
        <div className="col-md-8 gardenInfo">
            <h1>Garden</h1>
            <p>Address</p>
            <p>Type of Garden</p>
        </div>
      </div>
    </div>
    <div>
      <div className="container">
        <div className="col-md-4 mapBox">
         
        </div>
        <div className="col-md-8 gardenInfo">
            <h1>Garden</h1>
            <p>Address</p>
            <p>Type of Garden</p>
        </div>
      </div>
    </div>
    <div>
      <div className="container">
        <div className="col-md-4 mapBox">
        
        </div>
        <div className="col-md-8 gardenInfo">
            <h1>Garden</h1>
            <p>Address</p>
            <p>Type of Garden</p>
        </div>
      </div>
    </div>
  </div>
  </div>  
  );
}

export default Home;
