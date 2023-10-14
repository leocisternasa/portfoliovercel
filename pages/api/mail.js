import { EmailTemplate } from "../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend("re_QuKVzsgv_Eh97RcuAJgATe9GbbzJX5WPk");

export default async (req, res) => {
  try {
    const info = JSON.parse(req.body);
    const data = await resend.emails.send({
      from: info.from,
      to: info.to,
      subject: info.subject,
      react: EmailTemplate({
        name: info.emailProps.name,
        email: info.emailProps.email,
        phone: info.emailProps.phone,
        asunto: info.emailProps.asunto,
        message: info.emailProps.message,
      }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
