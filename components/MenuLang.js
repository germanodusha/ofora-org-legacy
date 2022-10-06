import React from 'react'
import { Consumer } from './base/Context'
import MenuLink from './MenuLink'

const MenuLang = () =>
  <Consumer>
    {context => {
      return <div className='menu-lang'>
        <MenuLink
          onClick={context && context.setLangBr}
          href={{ pathname: '' }}
        >
          Pt
        </MenuLink>{' - '}
        <MenuLink
          onClick={context && context.setLangEn}
          href={{ pathname: '' }}
        >
          En
        </MenuLink>
        <style jsx>{`
          .menu-lang {
            position: absolute;
            font-weight: 600;
            font-size: 29px;
            top: 15px;
            right: 30px;
            font-family: 'Source Serif Pro', serif;
          }
          @media only screen and (min-width: 752px) {
            .menu-lang {
              font-size: 41px;
            }
          }
        `}</style>
      </div>
    }}
  </Consumer>

export default MenuLang
