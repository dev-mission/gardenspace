import './SignUp.scss';

function SignUp() {
    return (
        
      <main className="container">
        &lt; <u><h8>  Back to Get Involved</h8></u>
        <h1>Confirm Reservation</h1>
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
                        <h7 class="card-title">12:00 PM / Jan. 5</h7>
                        <h2>Tour - Alemany Farm</h2>
                        <p class="card-text">700 Alemany Blvd, San Francisco, CA 94110</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <form>
    <div class = "form">
  <div class="form-group">
  <input class="form-control" type="text" placeholder="Full Name"/>
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>
  <div class="form-group">
    
  <input class="form-control" type="text" placeholder="Email"/>
  </div>
  </div>
  <div class ="confirm">
  <button type="submit" class="btn btn-success">Confirm</button>
  </div>
</form>
      </main>    
    );
  }
  
  export default SignUp;