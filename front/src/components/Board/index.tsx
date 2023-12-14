import React, { useState } from 'react'
import { Column, ColumnBody, ColumnHeader, Container } from './style'
import Card from '../Card'

type Props = {}

const Board = (props: Props) => {
	const [a , setA] = useState('')
	return (
		<Container>
			<Column>
				<ColumnHeader>To do</ColumnHeader>
				<ColumnBody>
					<Card title='sjqwe qw qwe qweqweqw qwe qwe qwe qwe qwe djk' description={a} />
					<Card title='uasjdjk' description={a} />
					<Card title='uasjdjk' description={a} />
				</ColumnBody>
			</Column>
			<Column>
				<ColumnHeader>Doing</ColumnHeader>
				<ColumnBody>
					<textarea onChange={(e) => setA(e.currentTarget.value)} />
				</ColumnBody>
			</Column>
			<Column>
				<ColumnHeader>To do</ColumnHeader>
			</Column>
		</Container>
  )
}

export default Board
