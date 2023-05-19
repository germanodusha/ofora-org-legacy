import React from 'react'
import { getAcoes } from '../lib/backend'
import PageWrapper from '../components/struct/PageWrapper'
import ContentWrapper from '../components/struct/ContentWrapper'
import Title from '../components/Title'
import CategorySelector from '../components/CategorySelector'
import ImageGrid from '../components/ImageGrid'
import Link from '../components/MenuLink'
import { Consumer } from '../components/base/Context'

export default class pageAcoes extends React.Component {
  static async getInitialProps ({ req, query }) {
    const { documents, categories } = await getAcoes()
    const { initialCategory } = query
    return { documents, categories, initialCategory }
  }

  state = {
    selectedCategory: false
  }

  render () {
    const { documents, categories, initialCategory } = this.props
    const { selectedCategory } = this.state
    return <Consumer>
      {context => {
        const lang = context ? context.lang : 'br'
        return <PageWrapper style={{ background: '#DFDFDF' }} title="Ações & imaginações" description="O Fora é sobre possibilidades de viver a cidade e acontece por meio de pesquisas sociais, manifestações culturais e ações na paisagem urbana." cover='https://fora.cdn.prismic.io/fora/21c85cdcacb048a984d1150c855296cbda4b1095_fora-dobra-do-corpo-1-.jpg'>
          <ContentWrapper>
            <div className='filterLine'>
              <Title>{
                lang === 'br'
                  ? '/Ações & imaginações:'
                  : '/Acts & imaginations:'
              }</Title>
            </div>
            <div  className='filterLine' style={{marginBottom: 50}}>
              <CategorySelector
                categories={categories}
                selected={selectedCategory || initialCategory}
                onClick={this.handleCategorySelection}
              />
            </div>
            <ImageGrid items={documents} category={selectedCategory || initialCategory} />
          </ContentWrapper>
          <style jsx>{`
            .filterLine {
              justify-content: space-between;
              font-family: 'Source Serif Pro', serif;
              font-weight: 600;
              align-items: flex-start;
              font-size: 29px;
            }
            @media only screen and (min-width: 752px) {
              .filterLine {
                font-size: 41px;
                display: flex;
              }
            }
          `}</style>
        </PageWrapper>
      }}
    </Consumer>
  }

  handleCategorySelection = (category) => {
    this.setState({ selectedCategory: category })
  }
}
