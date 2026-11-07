'use client';

import {
  ArrowUpRight,
  Camera,
  Code2,
  Download,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { useState } from 'react';

import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { personalInfo } from '@/data/portfolio';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';
type ContactFormEvent = {
  preventDefault: () => void;
  currentTarget: HTMLFormElement;
};

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: ContactFormEvent) {
    event.preventDefault();
    setStatus('sending');
    setMessage('');

    const form = event.currentTarget;
    try {
      const payload = Object.fromEntries(
        new FormData(form).entries(),
      ) as Record<string, string>;
      payload._subject = `Portfolio message: ${payload.subject}`;
      payload._template = 'table';

      const response = await fetch(
        'https://formsubmit.co/ajax/sabinloyal04@gmail.com',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        },
      );
      if (!response.ok) throw new Error('Contact request failed');
      const result = (await response.json()) as { success?: boolean | string };
      if (result.success === false) throw new Error('Contact request failed');
      form.reset();
      setStatus('success');
      setMessage('Thank you. Your message has been sent successfully.');
    } catch {
      setStatus('error');
      setMessage(
        'Your message could not be sent. Please try again or contact me by phone.',
      );
    }
  }

  return (
    <section
      id="contact"
      className="section contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="container-shell contact-grid">
        <div className="contact-copy">
          <SectionHeading
            id="contact-heading"
            eyebrow="Get in touch"
            title="Have a useful idea? Let’s make it real."
            description="I’m available for software projects, website and app testing, photography, retouching, and practical digital support."
            align="left"
          />
          <div className="contact-details">
            {personalInfo.email ? (
              <a href={`mailto:${personalInfo.email}`}>
                <span>
                  <Mail aria-hidden="true" />
                </span>
                <span>
                  <small>Email</small>
                  {personalInfo.email}
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            ) : null}
            {personalInfo.location ? (
              <div>
                <span>
                  <MapPin aria-hidden="true" />
                </span>
                <span>
                  <small>Location</small>
                  {personalInfo.location}
                </span>
              </div>
            ) : null}
            <a href={`tel:${personalInfo.phone}`}>
              <span>
                <Phone aria-hidden="true" />
              </span>
              <span>
                <small>Phone</small>
                {personalInfo.phone}
              </span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <Code2 aria-hidden="true" />
              </span>
              <span>
                <small>GitHub</small>
                cstssabinid
              </span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a
              href={personalInfo.creativePortfolio}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <Camera aria-hidden="true" />
              </span>
              <span>
                <small>Photography</small>
                Berwa Photo Hub
              </span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a href={personalInfo.cvPath} download>
              <span>
                <Download aria-hidden="true" />
              </span>
              <span>
                <small>Resume</small>
                Download PDF
              </span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            hidden
          />
          <div className="form-heading">
            <span>New message</span>
            <span aria-hidden="true" />
          </div>
          <FieldGroup>
            <div className="form-row">
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  minLength={2}
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="subject">Subject</FieldLabel>
              <Input
                id="subject"
                name="subject"
                placeholder="What would you like to build?"
                minLength={3}
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me a little about the project, problem, or opportunity."
                minLength={10}
                rows={6}
                required
              />
            </Field>
            {message ? (
              <FieldError
                className={status === 'success' ? 'form-success' : ''}
                aria-live="polite"
              >
                {message}
              </FieldError>
            ) : null}
            <Button
              type="submit"
              className="submit-button"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
              <Send aria-hidden="true" />
            </Button>
          </FieldGroup>
        </form>
      </div>
    </section>
  );
}
