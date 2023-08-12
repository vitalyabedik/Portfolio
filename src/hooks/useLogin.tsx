import React from "react"
import axios from 'axios';
import {useFormik} from 'formik';
import * as Yup from 'yup'

type InitialValueType = {
    name: string
    email: string
    message: string
}

const initialValues: InitialValueType = {
    name: '',
    email: '',
    message: ''
};

export const useLogin = () => {
    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Required"),
            password: Yup.string().min(3, "Password must be 3 characters or more").required("Required"),
        }),
        onSubmit: async (values) => {
            await axios.post('https://contact-form-backend.vercel.app/send-message', values)
        },
    })

    return { formik }
}