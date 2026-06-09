import { useState } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const SERVICES = ['Tunnelling','Hydro Power works','Mine Development & Operation','Shaft Sinking','Slope Stabilization','Ground Improvement / Grouting','Micro-Tunnelling','Dredging','Not sure — need advice']

export default function Enquiry() {
  const [form, setForm] = useState({ name:'', org:'', email:'', phone:'', service:'', msg:'' })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const set = (k) => (e) => {
    setForm({ ...form, [k]: e.target.value })
    if (errors[k]) setErrors({ ...errors, [k]: false })
  }

  const submit = async (e) => {
    e.preventDefault()
    const err = {}
    if (!form.name.trim()) err.name = true
    if (!EMAIL_RE.test(form.email.trim())) err.email = true
    if (!form.service) err.service = true
    if (!form.msg.trim()) err.msg = true
    setErrors(err)
    if (Object.keys(err).length) return

    setIsSubmitting(true)
    const toastId = toast.loading('Sending enquiry...')

    try {
      const SERVICE_ID = 'service_cjs3sli'
      // PUT YOUR NEW ADMIN TEMPLATE ID HERE (Create one in EmailJS that sends to suraj@mechonsite.com)
      const ADMIN_TEMPLATE_ID = 'template_6r99dpg' 
      // YOUR CURRENT TEMPLATE ID (which is going to the customer)
      const CUSTOMER_TEMPLATE_ID = 'template_x3h8he6'
      const PUBLIC_KEY = 'Uv_BAveY7wpKnlCxn'

      const templateParams = {
        name: form.name,
        org: form.org || '-',
        email: form.email,
        phone: form.phone || '-',
        service: form.service,
        msg: form.msg,
      }

      // Send both emails simultaneously
      await Promise.all([
        emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParams, PUBLIC_KEY),
        emailjs.send(SERVICE_ID, CUSTOMER_TEMPLATE_ID, templateParams, PUBLIC_KEY)
      ])

      toast.success('Enquiry sent — we will be in touch within 48 hours.', { id: toastId })
      setForm({ name:'', org:'', email:'', phone:'', service:'', msg:'' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      toast.error('Failed to send enquiry. Please try again later.', { id: toastId })
    } finally {
      setIsSubmitting(false)
    }
  }

  const cls = (k) => 'field' + (errors[k] ? ' invalid' : '')

  return (
    <section className="enquiry sec-pad" id="enquiry">
      <Toaster position="bottom-center" />
      <div className="wrap enq-grid">
        <div className="enq-left reveal">
          <span className="eyebrow">Get in touch</span>
          <h2>Have a site, a tender, or a problem? Let's talk.</h2>
          <p>Send us the basics and our engineering team will respond within two working days with how we can help and what we'd need next.</p>
          <div className="enq-contact">
            <div className="row">
              <div className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 4h16v16H4z"/><path d="m4 6 8 6 8-6"/></svg></div>
              <div><div className="lab">Email</div><div className="val">info@temasekres.com </div></div>
            </div>
            <div className="row">
              <div className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg></div>
              <div><div className="lab">Phone</div><div className="val">+91 7827479548</div></div>
            </div>
            <div className="row">
              <div className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg></div>
              <div><div className="lab">Head office</div><div className="val">Vatika City Point, Gurugram, Haryana — 122002</div></div>
            </div>
          </div>
        </div>

        <form className="enq reveal d1" onSubmit={submit} noValidate>
          <div className="two">
            <div className={cls('name')}>
              <label>Full name</label>
              <input type="text" placeholder="Your name" value={form.name} onChange={set('name')} disabled={isSubmitting} />
              <span className="err">Please enter your name</span>
            </div>
            <div className="field">
              <label>Organisation</label>
              <input type="text" placeholder="Company / department" value={form.org} onChange={set('org')} disabled={isSubmitting} />
            </div>
          </div>
          <div className="two">
            <div className={cls('email')}>
              <label>Email</label>
              <input type="email" placeholder="you@company.com" value={form.email} onChange={set('email')} disabled={isSubmitting} />
              <span className="err">Enter a valid email</span>
            </div>
            <div className="field">
              <label>Phone</label>
              <input type="tel" placeholder="+91 …" value={form.phone} onChange={set('phone')} disabled={isSubmitting} />
            </div>
          </div>
          <div className={cls('service')}>
            <label>What do you need?</label>
            <select value={form.service} onChange={set('service')} disabled={isSubmitting}>
              <option value="">Select a discipline…</option>
              {SERVICES.map((s) => <option key={s}>{s}</option>)}
            </select>
            <span className="err">Please choose an option</span>
          </div>
          <div className={cls('msg')}>
            <label>Tell us about the project / site</label>
            <textarea placeholder="Location, scope, timeline, or the problem you're facing…" value={form.msg} onChange={set('msg')} disabled={isSubmitting} />
            <span className="err">A short description helps us help you</span>
          </div>
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send enquiry →'}
          </button>
          <p className="form-note">We reply within 48 hours · Your details stay confidential</p>
        </form>
      </div>
    </section>
  )
}
