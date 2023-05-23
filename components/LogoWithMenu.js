import React from 'react'
import Router from 'next/router'
import Menu from './Menu'
import Logo from './Logo'
import { withRouter } from 'next/router'
import ResearchBanner from './ResearchBanner'

class LogoWithMenu extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      menuVisible: props.startVisible || false
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ menuVisible: false })
  }

  render () {
    const { menuVisible } = this.state
    const { slogan, animation, invert } = this.props
    const logoProps = {
      animation: menuVisible ? false : animation ? animation : 'fade',
      invert: menuVisible ? false : invert
    }
    return (
      <div>
        <div className='root'>
          <Logo {...logoProps} onClick={this.handleLogoClick} />
          {!menuVisible && <span style={textStyle}>{slogan}</span>}
        </div>
        <Menu visible={menuVisible} onBgClick={this.toggleMenu} />
        {/* <ResearchBanner /> */}
        <style jsx>{`
          .root {
            position: fixed;
            z-index: 15;
            top: 20px;
            left: 20px;
            right: 20px;
            max-width: 770px;
            font-size: 29px;
          }
          @media only screen and (min-width: 752px) {
            .root {
              top: 18px;
              left: 29px;
              right: auto;
              font-size: 41px;
            }
          }
        `}</style>
      </div>
    )
  }

  handleLogoClick = (e) => {
    if (Router.pathname !== '/') {
      return Router.push('/')
    } else {
      return Router.push('https://ofora.org/')
    }
  }
  toggleMenu = () => this.setState({ menuVisible: !this.state.menuVisible })
}

const textStyle = {
  fontFamily: "'Source Serif Pro', serif",
  fontWeight: 600,
  padding: 10
}

export default withRouter(LogoWithMenu)
