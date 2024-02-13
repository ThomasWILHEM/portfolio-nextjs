import type { NextApiRequest, NextApiResponse } from 'next'
import {EmailTemplate} from "@/components/email/contact-form";
import {Resend} from "resend";

type ResponseData = {
    message: string
}

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const message = req.body.message;

    const { data, error } = await resend.emails.send({
        from: 'Contact <onboarding@resend.dev>',
        to: 'thomaswilhempro@outlook.fr',
        subject: `${firstname} ${lastname} sent you a message`,
        react: EmailTemplate({ firstname, lastname, email, message })
    });

    if (error) {
        return res.status(400).json(error);
    }

    // @ts-ignore
    return res.status(200).json(data);
}