import { validate } from 'rut.js'

export const isValidField = (TypeField: any, MaxLength: number, MinLength: number, Value: string) => {
    var isValidValue = false

    if (TypeField == "rut") {
        isValidValue = (Value.length >= MinLength) && (Value.length <= MaxLength) && validate(Value)
        console.log("Is Vaild? ", isValidValue)
    }

    if (TypeField == "string") {
        isValidValue = (Value.length >= MinLength) && (Value.length <= MaxLength) && (typeof Value === 'string')
        console.log("Is Vaild? ", isValidValue)
    }

    if (TypeField == "number") {
        isValidValue = (parseInt(Value) > 1) && (typeof Value === 'number')
        console.log("Is Vaild? ", isValidValue)
    }

    if (TypeField == "email") {
        isValidValue = (Value.length >= MinLength) && (Value.length <= MaxLength) && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Value))
        console.log("Is Vaild? ", isValidValue)
    }

    return isValidValue
}

export const isNumber = (value: any) => typeof value === 'number' && isFinite(value)

export const strArray = (values: string[], sep: string = ', ') => values.reduce((acum, current) => acum.concat(acum != '' ? sep : '').concat(current), '')
