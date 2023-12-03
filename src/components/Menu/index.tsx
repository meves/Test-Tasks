import { FC, memo, useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import styles from './index.module.scss'

export const Menu = () => {
  return (
    <nav>
      <MenuList/>
    </nav>
  )
}

const MenuList = () => {
  const menuItems = useMemo(() => (['home', 'test']), [])

  return (
    <ul className={styles.list}>
      { menuItems.map(item => (
        <MenuItem key={uuidv4()} item={item}/>
      )) }
    </ul>
  )
}

type MenuItemProps = {
  item: string
}

const MenuItem: FC<MenuItemProps> = memo(({ item }) => {
  return (
    <li>
      <NavLink to={item !== 'home' ? `/${item}` : '/'}>
        {item}
      </NavLink>
    </li>
  )
})

MenuItem.displayName = "MenuItem"