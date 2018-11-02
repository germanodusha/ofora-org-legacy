import React from 'react'
import Prismic from 'prismic-javascript'
import Head from '~/components/struct/Head'
import LogoWithMenu from '~/components/LogoWithMenu'
import SliderTunnel from '~/components/SliderTunnel'

export default class Index extends React.Component {
  static async getInitialProps ({ req }) {
    const api = await Prismic.api('https://fora.prismic.io/api/v2')
    const homeDocument = await api.getSingle('home')
    const title = homeDocument.data.title[0].text
    const query = await api.query(Prismic.Predicates.any('document.type', ['article', 'pictures_and_video', 'story', 'post']))
    const documents = query.results
    return { title, documents }
  }

  componentDidMount() {
    document.getElementById('index-loader').style.opacity = '1';
  }

  render () {
    const { title, documents } = this.props
    return (
      <div id='index-loader' style={{opacity: 0}}>
        <LogoWithMenu animation='pulse' slogan={title} />
        <Head title="Fora" description="O Fora é sobre possibilidades de viver a cidade e acontece por meio de pesquisas sociais, manifestações culturais e ações na paisagem urbana." cover='https://fora.cdn.prismic.io/fora/21c85cdcacb048a984d1150c855296cbda4b1095_fora-dobra-do-corpo-1-.jpg'/>
        <SliderTunnel documents={documents} />
      </div>
    )
  }
}
