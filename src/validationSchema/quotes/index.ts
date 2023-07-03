import * as yup from 'yup';

export const quoteValidationSchema = yup.object().shape({
  questionnaire: yup.string().required(),
  user_id: yup.string().nullable(),
});
