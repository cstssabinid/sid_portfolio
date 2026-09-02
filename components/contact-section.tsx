'use client';

import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react';
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

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setStatus('error');
      setMessage(
        'The contact endpoint is not configured yet. Please use a direct contact channel once one is listed.',
      );
      return;
    }

    const form = event.currentTarget;
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error('Contact request failed');
      form.reset();
      setStatus('success');
      setMessage('Thank you. Your message has been sent successfully.');
    } catch {
      setStatus('error');
      setMessage('Your message could not be sent. Please try again shortly.');
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
            description="I’m open to thoughtful software projects, product collaborations, and conversations about building technology with practical value."
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
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
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
