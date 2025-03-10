'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import CustomFormField from '@/components/CustomjFormField/CustomFormField'

export enum FormFieldType {
  INPUT= 'input',
  TEXTAREA= 'textarea',
  PHONE_INPUT= 'phoneInput',
  CHECKBOX= 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON= 'skeleton',
}

const formSchema = z.object({
    username: z.string().min(2).max(50)
})

const PatientForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
      <section className='mb-12 space-y-4'>
        <h1 className='header'>Hi there 👋</h1>
        <p className='text-dark-700'>Schedule your first appointment</p>
      </section>

      <CustomFormField 
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name='name'
        label="Full name"
        placeholder="John Doe"
        iconSrc="/assets/icons/user.svg"
        iconAlt="user"
      />

      <CustomFormField 
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name='email'
        label="Email"
        placeholder="johndoe@email.com"
        iconSrc="/assets/icons/email.svg"
        iconAlt="email"
      />
      
      <Button type="submit">Submit</Button>
    </form>
  </Form>
  )
}

export default PatientForm
