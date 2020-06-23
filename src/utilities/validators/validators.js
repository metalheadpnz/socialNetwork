export const required = (value) => {
    // console.log('req_val')
    if (!value) {
        return ("required");
    }
    return undefined;
}

export const maxLengthCreator = (max) => {
    return (
        (value) => {
            // console.log('length')
            if (value.length > max) {
                return (`max length is ${max} symbols`)
            }
            return undefined
        }
    )
}