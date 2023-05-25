const element = (
  <div className="container">
    <h1 className="heading">Congratulations</h1>

    <div className="card">
      <img
        className="profileImg"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h3 className="cardHeading">Kiran V</h3>
      <p className="cardPara">
        Vishnu Institute of Computer Education and Technology,Bhimavaram
      </p>
      <img
        className="watchImg"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
