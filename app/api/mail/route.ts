import { render } from "@react-email/render";
import EmailTemplate from "@/emails";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
  const { email, name, message } = await req.json();

  const { data, error } = await resend.emails.send({
    from: email,
    to: "fahminurk31@gmail.com",
    subject: "Hello",
    html: render(EmailTemplate({ name, email, message })),
  });

  if (error) return Response.json(error);

  return Response.json({ message: "Email sent successfully" });
}
