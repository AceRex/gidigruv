export function IsLoggedIn(value) {
    return {
        type: "IS-LOGGED-IN",
        payload: value
    }
}
export function IsNotLoggedIn(value) {
    return {
        type: "IS-NOT-LOGGED-IN",
        payload: value
    }
}
function userActionReducer(userAction, action) {
    switch(action.type) {
        case "IS-LOGGED-IN":
            return {
              userAction: true,
            }
        case "DECREMENT":
            return count - 1
        default:
            return count
    }
}



export default userActionReducer