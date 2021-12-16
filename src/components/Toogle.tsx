import { useState } from "react"

export function Toogle() {
  const [theme, setTheme] = useState(1);

  function handleChangeTheme() {
    setTheme(oldState => {
      if (oldState === 3) {
        return 1;
      } else {
        return oldState + 1;
      }
    })
  }

  return (
    <div className="w-20 flex flex-col self-start gap-1">
      <div className="flex justify-evenly">
        <button className="text-sm" onClick={() => setTheme(1)}>1</button>
        <button className="text-sm" onClick={() => setTheme(2)}>2</button>
        <button className="text-sm" onClick={() => setTheme(3)}>3</button>
      </div>
      <button className="flex flex-col w-full h-6 bg-blue-500 rounded-2xl px-2 py-1" onClick={handleChangeTheme}>
        <div 
          className={`
            h-full 
            w-4 
            bg-red-500 
            rounded-2xl 
            ${theme === 1 ? 'self-start' : theme === 2 ? 'self-center': 'self-end'}`} />
      </button>
    </div>
  )
}