import { useContext } from "react"
import CountContext from "../provider/context"

const IncrementButton = () => {
  const { onIncrement } = useContext(CountContext)

  return (
    <button onClick={onIncrement}>Increment</button>
  )
}

export default IncrementButton
