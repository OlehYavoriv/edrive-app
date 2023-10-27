import React from "react";

export interface IUseValidationReturn {
    isEmpty: boolean,
    minLengthError: boolean,
    maxLengthError: boolean,
    emailError: boolean,
    inputValid: boolean
}

export interface IValidations {
    minLength: number,
    maxLength?: number,
    isEmail?: boolean,
    isEmpty: boolean
}

export enum VALIDATION_KEYS {
    MIN_LENGTH = 'minLength',
    MAX_LENGTH = 'minLength',
    IS_EMPTY = 'isEmpty',
    IS_EMAIL = 'isEmail'
}

export interface IUseInputReturn extends IUseValidationReturn {
    isDirty: boolean,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void
}
