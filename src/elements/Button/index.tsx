import { FC } from "react"

type ButtonProps = {
  text: string
}

export const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <button>
      { text }
    </button>
  )
}