import { Toogle } from "./Toogle";

export function Header() {
  return (
    <header className="flex h-12 w-full justify-between">
      <h1>calc</h1>

      <div className="flex items-end gap-8">
        <span className="text-sm">THEME</span>
        <Toogle />
      </div>
    </header>
  )
}