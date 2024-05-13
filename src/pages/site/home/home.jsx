import React, { useContext } from "react";
import "./home.css";
import Cards from "../../../components/site/cards/cards";
import MainContext from "../../../context/context"
import Loading from "../../Loading/Loading";
const Home = () => {
  const {data,loading}=useContext(MainContext)

  return (
    <main>
      <section id="shop">
        <div className="shop__div">
          <h1>Shop in style</h1>
          <p>With this shop homepage template</p>
        </div>
      </section>
      <section id="cards">
        <div className="cards__div">
          {
            loading ? <Loading/> :<Cards infos={data}/>
          }
        </div>
      </section>
    </main>
  );
};

export default Home;

