import { Display } from "../components/Display"
import { Header } from "../components/Header"
import { Keypad } from "../components/Keypad"

export default function Home() {
  return (
    <div>
      <div className="max-w-xl h-screen flex flex-col py-8 px-16 gap-8 m-auto">
        <Header />
        <main className="flex flex-col gap-8">
          <Display />
          <Keypad />
        </main>
      </div>
    </div>
  )
}