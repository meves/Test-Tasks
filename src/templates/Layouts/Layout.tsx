import { FC, ReactNode } from "react"
import { Header } from "../../modules/Header"
import { Footer } from "../../modules/Footer"

type LayoutProps = {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
     <Header/>
     { children }
     <Footer/> 
    </>
  )
}