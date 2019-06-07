
export default function (state = [], action) {
console.log(action);
    switch (action.type) {
        case "ADDTODO":
                return [
                    ...state,
                    {
                        text: action.payload,
                        completed: false
                    }
                  ]
        default:
            return state;
    }
}