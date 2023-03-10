import { z } from 'zod';

const signUpSchema = z.object({
  stepOne: z.object({
    email: z
      .string({ required_error: 'Campo obrigatório' })
      .email('Deve ser um email válido'),
    phoneNumber: z.string({ required_error: 'Campo obrigatório' }),
    password: z
      .string({ required_error: 'Campo obrigatório' })
      .min(8, 'Deve ter no mínimo 8 caracteres'),
    confirmPassword: z
      .string({ required_error: 'Campo obrigatório' })
      .min(8, 'Deve ter no mínimo 8 caracteres'),
  }),
  personalInfo: z.object({
    profilePicture: z.string().optional(),
    firstName: z.string({ required_error: 'Campo obrigatório' }),
    lastName: z.string({ required_error: 'Campo obrigatório' }),
    nif: z.string({ required_error: 'Campo obrigatório' }),
    occupation: z.string({ required_error: 'Campo obrigatório' }),
    // TODO: Add date constraints
    // TODO: Add when API adds this
    // dayOfBirth: z
    //   .number({ required_error: 'Campo obrigatório' })
    //   .min(1, 'Dia inválido')
    //   .max(31, 'Dia inválido'),
    // monthOfBirth: z
    //   .number({ required_error: 'Campo obrigatório' })
    //   .min(1, 'Mês inválido')
    //   .max(12, 'Mês inválido'),
    // yearOfBirth: z
    //   .number({ required_error: 'Campo obrigatório' })
    //   .lte(new Date().getFullYear() - 18, 'Deve ser maior de 18 anos')
    //   .max(new Date().getFullYear(), 'Ano inválido'),
  }),
  address: z.object({
    country: z.string({ required_error: 'Campo obrigatório' }),
    province: z.string({ required_error: 'Campo obrigatório' }),
    neighbor: z.string({ required_error: 'Campo obrigatório' }),
    district: z.string({ required_error: 'Campo obrigatório' }),
    /* TODO: Add coordinates data validation */
    // coordinates: z.string({ required_error: 'Campo obrigatório' }),
  }),
});

export type SignUpFormType = z.infer<typeof signUpSchema>;

export default signUpSchema;
