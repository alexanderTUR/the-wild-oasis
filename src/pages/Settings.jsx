import { Heading } from '../ui/Heading';
import { UpdateSettingsForm } from '../features/settings/UpdateSettingsForm.jsx';
import { Row } from '../ui/Row.jsx';

export const Settings = () => {
  return (
    <Row>
      <Heading as='h1'>Update hotel settings</Heading>
      <UpdateSettingsForm />
    </Row>
  );
};
