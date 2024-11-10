import CustomInput from "@/components/CustomInput.vue";
import { useForm } from "vee-validate";
import { defineComponent, onMounted, ref } from "vue";
import { useSobreMi } from "./useSobreMi";
import RedesSociales from "@/components/RedesSociales.vue";
import CustomTextArea from "@/components/CustomTextArea.vue";
import emailjs from '@emailjs/browser';

import * as yup from 'yup'
import { useToast } from 'vue-toastification';

const validationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
});


export default defineComponent({
    components: {
        CustomInput,
        RedesSociales,
        CustomTextArea
    },
    setup() {
        const toast = useToast();
        const { socialRed } = useSobreMi();
        const { defineField, errors, handleSubmit } = useForm({
            validationSchema
        });

        const [name, attrName] = defineField('name');
        const [email, attrEmail] = defineField('email');
        const [message, attrMessage] = defineField('message')

        const onSubmit = handleSubmit((values) => {
            const myForm = document.getElementById('myForm')
            const serviceID = "default_service"
            const templateID = "template_77u4lw6"

            emailjs.sendForm(serviceID, templateID, '#myForm', {
                publicKey: 'mAP-7ugaGHpvRFiPx'
            }).then(resp => {
                toast.success("Correo enviado con exito");
            }).catch((e) => {
                console.error(e)
                toast.error("Error al enviar correo")
            });

            // emailjs.sendForm(serviceID, templateID, this).then(
            //     () => {
            //         btn.value = "Send Email"
            //         alert("Sent!")
            //     },
            //     (err) => {
            //         btn.value = "Send Email"
            //         alert(JSON.stringify(err))
            //     },
            // )
        });

        return {
            name,
            email,
            message,
            attrName,
            attrEmail,
            attrMessage,
            socialRed,
            errors,
            onSubmit,

            CustomInput,
            RedesSociales,
            CustomTextArea
        }

    }


});