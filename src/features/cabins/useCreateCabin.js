import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apiCabins.js';
import toast from 'react-hot-toast';

export const useCreateCabin = () => {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      console.log('Cabin isCreating', isCreating);
      toast.success('Cabin created');
      queryClient.invalidateQueries('cabins');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  console.log('Cabin isCreating', isCreating);
  return { createCabin, isCreating };
};
