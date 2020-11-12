import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class Details extends React.Component {
  constructor(props) {
    super(props);

    // an initial state:
    this.state = {
      loader: true,
    };
  }
  // Called immediately after the component is mounted:
  componentDidMount() {
    pet.animal(Number(this.props.id)).then(({ animal }) => {
      this.setState({
        animal: animal.type,
        name: animal.name,
        breed: animal.breeds.primary,
        media: animal.photos,
        location: `${animal.contact.address.city} - ${animal.contact.address.state}`,
        description: animal.description,
        loader: false,
      });
    }, console.error);
  }
  render() {
    if (this.state.loader === true) {
      return <h1>Loading...</h1>;
    } else {
      let { name, animal, breed, location, description, media } = this.state;
      return (
        <div className="details">
          <Carousel media={media} />
          <div>
            <h1>{name}</h1>
            <h2>{`${animal} - ${breed} - ${location}`}</h2>
            <p>{description}</p>
            <button>Adopt {name}</button>
          </div>
        </div>
      );
    }
  }
}

export default function DetailsWithErrorBoundling(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
