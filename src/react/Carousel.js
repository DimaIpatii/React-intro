import React from "react";

class Carousel extends React.Component {
  constructor() {
    super();

    this.state = {
      photos: [],
      active: 0,
    };

    this.handleIndexClick = this.handleIndexClick.bind(this);
  }

  static getDerivedStateFromProps({ media }) {
    console.log("Derived Media", media);
    var photos = ["https://placecorgi.com/600/600"];

    if (media.length > 0) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }
  handleIndexClick(event) {
    this.setState({ active: Number(event.target.dataset.index) });
  }

  render() {
    var { photos, active } = this.state;

    return (
      <div className="corousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {this.props.media.map((photo, index) => (
            // disable ESlint for next line:
            // eslint-disable-next-line
            <img
              src={photo.large}
              key={index}
              onClick={this.handleIndexClick}
              data-index={index}
              className={index == active ? "active" : ""}
              alt="animal"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
