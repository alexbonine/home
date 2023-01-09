import ContactLinks from '@/components/contact/contactLinks';
import Panel from '@/components/layouts/panel';

const Contact = () => {
  return (
    <Panel gutters centerHorizontal paddingNavbar>
      <ContactLinks subtitle="Say hello!" title="Thanks for making it this far." />
    </Panel>
  );
};

export default Contact;
