import React from "react";
import "./home.css";
const Home = () => {
  return (
    <main>
      <section id="shop">
        <div className="shop__div">
          <h1>Shop in style</h1>
          <p>With this shop hompage template</p>
        </div>
      </section>
      <section id="cards">
        <div className="cards__div">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div class="card" style={{width: "18rem"}}>
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <button className="btn btn-outline-dark">
                      Go somewhere
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
