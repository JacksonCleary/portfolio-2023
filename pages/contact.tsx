import type { NextPage } from 'next';
import { Wrapper } from '../components/wrapper';
import { ContactComponent } from '../components/page/contact';

const Contact: NextPage = () => {
  return (
    <>
      <Wrapper>
        <ContactComponent />
      </Wrapper>
    </>
  );
};

export default Contact;
