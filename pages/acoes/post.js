import React from 'react'
import Prismic from 'prismic-javascript'
import PageWrapper from '../../components/struct/PageWrapper'
import ContentWrapper from '../../components/struct/ContentWrapper'
import Cover from '../../components/Cover'
import CoverMobile from '../../components/CoverMobile'
import AuthorTeaser from '../../components/AuthorTeaser'
import Sidebars from '../../components/Sidebars'
import P from '../../components/base/Paragraph'
import RelatedContentWrapper from '../../components/RelatedContentWrapper'
import SiteMap from '../../components/SiteMap'
import Quote from '../../components/base/Quote'
import NotedParagraph from '../../components/base/NotedParagraph'
import ImageGalery from '../../components/base/ImageGalery'
import Video from '../../components/base/Video'
import { RichText } from 'prismic-reactjs'

export default class Index extends React.Component {
  static async getInitialProps ({ query }) {
    const api = await Prismic.api('https://fora.prismic.io/api/v2')
    const doc = await api.getByUID('post', query.id, { fetchLinks: ['author.name', 'author.bio', 'author.photo', 'category.name', 'category.description'] })
    const related = await api.getByIDs(doc.data.related.map(item => item.related_item.id), { fetchLinks: ['author.name', 'category.name'] })
    return { doc, related: related.results }
  }

  render () {
    const { doc, related } = this.props
    const { author, photos, category, videos, body, theme, teaser } = doc.data
    const coverPhoto = photos.length ? photos[0].photo.url : videos[0].video.thumbnail_url
    const bgcolor = theme === 'Escuro' ? 'black' : '#dfdfdf'
    const textColor = theme === 'Escuro' ? 'white' : 'black'

    return (
      <PageWrapper
        invert={theme === 'Escuro'}
        title={doc.data.title[0].text}
        cover={coverPhoto}
        description={teaser.length ? RichText.asText(teaser) : RichText.asText(body[0].primary.text)}
        style={{background: '#dfdfdf'}}
      >
        <div style={{background: bgcolor, color: textColor}}>
          <div className='desktop-only'><Cover {...this.props} /></div>
          <div className='mobile-only'><CoverMobile {...this.props} /></div>

          <ContentWrapper style={{ paddingBottom: '1px', position: 'relative', ...invertStyle }}>
            <Sidebars doc={doc} />
              {teaser.length ? <div className='teaser'>{RichText.render(teaser)}</div> : null}
              {renderBody(body)}
            <AuthorTeaser author={author} style={{ marginTop: 80, paddingLeft: 0 }} />
          </ContentWrapper>
        </div>
        <RelatedContentWrapper related={related} />
        <ContentWrapper style={{background: '#dfdfdf'}}>
        </ContentWrapper>
        <iframe id="download" style={{ display: 'none' }}></iframe>
        <style jsx>{`
          .teaser {
            font-size: 24px;
            font-weight: 600;
            max-width: 700px;
            margin-bottom: 0.5em;
            font-family: 'Source Serif Pro', serif;
          }
          @media only screen and (max-width: 752px) {
            div.desktop-only { display: none; }
          }
          @media only screen and (min-width: 752px) {
            div.mobile-only { display: none; }
            .teaser {
              padding: 0 200px 0 100px;
              margin: -1em auto 1.5em;
            }
          }
        `}</style>
      </PageWrapper>
    )
  }
}

const invertStyle = {
  fontFamily: "'Source Sans Pro', sans-serif",
  minHeight: 800
}

const bodyStyle = {

}


const renderBody = (body) => {
  return body.map((slice) => {
    if (slice.slice_type === 'text') {
      return <P style={{bodyStyle, marginTop: '-1em'}} key={slice.slice_type + Date.now()} >{slice.primary.text}</P>
    }
    if (slice.slice_type === 'quote') {
      return <Quote {...slice.primary} key={slice.slice_type + Date.now()} />
    }
    if (slice.slice_type === 'texto_e_nota') {
      return <NotedParagraph style={bodyStyle} {...slice.primary} key={slice.slice_type + Date.now()} />
    }
    if (slice.slice_type === 'galeria') {
      return <P style={{margin: '0 auto'}} key={slice.slice_type + Date.now()} ><ImageGalery media={{photos: slice.items, videos: []}} /></P>
    }
    if (slice.slice_type === 'foto') {
      return <P style={{margin: '0 auto'}} key={slice.slice_type + Date.now()} ><ImageGalery single media={{photos: [slice.primary], videos: []}} /></P>
    }
    if (slice.slice_type === 'video') {
      return <P style={{margin: '0 auto 2em'}} key={slice.slice_type + Date.now()}><Video {...slice.primary.video} /></P>
    }
  })
}
