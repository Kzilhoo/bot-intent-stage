import { stage } from './stage'

export const logic = ($message) => {
    return new Promise((resolve, reject) => {
        const response = stage[Math.floor(Math.random() * stage.length)];
    const newMessage = Object.assign($message.message, { content: response })
    const newIntentMessage = Object.assign($message, { message: newMessage })
    resolve(newIntentMessage)
    })
}


