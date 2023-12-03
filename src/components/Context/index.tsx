import styled from "styled-components"

import { Coords } from "../../store/types"
import { useStore } from "../../store/context"

const ContentWrapper = styled.div<{coords: Coords}>`
  background-color: orange;
`

export const Context = () => {
  const { coords } = useStore().positionStore

  return (
    <ContentWrapper coords={coords}>
      <p>My ccordinates: x: {coords.posX}; y: {coords.posY}</p>
    </ContentWrapper>
  )
}
