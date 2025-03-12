import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email } = body;

    // Create a transporter object using the SMTP service
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to be sent to you
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVING_EMAIL,
      subject: 'New Form Submission',
      text: `You have a new form submission:\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}`,
    };

    // Email to be sent to the user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Form Submission Confirmation',
      text: `Hello ${firstName},\n\nThank you for your contacting me. I have received your information and will get back to you shortly.\n\nBest regards,\nOfa Patrick`,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
