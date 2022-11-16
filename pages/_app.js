import '../styles/globals.css'
import dynamic from 'next/dynamic'



const PangolinProvider = dynamic(
  () => import('@pangolindex/components').then((module) => module.PangolinProvider),
  { ssr: false },
) 



function MyApp({ Component, pageProps }) {
  return (
    <PangolinProvider
      library={undefined}
      chainId={43114}
      account="0xFe139eA54b6a025314a813338d909F9B63fF71A9"
      theme={{
        button: {
          primary: {
            background: '#435557',
            color: '#fff'
          }
        },
        drawer: {
          backgroundColor: '#88a4b3',
          text: '#fff'
        },
        numberOptions: {
          activeBackgroundColor: '#5f7d68',
          activeTextColor: '#fff',
          borderColor: '#88b394',
          inactiveBackgroundColor: '#88b394',
          text: '#fff'
        },
        swapWidget: {
          backgroundColor: '#88a4b3',
          detailsBackground: '#5f737d',
          interactiveBgColor: '#5f737d',
          interactiveColor: '#e0f4ff',
          primary: '#fff',
          secondary: '#f0faff'
        },
        textInput: {
          labelText: '#f0faff'
        }
      }}
    >
      <Component {...pageProps} />
    </PangolinProvider>
  )
}

export default MyApp
