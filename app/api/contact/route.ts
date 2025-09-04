import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        // reply_to: email,
        const { name, message } = await req.json();

        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "jidanjiyaj03@gmail.com",
            subject: `New message from ${name}`,
            text: message,
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
