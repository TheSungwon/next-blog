import '@/styles/globals.css'
import Format from "../layout/format"
import Faker from 'faker'

export default function App({ Component, pageProps }) {
  console.log(Component)
  console.log(pageProps)
  return (
  <Format>
    <Component {...pageProps} faker={Faker}/>
  </Format>

  )
}
