import { useTypeCharacter } from "../hooks/useTypeCharacter";

type KeyProps = 
  |  {
      children: string;
      type?: 'default' | 'word';
      color?: 'blue' | 'red';
    } 
  | {
      children: string;
      type: 'default' | 'word';
      color: 'blue' | 'red';
    }

export function Key({ children, type, color }: KeyProps) {
  const { typeCharacter } = useTypeCharacter(children);

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
        ${color === 'blue' ? 
          'bg-blue-200 border-b-blue-300 hover:bg-blue-300' : 
          color === 'red' ? 
          'bg-red-500 border-b-red-800 hover:bg-red-800' : 
          'bg-orange-100 border-b-orange-300 hover:bg-orange-300'
        }
      `}
      onClick={typeCharacter}
    >
      <span className={`self-center ${type === 'word' ? 'text-xl' : 'text-3xl text-blue-300'}`}>
        {children}
      </span>
    </button>
  )
}