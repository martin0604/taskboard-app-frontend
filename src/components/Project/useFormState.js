import {useState} from "react";

const useFormState = () => {
    const [state, setState] = useState({
        name: '',
        description: ''
    });

    const handleState = (field, value) => {
        setState({
            ...state,
            [field]: value
        });
    };

    return {state, handleState};
};

export default useFormState;