import { useEffect, useState } from "react";
import { IUseValidationReturn, IValidations, VALIDATION_KEYS } from "./model";

const useValidation = (value: string, validations: IValidations): IUseValidationReturn => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [inputValid, setInputValid] = useState(false);
    const [emailError, setEmailError] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case  VALIDATION_KEYS.MIN_LENGTH :
                    value.length < validations[validation]
                        ? setMinLengthError(true)
                        : setMinLengthError(false);
                    break;
                case  VALIDATION_KEYS.MAX_LENGTH :
                    value.length > validations[validation]
                        ? setMaxLengthError(true)
                        : setMaxLengthError(false);
                    break;
                case VALIDATION_KEYS.IS_EMPTY:
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    break;
                case VALIDATION_KEYS.IS_EMAIL:
                    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    break;
            }
        }
    }, [value, validations]);

    useEffect(() => {
        if (isEmpty || minLengthError || maxLengthError || emailError) {
            setInputValid(false);
        } else {
            setInputValid(true);
        }
    }, [isEmpty, minLengthError, maxLengthError, emailError]);

    return {isEmpty, minLengthError, maxLengthError, emailError, inputValid};
};

export default useValidation;
