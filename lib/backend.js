import Prismic from 'prismic-javascript'

let api = false
let cache = {
  acoes: false
}

export async function getAcoes () {
  if (!api) api = await Prismic.api('https://fora.prismic.io/api/v2')
  const docQuery = await api.query(Prismic.Predicates.any('document.type', ['post']), { fetchLinks: ['author.name', 'category.name'], orderings : '[my.post.timestamp desc]', pageSize : 100 })
  const catQuery = await api.query(Prismic.Predicates.any('document.type', ['category']), { orderings : '[my.category.name]' })
  return { documents: docQuery.results, categories: catQuery.results }
}

export async function getCategories () {
  if (!api) api = await Prismic.api('https://fora.prismic.io/api/v2')
  const catQuery = await api.query(Prismic.Predicates.any('document.type', ['category']), { orderings : '[my.category.name]' })
  return { categories: catQuery.results }
}

export async function getTags () {
  if (!api) api = await Prismic.api('https://fora.prismic.io/api/v2')
  return { tags: api.tags }
}

export async function getAbout () {
  if (!api) api = await Prismic.api('https://fora.prismic.io/api/v2')
  const abouts = await api.query(Prismic.Predicates.any('document.type', ['about']), { lang: '*' })
  
  console.log({abouts})
  const locale = abouts.results.reduce((acumulator, about) => Object.assign({}, acumulator, { [about.uid]: about.data }), {})
  return locale
}

export async function getByTag (tag) {
  if (!api) api = await Prismic.api('https://fora.prismic.io/api/v2')
  const docQuery = await api.query([
    Prismic.Predicates.any('document.type', ['article', 'story', 'pictures_and_video', 'post']),
    Prismic.Predicates.at('document.tags', [tag])
  ], { fetchLinks: ['author.name', 'category.name'], pageSize : 100 })
  return { documents: docQuery.results }
}

export async function getAuthors () {
  if (!api) api = await Prismic.api('https://fora.prismic.io/api/v2')
  const authorsQuery = await api.query(Prismic.Predicates.any('document.type', ['author']))
  return { authors: authorsQuery.results }
}

export async function getByAuthor (author) {
  if (!api) api = await Prismic.api('https://fora.prismic.io/api/v2')
  const docAuthorQuery = await api.getByID(author)
  const docQuery1 = await api.query([
    Prismic.Predicates.at('document.type', 'article'),
    Prismic.Predicates.at('my.article.author', author)
  ], { fetchLinks: ['author.name', 'category.name'] })
  const docQuery2 = await api.query([
    Prismic.Predicates.at('document.type', 'story'),
    Prismic.Predicates.at('my.story.author', author)
  ], { fetchLinks: ['author.name', 'category.name'] })
  const docQuery3 = await api.query([
    Prismic.Predicates.at('document.type', 'pictures_and_video'),
    Prismic.Predicates.at('my.pictures_and_video.author', author)
  ], { fetchLinks: ['author.name', 'category.name'], pageSize : 100 })
  return {
    documents: [...docQuery1.results, ...docQuery2.results, ...docQuery3.results],
    author: docAuthorQuery
  }
}
