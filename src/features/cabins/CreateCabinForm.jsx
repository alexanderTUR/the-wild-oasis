import { Input } from '../../ui/Input';
import { Form } from '../../ui/Form';
import { Button } from '../../ui/Button';
import { FileInput } from '../../ui/FileInput';
import { Textarea } from '../../ui/Textarea';
import { useForm } from 'react-hook-form';
import { FormRow } from '../../ui/FormRow.jsx';
import { useCreateCabin } from './useCreateCabin.js';
import { useEditCabin } from './useEditCabin.js';

export const CreateCabinForm = ({ cabinData = {} }) => {
  const { id: editId, ...editValues } = cabinData;
  const isEditingCabin = Boolean(editId);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditingCabin ? editValues : {},
  });
  const { errors } = formState;

  const { createCabin, isCreating } = useCreateCabin();
  const { editCabin, isEditing } = useEditCabin();

  const isWorking = isCreating || isEditing;

  const onFormSubmit = (data) => {
    const image = typeof data.image === 'string' ? data.image : data.image[0];
    if (isEditingCabin) {
      editCabin(
        { newCabinData: { ...data, image: image }, id: editId },
        {
          onSuccess: () => {
            reset();
          },
        },
      );
    } else {
      createCabin(
        { ...data, image: image },
        {
          onSuccess: () => {
            reset();
          },
        },
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)}>
      <FormRow label='Cabin name' error={errors?.name?.message}>
        <Input
          type='text'
          id='name'
          disabled={isWorking}
          {...register('name', {
            required: 'Cabin name is required',
          })}
        />
      </FormRow>

      <FormRow label='Maximum capacity' error={errors?.maxCapacity?.message}>
        <Input
          type='number'
          id='maxCapacity'
          disabled={isWorking}
          {...register('maxCapacity', {
            required: 'Maximum capacity is required',
            min: { value: 1, message: 'Minimum capacity is 1' },
          })}
        />
      </FormRow>

      <FormRow label='Regular price' error={errors?.regularPrice?.message}>
        <Input
          type='number'
          id='regularPrice'
          disabled={isWorking}
          {...register('regularPrice', {
            required: 'Regular price is required',
            min: { value: 1, message: 'Minimum price is 1' },
          })}
        />
      </FormRow>

      <FormRow label='Discount' error={errors?.discount?.message}>
        <Input
          type='number'
          id='discount'
          defaultValue={0}
          disabled={isWorking}
          {...register('discount', {
            required: 'Discount is required',
            validate: (value) => {
              if (+value >= +getValues().regularPrice) {
                return 'Discount should be less than regular price';
              }
            },
          })}
        />
      </FormRow>

      <FormRow label='Description for website' error={errors?.description?.message}>
        <Textarea
          id='description'
          defaultValue=''
          disabled={isWorking}
          {...register('description', {
            required: 'Description is required',
          })}
        />
      </FormRow>

      <FormRow label='Cabin photo'>
        <FileInput
          id='image'
          accept='image/*'
          type='file'
          {...register('image', {
            required: isEditingCabin ? false : 'Image is required',
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation='secondary' type='reset'>
          Cancel
        </Button>
        <Button disabled={isCreating}>{isEditingCabin ? 'Edit cabin' : 'Create new cabin'}</Button>
      </FormRow>
    </Form>
  );
};
