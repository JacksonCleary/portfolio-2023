import { Heading } from '@/components/heading';
import { ContactForm } from '@/components/contact-form';
export const ContentContact = (): JSX.Element => {
  return (
    <div>
      <Heading text="Contact" />
      <p>
        Send me a message! <br /> I&apos;ll do my best to respond ASAP.
      </p>
      <ContactForm />
    </div>
  );
};
