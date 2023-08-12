import {commonApi} from './common.api';

export const formApi = {
    sendFormData(data: FormValueTypes) {
        return commonApi.post("sendMessage", data)
    },
}

export type FormValueTypes = {
    name: string
    email: string
    message: string
}