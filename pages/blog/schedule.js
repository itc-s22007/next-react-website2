import Container from 'components/container'
import { getPostBySlug } from 'lib/api'
import PostHeader from 'components/post-header'

export default function schedule ({
  title,
  publish,
  content,
  eyecath,
  categories
}) {
  return (
    <Container>
      <article>
        <PostHeader title={title} subtitle='Blog Article' publish={publish} />
      </article>
    </Container>
  )
}

export async function getStaticProps () {
  const slug = 'schedule'

  const post = await getPostBySlug(slug)

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories
    }
  }
}
