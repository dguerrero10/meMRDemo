export const isEmail = (value) => {
    return value.includes("@");
}

export const isNotEmpty = (value) => {
    return value.trim() !== "";
}

export const isEqualToOtherValue = (value, otherValue) => {
    return value === otherValue;
}