import './SuccessPage.scss';

function SuccessPage() {
    return (
        
      <main className="container">
      &lt; <u><h8>  Back to Get Involved</h8></u>
        <h1>Successfully Booked!</h1>
        <div class="container bcontent">
        <div class="card">
            <div class="row no-gutters">
                <div class="col-sm-5">
                  <div class="image">
                    <img class="card-img" src="https://florgeous.com/wp-content/uploads/2020/10/yellow-pansies-768x1024.jpg" alt=" yellowflower"/>
                   </div>
                </div>
                <div class="col-sm-7">
                    <div class="card-body">
                        <h6 class="card-title">Kevin Lee</h6>
                       <h6> <p class="card-text">kevinlee@gmail.com <br></br>12:00 PM / Jan. 5<br></br>Tour - Alemany Farm<br></br>700 Alemany Blvd, San Francisco, CA 94110</p> </h6>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="buttongroup">
    <div class="first-button">
    <button type="button" class="btn btn-outline-secondary">Add to Google</button>
    </div>
    <div class="second-button">
    <button type="button" class="btn btn-outline-secondary">Add to Calendly</button>
    </div>
    </div>
      </main>    
    );
  }
  
  export default SuccessPage;