import { useDispatch, useSelector } from "react-redux"
import Counter from "../Counter"
import { DECREMENT_ACTION, incrementAction } from "../../redux/actions/fnActions"

const CounterFn = () => {
    const state = useSelector((state) => state.fnCounter)
    const dispatch = useDispatch()

    const increment = (number) => {
        dispatch(incrementAction(number))
    }

    const decrement = () => {
        dispatch(DECREMENT_ACTION)
    }

    return (
        <Counter
            title={state.title}
            count={state.counter}
            increment={increment}
            decrement={decrement}
        />
    )
}

export default CounterFn