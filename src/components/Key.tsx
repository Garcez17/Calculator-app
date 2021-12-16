import { ReactNode } from "react"

type KeyProps = 
  |  {
      children: ReactNode;
      type?: 'default' | 'word';
      color?: 'blue' | 'red';
    } 
  | {
      children: ReactNode;
      type: 'default' | 'word';
      color: 'blue' | 'red';
    }

export function Key({ children, type, color }: KeyProps) {
  return (
    <button 
      className={`
        flex
        flex-1
        items-center 
        justify-center 
        h-16 
        rounded-lg 
        border-b-4
        ${color === 'blue' ? 'bg-blue-200 border-b-blue-300' : color === 'red' ? 'bg-red-500 border-b-red-800' : 'bg-orange-100 border-b-orange-300'}
      `}
    >
      <span className={`self-center ${type === 'word' ? 'text-xl' : 'text-3xl text-blue-300'}`}>
        {children}
      </span>
    </button>
  )
}