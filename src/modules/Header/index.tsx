import { Auth } from "../../components/Auth"
import { Menu } from "../../components/Menu"

import styles from './index.module.scss'

export const Header = () => {
  return (
    <section className={styles.header}>
      Header
      <Menu/>
      <Auth/>
    </section>
  )
}