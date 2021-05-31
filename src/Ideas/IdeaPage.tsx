import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import "./IdeaPage.css";

const Recipe = () => {
  return (
    <body>
      <header className="bg-light text-center">
        <div className="container container--narrow">
          <p>Lorem, ipsum dolor.</p>
          <h1>Responsieve layouts don't have to be a struggle</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <h2 className="text-center">Qaulity Designs</h2>
          <div className="split">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                cumque tenetur recusandae amet iusto reiciendis incidunt autem
                inventore, illo beatae tempora nobis natus necessitatibus!
                Illum?
              </p>
            </div>
            <div>
              <p>
                Nisi, veniam aliquid. Perferendis dolores nisi voluptatum
                placeat enim omnis ratione ab aliquid. Omnis sint in accusantium
                exercitationem temporibus explicabo iure reprehenderit vero
                laborum accusamus?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark">
        <div className="container">
          <div className="split">
            <div>
              <h2>Made custom for you</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, libero impedit! Accusamus sequi iure ipsa.
              </p>
            </div>
            <div>
              <img src="img/image-01.jpeg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary">
        <div className="container">
          <div className="split">
            <div>
              <img src="img/image-02.jpeg" alt="" />
            </div>
            <div>
              <h2>Created with care</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis consequatur dolores cumque nobis dolore ratione aut
                unde modi impedit excepturi!
              </p>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};

export default Recipe;
