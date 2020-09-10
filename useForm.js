import { useState } from "react"

export const useForm = ( initialState = {} ) => {

    // 1. Create the states
    const [values, setValues] = useState( initialState );

    // 2. Create any methods we need for modifying the state
    const reset = () => {
        setValues( initialState );
    }

    // Crea un nuevo objeto con la copia del objeto anterior
    // sobreescribiendo el key-value: [target.name]: target.value 
    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    // 3. Return whatever we want another component to have access
    return [ values, handleInputChange, reset ];
}
