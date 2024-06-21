import { Button, CodeBlock, Input, Typography } from '@/components'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { IContactForm } from '../../interfaces'
import { tv } from 'tailwind-variants'
import { format } from 'date-fns'

const schema = yup.object().shape({
  name: yup.string().min(3).max(100).required(),
  email: yup.string().email().required(),
  message: yup.string().max(500),
})

const inputDiv = tv({
  base: 'flex flex-col gap-2',
})

export function ContactForm() {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
    reset,
    watch,
  } = useForm<IContactForm>({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: IContactForm) => console.log(data)

  const codeBlockMessage = () => {
    return `
const button = document.querySelector('#sendBtn');

const message = {
  name: "${watch('name') || ''}",
  email: "${watch('email') || ''}",
  message: "${watch('message') || ''}",
  date: "${format(new Date(), 'yyyy-MM-dd')}",
}

button.addEventListener('click', () => {
  form.send(message);
})
    `
  }

  return (
    <>
      <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
        {isSubmitSuccessful && (
          <div className='flex flex-col items-center justify-center gap-4 text-center'>
            <Typography text='Thank you!🤘' variant='h3' color='white' />
            <Typography
              text='Your message has been accepted. You will recieve answer really soon!'
              variant='p'
              color='gray'
            />
            <Button
              text='send-new-message'
              variant='tertiary'
              onClick={() => reset()}
            />
          </div>
        )}
        {!isSubmitSuccessful && (
          <>
            <div className={inputDiv()}>
              <Controller
                name='name'
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Input label='_name:' {...field} />}
              />
              {errors.name && (
                <Typography
                  text={String(errors.name?.message)}
                  variant='p'
                  color='red'
                  className='text-sm'
                />
              )}
            </div>
            <div className={inputDiv()}>
              <Controller
                name='email'
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Input label='_email:' {...field} />}
              />
              {errors.email && (
                <Typography
                  text={String(errors.email?.message)}
                  variant='p'
                  color='red'
                  className='text-sm'
                />
              )}
            </div>
            <div className={inputDiv()}>
              <Controller
                name='message'
                control={control}
                render={({ field }) => (
                  <Input label='_message:' type='textarea' {...field} />
                )}
              />
              {errors.message && (
                <Typography
                  text={String(errors.message?.message)}
                  variant='p'
                  color='red'
                  className='text-sm'
                />
              )}
            </div>
            <Button type='submit' text='submit-message' variant='tertiary' />
          </>
        )}
      </form>
      <div className='hidden lg:block'>
        <CodeBlock
          language='javascript'
          className='border-0 bg-slate-900 text-lg'
          children={codeBlockMessage()}
        />
      </div>
    </>
  )
}
