import React from 'react'
import Prismic from 'prismic-javascript'
import Head from '../components/struct/Head'
import LogoWithMenu from '../components/LogoWithMenu'
import SliderTunnel from '../components/SliderTunnel'
import { Consumer } from '../components/base/Context'

export default class Index extends React.Component {
  static async getInitialProps ({ req }) {
    const api = await Prismic.api('https://fora.prismic.io/api/v2')
    const homeDocument = await api.getSingle('home')
    const title = homeDocument.data.title[0].text
    const title_en = homeDocument.data.title_en[0].text
    const query = await api.query(Prismic.Predicates.any('document.type', ['article', 'pictures_and_video', 'story', 'post']))
    const documents = query.results
    return { title, title_en, documents }
  }

  componentDidMount() {
    document.getElementById('index-loader').style.opacity = '1';
  }

  render () {
    const { title, title_en, documents } = this.props
    return <Consumer>
      {context => {
        const lang = context ? context.lang : 'br'

        return <div id='index-loader' style={{opacity: 0}}>
          <LogoWithMenu animation='pulse' slogan={lang === 'br' ? title : title_en } startVisible={true} />
          <Head title="Fora" cover='https://fora.cdn.prismic.io/fora/21c85cdcacb048a984d1150c855296cbda4b1095_fora-dobra-do-corpo-1-.jpg' />
          <SliderTunnel documents={documents} />
        </div>
      }}
    </Consumer>
  }
}
