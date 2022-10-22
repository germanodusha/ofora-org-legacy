import React, { Component } from "react";

const MainContext = React.createContext();

const initialState = {
  lang: "br",
};

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    if (typeof window !== 'undefined') {
      const lang = window.localStorage.getItem("lang")
      if (lang) {
        this.state = { lang }
      }
    }
  }


  setLangBr = () => {
    this.setState({ lang: "br" });
    if (typeof window !== 'undefined') {
      window.localStorage.setItem("lang", "br")
    }
  };
  setLangEn = () => {
    this.setState({ lang: "en" });
    if (typeof window !== 'undefined') {
      window.localStorage.setItem("lang", "en")
    }
  };


  toggleLang = () =>
    this.state.lang === "br" ? this.setLangEn() : this.setLangBr()

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
