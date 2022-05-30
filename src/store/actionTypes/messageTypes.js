const GET_MESSAGE = 'GET_MESSAGE'
const SEND_MESSAGE = 'SEND_MESSAGE'

function ACTION_GET_MESSAGE(id) {
    return {
        type: GET_MESSAGE,
        id: id
    }
}

function ACTION_SEND_MESSAGE(id, text) {
    return {
        type: SEND_MESSAGE,
        id: id,
        text: text
    }
}

export {ACTION_GET_MESSAGE, ACTION_SEND_MESSAGE, GET_MESSAGE, SEND_MESSAGE}