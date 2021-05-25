import './SuccessPage.scss';

function SuccessPage() {
    return (
        
      <main className="container">
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
                        <h5 class="card-title">Suresh Dasari</h5>
                        <p class="card-text">Suresh Dasari is a founder and technical lead developer in tutlane.</p>
                        
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