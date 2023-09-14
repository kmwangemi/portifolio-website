import Header from "@/components/header/Header"
import { Container } from "./LayoutStyles"
import Footer from "@/components/footer/Footer"

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}
