import picofgarden from './picofgarden.jpg';
import './Whatarecommgar.scss';

function WhatAreCommunityGarden() {
    return(
        <div className="container" id="body-container">
            <div className="col-md-6">
                <img src={picofgarden} class="img-thumbnail" alt="Garden Image"/>
            </div>
            <div className="col-md-6 gardendesc">
                <h1>What Are Community Gardens?</h1>
                <p>
                    In ultricies fermentum aliquet. Pellentesque dui magna, condimentum non ullamcorper at, cursus in sem. Nunc condimentum, purus ac sagittis ultricies, metus leo pharetra mi, non vehicula felis elit et nisi. Etiam venenatis commodo libero, vel ullamcorper nibh lobortis vel. Aliquam auctor porta tortor, nec consequat nibh finibus a. Sed ultrices risus eget iaculis luctus. Mauris vel gravida magna.
                </p>
            </div>
        </div>
    )
}

export default WhatAreCommunityGarden;