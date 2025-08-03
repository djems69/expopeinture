import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { name, email, message } = formData;

    // Validate incoming data (optional but recommended)
    if (!email || !message || !name) {
      return NextResponse.json({ message: 'Missing required fields.' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['tanyaartiste@gmail.com'],
      replyTo: email,
      subject: `Message from ${name} (Contact Form)`,
      html: `<p><strong>Nom:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    if (error) {
      console.error('Error sending email via Resend:', error);
      return NextResponse.json({ message: 'Une erreur est survenue lors de l\'envoi du message.' }, { status: 500 });
    }

    console.log('Email sent successfully via Resend!', data);

    return NextResponse.json({ message: 'Votre message a été envoyé avec succès !' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json({ message: 'Une erreur est survenue lors de l\'envoi du message.' }, { status: 500 });
  }
} 