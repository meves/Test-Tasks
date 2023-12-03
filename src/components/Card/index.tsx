import { FC, MouseEvent, useCallback } from "react"
import styled from "styled-components"

import { useStore } from "../../store/context"

const CardWrapper = styled.div`
  width: 250px;
  height: 100px;
  background-color: greenyellow;
`

type CardProps = {
  open: () => void
}

export const Card: FC<CardProps> = ({ open }) => {
  const { setCoords } = useStore().positionStore

  const handleOnContextMenu = useCallback((event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault()    
    const { clientX, clientY } = event
    setCoords({ posX: clientX, posY: clientY })
    
    open()

    console.log(event);
    
  }, [open, setCoords])

  return (
    <CardWrapper
      onContextMenu={handleOnContextMenu}
    />
  )
}