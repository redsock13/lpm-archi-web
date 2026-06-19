import { NextRequest, NextResponse } from "next/server";

/**
 * API Route — Envoi du formulaire de contact LPM
 *
 * Utilise Resend (https://resend.com) pour envoyer les emails.
 *
 * SETUP :
 *   1. npm install resend
 *   2. Créer un compte sur https://resend.com (gratuit jusqu'à 3 000 emails/mois)
 *   3. Vérifier le domaine lpmoe.com dans le dashboard Resend
 *   4. Créer une clé API dans Settings → API Keys
 *   5. Ajouter dans .env.local :
 *        RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
 *   6. Redémarrer le serveur : npm run dev
 */

const RECIPIENT = "contact@lpmoe.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, phone, email, city, budget, message } = body;

    // Validation basique côté serveur
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Champs requis manquants." },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;

    if (!resendKey) {
      // Mode dev sans clé : log la soumission dans la console
      console.log("=== NOUVEAU MESSAGE CONTACT LPM ===");
      console.log({ firstName, lastName, phone, email, city, budget, message });
      console.log("(RESEND_API_KEY non configurée — email non envoyé)");
      return NextResponse.json({ success: true, dev: true });
    }

    // Envoi via Resend — nécessite : npm install resend
    // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any
    const { Resend } = require("resend") as { Resend: new (key: string) => any };
    const resend = new Resend(resendKey);

    const html = `
      <div style="font-family: 'Helvetica Neue', sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #F5F0E8; padding: 40px;">
        <h1 style="color: #D4AF37; font-size: 22px; margin-bottom: 8px; font-weight: 600;">
          Nouveau projet — LPM
        </h1>
        <p style="color: #8A8A8A; font-size: 12px; margin-bottom: 32px; letter-spacing: 0.1em; text-transform: uppercase;">
          Formulaire de contact site web
        </p>

        <table style="width: 100%; border-collapse: collapse;">
          <tr style="border-bottom: 1px solid #1c1c1c;">
            <td style="padding: 12px 0; color: #8A8A8A; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; width: 40%;">Prénom</td>
            <td style="padding: 12px 0; color: #F5F0E8; font-size: 14px;">${firstName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1c1c1c;">
            <td style="padding: 12px 0; color: #8A8A8A; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Nom</td>
            <td style="padding: 12px 0; color: #F5F0E8; font-size: 14px;">${lastName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1c1c1c;">
            <td style="padding: 12px 0; color: #8A8A8A; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Téléphone</td>
            <td style="padding: 12px 0; color: #F5F0E8; font-size: 14px;">${phone || "—"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1c1c1c;">
            <td style="padding: 12px 0; color: #8A8A8A; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
            <td style="padding: 12px 0; color: #D4AF37; font-size: 14px;">${email}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1c1c1c;">
            <td style="padding: 12px 0; color: #8A8A8A; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Ville du projet</td>
            <td style="padding: 12px 0; color: #F5F0E8; font-size: 14px;">${city || "—"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1c1c1c;">
            <td style="padding: 12px 0; color: #8A8A8A; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Budget estimé</td>
            <td style="padding: 12px 0; color: #D4AF37; font-size: 14px; font-weight: 600;">${budget || "—"}</td>
          </tr>
        </table>

        <div style="margin-top: 28px; padding: 20px; border-left: 2px solid #D4AF37; background: #111111;">
          <p style="color: #8A8A8A; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px;">Message</p>
          <p style="color: #F5F0E8; font-size: 14px; line-height: 1.8; white-space: pre-wrap;">${message}</p>
        </div>

        <p style="margin-top: 32px; color: #8A8A8A; font-size: 10px; text-align: center; letter-spacing: 0.1em;">
          LPM · Maître d'Œuvre · Haute-Garonne
        </p>
      </div>
    `;

    await resend.emails.send({
      from: "LPM Site Web <noreply@lpmoe.com>",
      to: RECIPIENT,
      replyTo: email,
      subject: `Nouveau projet — ${firstName} ${lastName} · ${city || "Localisation non précisée"}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Erreur API contact:", err);
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
