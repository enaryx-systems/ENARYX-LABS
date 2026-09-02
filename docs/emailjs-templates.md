# EmailJS templates

The contact form ([`src/components/contact-form.tsx`](../src/components/contact-form.tsx))
sends two emails per submission through EmailJS service `service_mrfolos`:

1. **New Enquiry** → `enaryxlab@gmail.com` (the team) — `template_xranki7`
2. **Auto-reply** → the person who submitted — `template_twbdso3`

Variables the form sends:
`{{name}} {{email}} {{company}} {{budget}} {{message}} {{subject}} {{time}} {{to_email}} {{reply_to}}`

Env vars (`.env.local` locally, Vercel → Settings → Environment Variables in prod):

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_mrfolos
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=<EmailJS → Account → General → Public Key>
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=template_xranki7
NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID=template_twbdso3
```

> The public key is not a secret (it ships in the site's client JS), but keep
> the live value in `.env.local` / Vercel env, not in the repo.

---

## Deliverability — keeping the auto-reply out of Spam

Mail sent through EmailJS's **Gmail** service goes out as `enaryxlab@gmail.com`,
DKIM-signed by Google. That's fine, but a brand-new Gmail account sending
templated mail to strangers looks bot-ish to spam filters until it builds
reputation. Levers, most effective first:

1. **Keep the auto-reply text-forward.** A short, mostly-text message reads as
   personal 1:1 correspondence → Inbox. A big dark banner + hosted logo image +
   heavy HTML reads as bulk marketing → Spam. The auto-reply template below is
   deliberately plain. (The *team* notification can stay branded — it goes to
   your own inbox.)
2. **From Name = a person, not a brand.** `Samira at Enaryx Labs` lands in the
   inbox far more often than `Enaryx Labs` or `Enaryx Labs Website`.
3. **No broken images.** The old templates pointed `<img>` at
   `https://enaryxlabs.com/...` which 404s — a broken image is a spam signal.
   Use `https://enaryx-labs.vercel.app/icon-192.png` until the real domain is live.
4. **One link maximum**, no URL shorteners, no tracking pixels.
5. **Warm it up.** For the first ~10–20 sends, have recipients (and yourself, on
   a test) click **"Not spam"** and reply to the thread. Gmail learns fast.
6. **Ask new clients once:** "add enaryxlab@gmail.com to your contacts." A sender
   in Contacts never goes to Spam.
7. **Long-term real fix:** a custom domain (`enaryxlabs.com`) on a transactional
   provider — **Resend is already wired at [`src/app/api/contact/route.ts`](../src/app/api/contact/route.ts)** —
   with SPF + DKIM + DMARC DNS records. Free Gmail sending will always be
   borderline for automated mail.

### The team notification lands in Spam too (self-send)

`enaryxlab@gmail.com` sending to `enaryxlab@gmail.com` often skips the Inbox.
Fix with a Gmail filter — Settings → **Filters and Blocked Addresses** → Create:

- **From:** `enaryxlab@gmail.com`
- Actions: **Never send it to Spam**, **Always mark it as important**,
  **Categorize as Primary**

---

## Template 1 — "Contact Us" / New Enquiry (`template_xranki7`)

Goes to your own inbox, so branding is fine here.

**Settings**

| Field | Value |
|---|---|
| Subject | `New project enquiry from {{name}}` |
| To Email | `enaryxlab@gmail.com` |
| From Name | `Enaryx Labs Website` |
| From Email | *Use default email address* (checked) |
| Reply To | `{{email}}` |
| Bcc / Cc | *(empty)* |

**Content** — click **Edit Content**, `</>` Code view, paste exactly this (no
` ``` ` fences):

```html
<div style="margin:0;padding:24px 12px;background:#f1eef7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">
  <table role="presentation" align="center" width="600" style="width:600px;max-width:100%;border-collapse:collapse;margin:0 auto">
    <tr>
      <td style="background:#150e29;padding:26px 32px;border-radius:14px 14px 0 0">
        <table role="presentation" width="100%" style="border-collapse:collapse">
          <tr>
            <td style="vertical-align:middle">
              <img src="https://enaryx-labs.vercel.app/icon-192.png" width="34" height="34" alt="" style="display:inline-block;vertical-align:middle;border:0;border-radius:8px">
              <span style="display:inline-block;vertical-align:middle;margin-left:11px;font-size:16px;font-weight:700;letter-spacing:.14em;color:#ffffff">ENARYX&nbsp;LABS</span>
            </td>
            <td align="right" style="vertical-align:middle;font-size:10px;letter-spacing:.16em;color:#8f86ad;text-transform:uppercase">Technology&nbsp;&amp;&nbsp;Innovation</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr><td style="height:3px;line-height:3px;font-size:0;background:#7c3aed">&nbsp;</td></tr>
    <tr>
      <td style="background:#ffffff;padding:32px">
        <h1 style="margin:0 0 3px;font-size:20px;color:#14101f">New project enquiry</h1>
        <p style="margin:0 0 24px;font-size:13px;color:#6b6478">via enaryx-labs.vercel.app &middot; {{time}}</p>
        <table role="presentation" width="100%" style="border-collapse:collapse;font-size:14px">
          <tr>
            <td style="padding:8px 0;color:#6b6478;width:96px;vertical-align:top;border-bottom:1px solid #f0edf6">Name</td>
            <td style="padding:8px 0;font-weight:600;color:#14101f;border-bottom:1px solid #f0edf6">{{name}}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#6b6478;vertical-align:top;border-bottom:1px solid #f0edf6">Email</td>
            <td style="padding:8px 0;border-bottom:1px solid #f0edf6"><a href="mailto:{{email}}" style="color:#5b21b6;text-decoration:none">{{email}}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#6b6478;vertical-align:top;border-bottom:1px solid #f0edf6">Company</td>
            <td style="padding:8px 0;color:#14101f;border-bottom:1px solid #f0edf6">{{company}}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#6b6478;vertical-align:top">Budget</td>
            <td style="padding:8px 0;color:#14101f">{{budget}}</td>
          </tr>
        </table>
        <p style="margin:24px 0 6px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#8a8397">Message</p>
        <div style="padding:16px 18px;background:#f6f4fb;border-radius:10px;border:1px solid #ece7f4;white-space:pre-wrap;font-size:14px;line-height:1.6;color:#14101f">{{message}}</div>
        <p style="margin:24px 0 0;font-size:13px;color:#6b6478">Hit <strong>reply</strong> to respond to {{name}} directly.</p>
      </td>
    </tr>
    <tr>
      <td style="background:#faf8fc;border-top:1px solid #ece7f4;padding:22px 32px;border-radius:0 0 14px 14px">
        <p style="margin:0 0 4px;font-size:13px;font-weight:600;color:#14101f">Enaryx Labs</p>
        <p style="margin:0;font-size:12px;line-height:1.5;color:#8a8397">Technology &amp; Innovation &middot; <a href="https://enaryx-labs.vercel.app" style="color:#5b21b6;text-decoration:none">enaryx-labs.vercel.app</a></p>
      </td>
    </tr>
  </table>
</div>
```

---

## Template 2 — Auto-reply (`template_twbdso3`)

Goes to a cold recipient, so **plain text wins**. No banner, no image, minimal
markup — this is what keeps it in the Inbox.

**Settings**

| Field | Value |
|---|---|
| Subject | `Thanks for contacting Enaryx Labs` |
| To Email | `{{email}}` |
| From Name | `Samira at Enaryx Labs` |
| From Email | *Use default email address* (checked) |
| Reply To | `enaryxlab@gmail.com` |
| Bcc / Cc | *(empty)* |

**Content** — **Edit Content**, `</>` Code view, paste exactly this (no ` ``` ` fences):

```html
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;color:#1a1a1a;max-width:520px">
  <p>Hi {{name}},</p>

  <p>Thanks for getting in touch with Enaryx Labs. We've received your message and someone will get back to you personally within two working days &mdash; usually sooner.</p>

  <p>For your reference, here's what you sent:</p>

  <p style="margin:12px 0;padding:0 0 0 14px;border-left:2px solid #dddddd;color:#555555;white-space:pre-wrap">{{message}}</p>

  <p>If you need to add anything, just reply to this email.</p>

  <p>Best regards,<br>Samira<br>Enaryx Labs</p>

  <p style="font-size:12px;color:#999999;margin-top:22px">
    Enaryx Labs &middot; Technology &amp; Innovation &middot;
    <a href="https://enaryx-labs.vercel.app" style="color:#777777">enaryx-labs.vercel.app</a>
  </p>
</div>
```

After editing both templates, hit **Save**, then use each template's **"Test It"**
button and confirm the auto-reply lands in a real external inbox (Gmail, Outlook)
— check Spam the first time and mark **"Not spam"**.
