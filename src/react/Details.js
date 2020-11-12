import React from "react";
import pet from "@frontendmasters/pet";
import { navigate } from "@reach/router";
import Modal from "./Modal";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

class Details extends React.Component {
  constructor(props) {
    super(props);

    // an initial state:
    this.state = {
      loader: true,
      showModal: false,
    };
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => navigate(this.state.url);
  // Called immediately after the component is mounted:
  componentDidMount() {
    pet.animal(Number(this.props.id)).then(({ animal }) => {
      this.setState({
        url: animal.url,
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
      let {
        name,
        animal,
        breed,
        location,
        description,
        media,
        showModal,
      } = this.state;
      return (
        <div className="details">
          <Carousel media={media} />
          <div>
            <h1>{name}</h1>
            <h2>{`${animal} - ${breed} - ${location}`}</h2>

            <p> {description}</p>

            <ThemeContext.Consumer>
              {([theme]) => (
                <button
                  onClick={this.toggleModal}
                  style={{ backgroundColor: theme.buttonColor }}
                >
                  Adopt {name}
                </button>
              )}
            </ThemeContext.Consumer>

            {showModal ? (
              <Modal>
                <div>
                  <h1>Would you like to adopt {name}?</h1>
                  <div className="buttons">
                    <button onClick={this.adopt}>Yes</button>
                    <button onClick={this.toggleModal}>
                      No, I am a monster
                    </button>
                  </div>
                </div>
              </Modal>
            ) : null}
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
