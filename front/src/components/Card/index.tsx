import Markdown from 'react-markdown'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import { Container, Description, DescriptionEmpty, Footer, Header } from './style'
import remarkGfm from 'remark-gfm'
import { FaChevronLeft, FaChevronRight, FaCommentSlash, FaEdit, FaPen, FaSlackHash, FaSlash, FaTextHeight, FaTrash } from 'react-icons/fa'
import Button from '../Button'

type Props = {
    title?: string,
    description?: string
}

const Card = ({title, description}: Props) => {
  return (
    <Container>
        <Header>
          {title}
          <Button icon={<FaPen />} position='only' size='sm' color='secondary' />

        </Header>
          <Description>
          {
            description ?
              <Markdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
                  {description}
              </Markdown>
            :
              <DescriptionEmpty>
                <FaCommentSlash size={40} color='#e8ecef'/>
              </DescriptionEmpty>
          }
          </Description>
        <Footer>

          <FaChevronLeft color='#0c0c0c' size={16} />
          <FaTrash color='#dc3848' size={16} />
          <FaChevronRight color='#0c0c0c' size={16} />
        </Footer>
    </Container>
  )
}

export default Card
