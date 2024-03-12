import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateSetting as updateSettingApi } from '../../services/apiSettings.js';

export const useUpdateSetting = () => {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isPending: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success('Setting successfully edited');
      queryClient.invalidateQueries('settings');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { updateSetting, isUpdating };
};
