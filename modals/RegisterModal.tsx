'use client'

import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

import useRegisterModal from '@/hooks/useRegisterModal'
import { useState } from 'react'
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'

export default function RegisterModal() {
  const registerModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    axios
      .post('/api/register', data)
      .then(() => {
        registerModal.onClose()
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return <div>RegisterModal</div>
}
