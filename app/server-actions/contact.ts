'use server';
import Mailgun from 'mailgun.js';
import FormDataNode from 'form-data';

type ActionState = | { ok: true } | { ok: false; error: string };

const mg = new Mailgun(FormDataNode).client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY!,
});

function env(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

export async function sendContact(_prev: ActionState | null, formData: FormData): Promise<ActionState> {
  try {
    const domain = env('MAILGUN_DOMAIN');
    const toEmail = env('CONTACT_EMAIL');

    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();
    const budget = String(formData.get('budget') ?? '').trim();
    const interested = formData.getAll('interested').map(String);

    if (!name) return { ok: false, error: 'Name is required.' };
    if (!email) return { ok: false, error: 'Email is required.' };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { ok: false, error: 'Invalid email format.' };
    }

    console.log(name, email, message, budget, interested);
    return {ok: true};

    await mg.messages.create(domain, {
      from: `Contact Form <mailgun@${domain}>`,
      to: [toEmail],
      subject: 'New contact form submission',
      text:
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        `Message:\n${message || '-'}\n\n` +
        `Interested in:\n${interested.length ? interested.join(', ') : '-'}\n\n` +
        `Budget:\n${budget || '-'}`,
    });

    return { ok: true };
  } catch (e) {
    console.error(e);
    return { ok: false, error: 'Server error. Please try again later.' };
  }
}