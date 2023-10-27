import React, { useState } from "react";
import useValidation from "./useValidation";
import { IUseInputReturn, IValidations } from "./model";

const useInput = (initialValue: string, validations: IValidations): IUseInputReturn => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsDirty(true);
    };

    return {value, onChange, onBlur, isDirty, ...valid,};
};

export default useInput;
