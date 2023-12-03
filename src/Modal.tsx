import { FC, MouseEvent, useCallback } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

import { useStore } from "./store/context";
import { Coords } from "./store/types";

import styled from "styled-components";

export const MyModal = () => {
  const [opened, { open, close }] = useDisclosure(false)

  const { coords: { posX, posY } } = useStore().positionStore
  
  return (
    <>
      <Modal 
        opened={opened} 
        onClose={close} 
        withCloseButton={false}
        onContextMenu={e => e.preventDefault()}
        size="0"
        pos={"relative"}
        transitionProps={{ transition: 'fade', duration: 200 }}
        overlayProps={{
          opacity: 0
        }}
        xOffset={posX}
        yOffset={posY}
      >
        <Modal.Body 
          pos={"absolute"} 
          style={{
            top: posY, 
            left: posX, 
            backgroundColor: "beige",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "grey", 
            borderRadius: 5,
            padding: 10 
          }}>
          <Content/>
        </Modal.Body>
      </Modal>

      <Card 
        open={open}
      />
    </>
  )
}

// Card
const CardWrapper = styled.div`
  width: 250px;
  height: 100px;
  background-color: greenyellow;
`

type CardProps = {
  open: () => void
}

const Card: FC<CardProps> = ({ open }) => {
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

// Content
const ContentWrapper = styled.div<{coords: Coords}>`
  background-color: orange;
`

const Content = () => {
  const { coords } = useStore().positionStore

  return (
    <ContentWrapper coords={coords}>
      <p>My ccordinates: x: {coords.posX}; y: {coords.posY}</p>
    </ContentWrapper>
  )
}