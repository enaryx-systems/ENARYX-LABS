# EmailJS templates

The contact form ([`src/components/contact-form.tsx`](../src/components/contact-form.tsx))
sends two emails per submission through EmailJS service `service_mrfolos`:

1. **New Enquiry** → `enaryxlab@gmail.com` (the team)
2. **Auto-reply** → the person who submitted

Paste the HTML below into the matching template in
<https://dashboard.emailjs.com> → **Email Templates**, then put the template
IDs in `.env.local`:

```
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID=...
```

Variables the form sends: `{{name}} {{email}} {{company}} {{budget}} {{message}}
{{subject}} {{time}} {{to_email}} {{reply_to}}`

The header logo points at `https://enaryxlabs.com/icon-192.png` — swap the host
if the site lives elsewhere. Every client falls back to the text wordmark beside
it, so a missing image still looks fine.

---

## Template 1 — "Enaryx — New Enquiry"

**Settings**

| Field | Value |
|---|---|
| To Email | `{{to_email}}` |
| From Name | `Enaryx Labs Website` |
| From Email | *Use default email address* |
| Reply To | `{{reply_to}}` |
| Subject | `{{subject}}` |

**Content** (editor → `</>` Code view)

```html
<div style="margin:0;padding:24px 12px;background:#f1eef7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">
  <span style="display:none!important;visibility:hidden;opacity:0;height:0;width:0;overflow:hidden">New project enquiry from {{name}} — {{company}}</span>

  <table role="presentation" align="center" width="600" style="width:600px;max-width:100%;border-collapse:collapse;margin:0 auto">
    <!-- header -->
    <tr>
      <td style="background:#150e29;padding:26px 32px;border-radius:14px 14px 0 0">
        <table role="presentation" width="100%" style="border-collapse:collapse">
          <tr>
            <td style="vertical-align:middle">
              <img src="https://enaryxlabs.com/icon-192.png" width="34" height="34" alt="" style="display:inline-block;vertical-align:middle;border:0;border-radius:8px">
              <span style="display:inline-block;vertical-align:middle;margin-left:11px;font-size:16px;font-weight:700;letter-spacing:.14em;color:#ffffff">ENARYX&nbsp;LABS</span>
            </td>
            <td align="right" style="vertical-align:middle;font-size:10px;letter-spacing:.16em;color:#8f86ad;text-transform:uppercase">Technology&nbsp;&amp;&nbsp;Innovation</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr><td style="height:3px;line-height:3px;font-size:0;background:#7c3aed">&nbsp;</td></tr>

    <!-- body -->
    <tr>
      <td style="background:#ffffff;padding:32px">
        <h1 style="margin:0 0 3px;font-size:20px;color:#14101f">New project enquiry</h1>
        <p style="margin:0 0 24px;font-size:13px;color:#6b6478">via enaryxlabs.com &middot; {{time}}</p>

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

    <!-- footer -->
    <tr>
      <td style="background:#faf8fc;border-top:1px solid #ece7f4;padding:22px 32px;border-radius:0 0 14px 14px">
        <p style="margin:0 0 4px;font-size:13px;font-weight:600;color:#14101f">Enaryx Labs</p>
        <p style="margin:0 0 10px;font-size:12px;line-height:1.5;color:#8a8397">Technology &amp; Innovation — intelligent software, digital products and technology systems for ambitious ideas.</p>
        <p style="margin:0;font-size:12px;color:#8a8397">
          <a href="https://enaryxlabs.com" style="color:#5b21b6;text-decoration:none">enaryxlabs.com</a>
          &nbsp;&middot;&nbsp;
          <a href="mailto:enaryxlab@gmail.com" style="color:#5b21b6;text-decoration:none">enaryxlab@gmail.com</a>
        </p>
      </td>
    </tr>
  </table>
</div>
```

---

## Template 2 — "Enaryx — We got your message" (auto-reply)

**Settings**

| Field | Value |
|---|---|
| To Email | `{{email}}` |
| From Name | `Enaryx Labs` |
| From Email | *Use default email address* |
| Reply To | `{{to_email}}` |
| Subject | `We've got your message — Enaryx Labs` |

**Content** (editor → `</>` Code view)

```html
<div style="margin:0;padding:24px 12px;background:#f1eef7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">
  <span style="display:none!important;visibility:hidden;opacity:0;height:0;width:0;overflow:hidden">Thanks {{name}} — we've received your message and will reply within two working days.</span>

  <table role="presentation" align="center" width="600" style="width:600px;max-width:100%;border-collapse:collapse;margin:0 auto">
    <!-- header -->
    <tr>
      <td style="background:#150e29;padding:26px 32px;border-radius:14px 14px 0 0">
        <table role="presentation" width="100%" style="border-collapse:collapse">
          <tr>
            <td style="vertical-align:middle">
              <img src="https://enaryxlabs.com/icon-192.png" width="34" height="34" alt="" style="display:inline-block;vertical-align:middle;border:0;border-radius:8px">
              <span style="display:inline-block;vertical-align:middle;margin-left:11px;font-size:16px;font-weight:700;letter-spacing:.14em;color:#ffffff">ENARYX&nbsp;LABS</span>
            </td>
            <td align="right" style="vertical-align:middle;font-size:10px;letter-spacing:.16em;color:#8f86ad;text-transform:uppercase">Technology&nbsp;&amp;&nbsp;Innovation</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr><td style="height:3px;line-height:3px;font-size:0;background:#7c3aed">&nbsp;</td></tr>

    <!-- body -->
    <tr>
      <td style="background:#ffffff;padding:32px">
        <p style="margin:0 0 16px;font-size:15px;color:#14101f">Hi {{name}},</p>

        <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:#14101f">
          Thanks for reaching out to <strong>Enaryx Labs</strong> — your message is in.
          We read every enquiry and reply within two working days, usually sooner.
        </p>

        <p style="margin:0 0 6px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#8a8397">A copy of what you sent</p>
        <div style="padding:16px 18px;background:#f6f4fb;border-radius:10px;border:1px solid #ece7f4;white-space:pre-wrap;font-size:14px;line-height:1.6;color:#14101f">{{message}}</div>

        <p style="margin:22px 0 24px;font-size:15px;line-height:1.65;color:#14101f">
          If anything's urgent, just reply to this email and it'll reach us.
        </p>

        <p style="margin:0;font-size:15px;color:#14101f">— The Enaryx Labs team</p>
      </td>
    </tr>

    <!-- footer -->
    <tr>
      <td style="background:#faf8fc;border-top:1px solid #ece7f4;padding:22px 32px;border-radius:0 0 14px 14px">
        <p style="margin:0 0 4px;font-size:13px;font-weight:600;color:#14101f">Enaryx Labs</p>
        <p style="margin:0 0 10px;font-size:12px;line-height:1.5;color:#8a8397">Technology &amp; Innovation — intelligent software, digital products and technology systems for ambitious ideas.</p>
        <p style="margin:0;font-size:12px;color:#8a8397">
          <a href="https://enaryxlabs.com" style="color:#5b21b6;text-decoration:none">enaryxlabs.com</a>
          &nbsp;&middot;&nbsp;
          <a href="https://enaryxlabs.com/work" style="color:#5b21b6;text-decoration:none">Our work</a>
          &nbsp;&middot;&nbsp;
          <a href="mailto:enaryxlab@gmail.com" style="color:#5b21b6;text-decoration:none">enaryxlab@gmail.com</a>
        </p>
      </td>
    </tr>
  </table>
</div>
```
