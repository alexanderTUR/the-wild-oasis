import { Heading } from '../ui/Heading';
import { Row } from '../ui/Row';
import { CabinTable } from '../features/cabins/CabinTable.jsx';
import { Button } from '../ui/Button.jsx';
import { CreateCabinForm } from '../features/cabins/CreateCabinForm.jsx';

export const Cabins = () => {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
        <p>Filters / Sort</p>
      </Row>
      <Row>
        <CabinTable />
        <Button>Add cabin</Button>
        <CreateCabinForm />
      </Row>
    </>
  );
};
