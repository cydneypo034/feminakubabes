import React from 'react';
import GamerGirl from './images/videogame.jpeg';

function History() {
    return (
        <div>
            <div class="jumbotron text-center p-4">
                <div class="row">
                    <div class="col-md-5 offset-md-1 mx-3 my-3">
                    
                    <div class="view overlay">
                        <img src={GamerGirl} class="img-fluid2" alt="girl-in-arcade" />
                        <div class="mask rgba-white-slight">
                        </div>
                    </div>
                    </div>

                    <div class="col-md-6 text-md-left ml-3 mt-3">
                    <h4 class="h4 mb-4 header-title2">a history lesson</h4>
                    <p class="font-weight-normal header-subtitle2">
                    Feminaku began in 2018 with a vision from our founder CeeBee. She fell deeply in love with anime
                    since she was in elementary school with Pokemon and Dragonball Z, but didn't watch seriously
                    until she got to high school. From there, she found peace and happiness in watching her favorite shows after school.
                    She even found herself going to anime cons with her friends, however while going there and being in several communities
                    of anime lovers, she found that there weren't many communitites with people who looked like her. She wanted to create
                    a space where she could talk about anime with other black girls and have a community by us, for us. 
                    </p>
                    </div>

                </div>
                
                </div>
        </div>
    )
}

export default History;