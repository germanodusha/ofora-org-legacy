import React, { Component } from "react";

const MainContext = React.createContext();

const initialState = {
  lang: "br",
};

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  toggleLang = () =>
    this.setState({ lang: this.state.lang === "br" ? "en" : "br" });
  setLangBr = () => this.setState({ lang: "br" });
  setLangEn = () => this.setState({ lang: "en" });

  render() {
    return (
      <MainContext.Provider
        value={{
          lang: this.state.lang,
          toggleLang: this.toggleLang,
          setLangBr: this.setLangBr,
          setLangEn: this.setLangEn,
        }}
      >
        {this.props.children}
      </MainContext.Provider>
    );
  }
}
const Consumer = MainContext.Consumer;

export default Provider;
export { Provider, Consumer };
