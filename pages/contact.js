import HomePage from '@/layouts/home';
import ContactLinks from '@/components/contact/contactLinks';
import Panel from '@/components/layouts/panel';

const Contact = () => (
  <HomePage gutters>
    <Panel centerHorizontal centerVertical>
      <ContactLinks title="Say hello!" />
    </Panel>
  </HomePage>
);

Contact.meta = {
  title: 'Contact',
  description: 'Alex Bonine Contact', // todo
};

export default Contact;
