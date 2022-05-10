import { useContext } from "react"
import CountContext from "../provider/context"

const DecrementButton = () => {
  const { onDecrement } = useContext(CountContext)

  return (
    <button onClick={onDecrement}>Decrement</button>
  )
}

export default DecrementButton
