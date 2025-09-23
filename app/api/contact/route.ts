import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Configuração do transporte SMTP (Hostinger)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // smtp.hostinger.com
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: process.env.SMTP_SECURE === "true", // true se porta 465, false se 587
      auth: {
        user: process.env.SMTP_USER, // seu e-mail da Hostinger
        pass: process.env.SMTP_PASSWORD, // senha do e-mail
      },
    });

    // ======================
    // 1. E-mail para o ADMIN
    // ======================
    await transporter.sendMail({
      from: `"OZD Studio" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `📩 Nova mensagem de ${name}`,
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; border-radius: 12px; overflow: hidden; border: 1px solid #222; background: #0a0a0a; color: #eee;">
        <div style="background: linear-gradient(135deg, #ff00ff, #ff0080); padding: 25px; text-align: center;">
          <h1 style="margin: 0; font-size: 22px; font-weight: bold; color: #fff;">📩 Nova Mensagem</h1>
        </div>
        <div style="padding: 25px; font-size: 15px; line-height: 1.6;">
          <p><strong style="color:#ff00ff;">Nome:</strong> ${name}</p>
          <p><strong style="color:#3B0080;">Email:</strong> ${email}</p>
          <p><strong style="color:#ff0080;">Assunto:</strong> ${subject}</p>
          <p><strong style="color:#ffffff;">Mensagem:</strong></p>
          <div style="background:#111; padding:15px; border-radius:8px; margin-top:5px; color:#ccc;">
            ${message}
          </div>
        </div>
        <div style="background: #111; padding: 15px; text-align: center; font-size: 12px; color: #888;">
          Este e-mail foi enviado automaticamente através do formulário do site 
          <a href="https://ozdstudio.com.br" style="color:#00ffff; text-decoration: none;">ozdstudio.com.br</a>
        </div>
      </div>
      `,
    });

    // ======================
    // 2. E-mail para o USUÁRIO
    // ======================
    await transporter.sendMail({
  from: `"OZD Studio" <${process.env.SMTP_USER}>`,
  to: email, // <-- e-mail que o usuário digitou
  subject: "✅ Recebemos sua mensagem!",
  html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #0a0a0a; color: #eee; border-radius: 12px; overflow: hidden; border: 1px solid #222;">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #ff00ff, #ff0080); padding: 20px; text-align: center;">
      <h1 style="margin: 0; font-size: 22px; font-weight: bold; color: white;">
        Obrigado pelo contato, ${name}!
      </h1>
    </div>

    <!-- Corpo -->
    <div style="padding: 25px; font-size: 15px; line-height: 1.6;">
      <p>Recebemos sua mensagem e em breve nossa equipe entrará em contato com você.</p>
      <p><strong style="color:#ff00ff;">Resumo do que você enviou:</strong></p>
      <p><strong style="color:#ff0080;">Assunto:</strong> ${subject}</p>
      <p><strong style="color:#ffffff;">Mensagem:</strong></p>
      <div style="background:#111; padding:12px; border-radius:8px; margin-top:5px; color:#ccc;">
        ${message}
      </div>
    </div>

    <!-- Rodapé -->
    <div style="background: #111; padding: 15px; text-align: center; font-size: 12px; color: #888;">
      Este e-mail foi enviado automaticamente pelo site 
      <a href="https://ozdstudio.com.br" style="color:#00ffff; text-decoration: none;">ozdstudio.com.br</a>
    </div>
  </div>
  `,
});


    return NextResponse.json({ message: "Emails enviados com sucesso!" }, { status: 200 });

  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json({ message: "Erro ao enviar os emails" }, { status: 500 });
  }
}
