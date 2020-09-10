import { useState } from "react"

// useHooks are simpler functions
export const useCounter = ( initialCounter = 10 ) => {
    const [counter, setCounter] = useState( initialCounter )    

    const increment = ( factor = 1 ) => {
        setCounter( counter + 1 )
    }

    const decrement = ( factor = 1 ) => {
        setCounter( counter - 1 )
    }

    // const increment = ( factor = 1 ) => {
    //     setCounter( counter + factor )
    // }

    // const decrement = ( factor = 1 ) => {
    //     setCounter( counter - factor )
    // }

    const reset = () => {
        setCounter( initialCounter )
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}



