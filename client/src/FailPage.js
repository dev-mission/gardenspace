import './FailPage.scss';

function FailPage() {
    return (
        
      <main className="container">
        <h1>Sorry, booking unsuccessful!</h1>

       <h3>Please try again later or sign up for a different event.</h3>

       <div class="first-button">
    <button type="button" class="btn btn-outline-secondary">Go to Home</button>
    </div>
   
      </main>    
    );
  }
  
  export default FailPage;