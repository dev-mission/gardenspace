import './Getinvolved.scss';

function Getinvolved(){
    return(
        <div class="container body-container">
            <div class="container" id="calendar">
                <div className="col-md-12">
                    <h1 id="schedule-title">Schedule</h1>
                    <div class="container getinvolvedcal">
                        <div className="col-md-2.5">
                            <p></p>
                            <h3>&lt;</h3>
                        </div>
                        <div className="col-md-1">
                            <p>Jan 4.</p>
                            <h3>Mon</h3>
                        </div>
                        <div className="col-md-1">
                            <p>Jan 5.</p>
                            <h3>Tue</h3>
                        </div>
                        <div className="col-md-1">
                            <p>Jan 6.</p>
                            <h3>Wed</h3>
                        </div>
                        <div className="col-md-1">
                            <p>Jan 7.</p>
                            <h3>Thu</h3>
                        </div>
                        <div className="col-md-1">
                            <p>Jan 8.</p>
                            <h3>Fri</h3>
                        </div>
                        <div className="col-md-1">
                            <p>Jan 9.</p>
                            <h3>Sat</h3>
                        </div>
                        <div className="col-md-1">
                            <p>Jan 10.</p>
                            <h3>Sun</h3>
                        </div>
                        <div className="col-md-2.5">
                            <p></p>
                            <h3>&gt;</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="Gardenbutton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Garden
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Option 1</a></li>
                    <li><a class="dropdown-item" href="#">Option 2</a></li>
                    <li><a class="dropdown-item" href="#">Option 3</a></li>
                </ul>
            </div>

            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="" alt=""/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <p class="card-text">Time/Date</p>
                            <h5 class="card-title">Event Title</h5>
                            <p class="card-text">Address</p>
                            <p class="card-text">Description</p>
                            <button type="button" class="btn btn-success">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="" alt=""/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <p class="card-text">Time/Date</p>
                            <h5 class="card-title">Event Title</h5>
                            <p class="card-text">Address</p>
                            <p class="card-text">Description</p>
                            <button type="button" class="btn btn-success">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="" alt=""/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <p class="card-text">Time/Date</p>
                            <h5 class="card-title">Event Title</h5>
                            <p class="card-text">Address</p>
                            <p class="card-text">Description</p>
                            <button type="button" class="btn btn-success">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Getinvolved;