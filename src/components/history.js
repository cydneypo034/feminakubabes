import React from 'react';
import GamerGirl from './images/videogame.jpeg';

function History() {
    return (
        <div>
            <div class="jumbotron text-center p-4">
                <div class="row">
                    <div class="col-md-5 offset-md-1 mx-3 my-3">
                    
                    <div class="view overlay">
                        <img src={GamerGirl} class="img-fluid" alt="girl-in-arcade" />
                        <div class="mask rgba-white-slight">
                        </div>
                    </div>
                    </div>

                    <div class="col-md-6 text-md-left ml-3 mt-3">
                    <h4 class="h4 mb-4 header-title2">a history lesson</h4>
                    <p class="font-weight-normal header-subtitle2">
                    Cupcake ipsum dolor sit amet jelly halvah. Candy jelly beans cookie cotton candy. Gummies dessert dessert 
                    I love. Sesame snaps toffee marshmallow tart chupa chups. I love topping I love lollipop. Pastry jujubes 
                    marzipan icing. Dessert jujubes gingerbread pudding. Gummi bears topping carrot cake gummies. 
                    Gummies cookie macaroon I love sugar plum gingerbread oat cake lemon drops carrot cake.
                    </p>
                    </div>

                </div>
                
                </div>
        </div>
    )
}

export default History;