import './SignUp.scss';

function SignUp() {
    return (
        
      <main className="container">
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
                        <h5 class="card-title">Suresh Dasari</h5>
                        <p class="card-text">Suresh Dasari is a founder and technical lead developer in tutlane.</p>
                        <a href="#" class="btn btn-primary">View Profile</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <form>
  <div class="form-group">
    
  <input class="form-control" type="text" placeholder="Default input"/>
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>
  <div class="form-group">
    
  <input class="form-control" type="text" placeholder="Default input"/>
  </div>
  <div class ="confirm">
  <button type="submit" class="btn btn-primary">Confirm</button>
  </div>
</form>
      </main>    
    );
  }
  
  export default SignUp;