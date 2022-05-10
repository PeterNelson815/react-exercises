import { useContext } from 'react'
import CountContext from "../provider/context"


const CounterDisplay = () => {
  const { count } = useContext(CountContext)
  return (
    <>{count}</>
  )
}

export default CounterDisplay
