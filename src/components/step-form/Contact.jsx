import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppState } from '../../context/state';
import { Button, Field, Form, Input } from '../Forms';

const Contact = () => {
  const [state, setState] = useAppState();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: 'onSubmit' });

  const watchPassword = watch('password');

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate('/education');
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>Contact</legend>
        <Field label="First Name" error={errors?.firstName}>
          <Input
            {...register('firstName', { required: 'First name is required' })}
            id="first-name"
          />
        </Field>
        <Field label="Last Name" error={errors?.lastName}>
          <Input
            {...register('lastName', { required: 'Last name is required' })}
            id="last-name"
          />
        </Field>
        <Field label="Email" error={errors?.email}>
          <Input
            {...register('email', { required: 'Email is required' })}
            id="email"
            type="email"
          />
        </Field>
        <Field label="Password" error={errors?.password}>
          <Input
            {...register('password', { required: 'Password is required' })}
            id="password"
            type="password"
          />
        </Field>
        <Field label="Confirm Password" error={errors?.confirmPassword}>
          <Input
            {...register('confirmPassword', {
              required: 'Confirm Password is required',
              validate: (value) =>
                value === watchPassword || 'The passwords do not match',
            })}
            id="confirm-password"
            type="password"
          />
        </Field>
        <Button> Next {'>'} </Button>
      </fieldset>
    </Form>
  );
};

export default Contact;
