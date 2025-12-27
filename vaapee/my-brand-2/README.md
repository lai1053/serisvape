# gemini-vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## EmailJS Configuration (Wholesale Form)

The wholesale partnership form uses EmailJS to send emails. To configure it:

1. **Register at EmailJS**: Visit https://www.emailjs.com/ and create an account

2. **Create Email Service**:
   - Go to "Email Services" and add a new service
   - Connect your email (Gmail, Outlook, etc.)
   - Copy the Service ID

3. **Create Email Template**:
   - Go to "Email Templates" and create a new template
   - Use these template variables:
     - `{{to_email}}` - Recipient email (info@serisvape.com)
     - `{{company_name}}` - Company / Store Name
     - `{{contact_name}}` - Contact Name
     - `{{from_email}}` - Sender's email
     - `{{phone}}` - Phone / WhatsApp
     - `{{country}}` - Country / Region
     - `{{business_type}}` - Business Type
     - `{{order_volume}}` - Expected Order Volume
     - `{{message}}` - Message / Requirements
     - `{{subject}}` - Email subject
     - `{{reply_to}}` - Reply-to email
   - Copy the Template ID

4. **Get Public Key**:
   - Go to "Account" > "General" > "API Keys"
   - Copy your Public Key

5. **Create .env file** in the project root:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

6. **Restart the dev server** after adding the .env file

**Note**: If EmailJS is not configured, the form will show a message directing users to contact info@serisvape.com directly.
