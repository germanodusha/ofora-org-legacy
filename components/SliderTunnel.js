import React from "react";

import SliderTunnelImage from "./SliderTunnelImage";

export default class SliderTunnel extends React.Component {
  state = {
    slides: [<a />],
    shufledDocuments: null,
    currentSlide: 0,
  };

  componentDidMount() {
    this.setState({ shufledDocuments: shuffleArray(this.props.documents) });
    setTimeout(this.renderNextImage(), 10);
    setTimeout(this.renderNextImage(), 20);
    setInterval(this.renderNextImage, 2000);
  }

  render() {
    return <div style={wrapperStyle}>{this.state.slides}</div>;
  }

  renderNextImage = () => {
    const { documents } = this.props;
    const { slides, currentSlide, shufledDocuments } = this.state;
    if (!shufledDocuments) return null;
    if (currentSlide === shufledDocuments.length) {
      this.setState({ currentSlide: 0 });
      return this.renderNextImage();
    }
    const document = shufledDocuments[currentSlide];
    const nextSlide = <SliderTunnelImage doc={document} />;
    this.setState({
      slides: [...slides, nextSlide],
      currentSlide: currentSlide + 1,
    });
  };
}

const wrapperStyle = {
  perspective: 12000,
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
