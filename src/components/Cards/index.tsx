import { FC } from "react"
import { v4 as uuidv4 } from 'uuid'

import styles from './index.module.scss'
import { Card } from "./Card"

type CardsProps = {
  open: () => void
}

export const Cards: FC<CardsProps> = ({ open }) => {
  const cells = []
  for (let i = 0; i < 12; i++) {
    cells.push(i)
  }

  return (
    <section className={styles.cards}>
      { cells.map(() => (
        <Card key={uuidv4()} open={open}/>
      )) }
    </section>
  )
}