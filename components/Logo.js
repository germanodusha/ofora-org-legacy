import React from "react";

export default class Logo extends React.Component {
  render() {
    return (
      <a href="#" {...this.props}>
        <LogoSvg animation={this.props.animation} invert={this.props.invert} />
      </a>
    );
  }
}

class LogoSvg extends React.Component {
  render() {
    return (
      <svg viewBox="0 0 114 43" className={this.props.animation}>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html: `
          svg #logo-path {
            fill: ${this.props.invert ? "white" : "black"};
          }
          svg:hover #logo-path {
            fill: rgb(0,17,254) !important;
            animation: none;
            -webkit-animation: none;
            -moz-animation: none;
          }
          svg.pulse #logo-path {
            -webkit-animation-name: pulse;
            -webkit-animation-duration: .4s;
            -webkit-animation-iteration-count: infinite;
            -moz-animation: pulse .4s infinite;
            animation: pulse .4s infinite;
          }
          .fade #logo-path {
            -webkit-animation-name: fade;
            -webkit-animation-duration: 20s;
            -webkit-animation-iteration-count: infinite;
            -webkit-animation-timing-function: linear;
            -moz-animation: fade 20s linear infinite;
            animation: fade 20s linear infinite;
          }
          @keyframes pulse {
            0% {fill: initial;}
            20% {fill: initial;}
            60% {fill: rgb(0,17,254);}
            100% {fill: rgb(0,17,254);}
          }
          @keyframes fade {
            0% {opacity: 0;}
            35% {opacity: 1;}
            65% {opacity: 1;}
            100% {opacity: 0;}
          }
        `,
          }}
        />
        <path
          id="logo-path"
          d="M43.22 11.057c-8.955 0-15.786 7.481-15.786 15.61 0 8.186 6.83 15.667 15.786 15.667 8.952 0 15.725-7.481 15.725-15.668 0-8.128-6.773-15.609-15.725-15.609zm0 24.326c-4.654 0-8.307-3.593-8.307-8.717 0-5.066 3.653-8.717 8.307-8.717 4.652 0 8.186 3.651 8.186 8.717 0 5.124-3.534 8.717-8.186 8.717zM2.852 0H0v41.091h8.005V24.548h14.942v-6.937H8.005V7.47h18.144V0H2.852m85.735 11.74v6.938h8.581c-7.306 4.27-12.248 8.207-12.248 14.537 0 5.596 3.829 8.61 9.306 8.61 3.788 0 6.757-1.267 8.482-3.936h.287v3.202H111v-29.35H88.587zm8.05 24.41c-2.886 0-3.859-2.004-3.859-3.712 0-2.861 2.746-5.254 10.217-9.84v8.93c-1.6 2.958-3.703 4.621-6.358 4.621zm-23.85-21.741h.324V11.74h-8.005v29.351h8.005v-15.25c0-4.888 1.207-7.163 6.273-7.163h1.731v-7.62c-3.735 0-6.62 1.216-8.329 3.35"
        />
        <style jsx>{`
          svg {
            width: 76px;
            height: 29px;
            margin-bottom: -2px;
          }
          @media only screen and (min-width: 752px) {
            svg {
              width: 114px;
              height: 43px;
            }
          }
        `}</style>
      </svg>
    );
  }
}
