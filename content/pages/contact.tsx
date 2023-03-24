import { Heading } from '@/components/heading';
import { ContactForm } from '@/components/contact-form';
import styles from '@/content/content.module.scss';
export const ContentContact = (): JSX.Element => {
  return (
    <div>
      <Heading text="Contact" />
      <div className={styles['content-padding']}>
        <p>
          Send me a message! <br /> I&apos;ll do my best to respond ASAP.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};
