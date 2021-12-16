import { useCalc } from "../hooks/useCalc"

export function Display() {
  const { number1, number2, operator, total } = useCalc();

  return (
    <section className="h-24 bg-blue-800 rounded-xl p-6 flex justify-end gap-2">
      {total ? <span className="text-4xl">{total}</span> : (
        <>
          <span className="text-4xl">{number1 ?? 0}</span>
          {operator && <span className="text-4xl">{operator}</span>}
          {number2 && <span className="text-4xl">{number2}</span>}
        </>
      )}
    </section>
  )
}