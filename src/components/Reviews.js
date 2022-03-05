import './../App.css';

function Reviews() {
    //Dummy Data JSON
    const usersReview = [
      {
        "id" : 1,
        "name" : "Camilla",
        "review" : "This shoes is look so good",
        "imgsrc" : "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        "id" : 2,
        "name" : "Kamal",
        "review" : "*Follow what Dinda said*",
        "imgsrc" : "https://images.pexels.com/photos/2364593/pexels-photo-2364593.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        "id" : 3,
        "name" : "Ali",
        "review" : "The most comfortable shoes i've use",
        "imgsrc" : "https://images.pexels.com/photos/3525908/pexels-photo-3525908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    ]
    const listReview = usersReview.map((itemReview) => 
      <div className="review" key={itemReview.id}>
        <img src={itemReview.imgsrc} alt="profile"/>
        <div className="detailUserReview">
          <h4>{itemReview.name}</h4>
          <p>{itemReview.review}</p>
        </div>
      </div>
    )
    return(
      <div className="reviewSection">
        <h1>Reviews</h1>
        {listReview}
      </div>
    )
  }

export default Reviews;