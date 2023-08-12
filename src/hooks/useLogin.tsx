import {useFormik} from 'formik';
import * as Yup from 'yup'
import {formApi, FormValueTypes} from '../api';


const initialValues: FormValueTypes = {
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
        onSubmit: async (values) => await formApi.sendFormData(values)
    })

    return { formik }
}