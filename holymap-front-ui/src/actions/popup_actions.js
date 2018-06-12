export function setContent(id) {
    return{
        type: "FILL",
        id
    }
}

export function clearPopup() {
    return{
        type: "CLEAR"
    }
}