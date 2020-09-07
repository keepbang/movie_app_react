import React from "react";
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: "BBQ",
    image:
      "https://image.shutterstock.com/image-photo/spicy-hot-grilled-spare-ribs-600w-611174102.jpg"
    ,rating : 5
  },
  {
    id: 2,
    name: "T-bone steak",
    image:
      "https://image.shutterstock.com/image-photo/grilled-tbone-steak-on-stone-260nw-683684506.jpg"
      ,rating : 4.5  },
  {
    id: 3,
    name: "Gyukatsu",
    image:
      "https://image.shutterstock.com/image-photo/japanese-beef-gyukatsu-260nw-1210787215.jpg"
      ,rating : 4.7
  },
  {
    id: 4,
    name: "Tteokbokki",
    image:
      "https://image.shutterstock.com/image-photo/korean-spicy-tteokbokki-on-plate-260nw-1323264638.jpg"
      ,rating : 3.6
  },
  {
    id: 5,
    name: "Pork-Belly",
    image:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcT03mopjXElij2ouYr_NKj6YZ5p5agUW3F1kEveXspaQaQRm9mkgzT-rWxcyeOxoFgP7DUP8JJP43LYSenEeJQ"
      ,rating : 3.9
  }
];

const Food = (props) => {
  return (
    <div>
      <h2>I like {props.name}</h2>
      <h4>{props.rating} / 5.0</h4>
      <img height="200" src={props.image} alt={props.name} />
    </div>
  );
};

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map((val) => {
        return <Food key={val.id} name={val.name} image={val.image} rating={val.rating}/>;
      })}
    </div>
  );
}

export default App;
