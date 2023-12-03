import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

import { useStore } from "../../store/context";

import { Card } from "../../components/Card";
import { Context } from "../../components/Context";

export const ContextModalModule = () => {
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
          <Context/>
        </Modal.Body>
      </Modal>

      <Card 
        open={open}
      />
    </>
  )
}