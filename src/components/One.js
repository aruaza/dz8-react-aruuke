import React from 'react';
import { useForm } from 'react-hook-form';

const One = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form style={{backgroundColor:'red'}} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" {...register('name', { required: true })} />
        {errors.name && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" {...register('username', { required: true })} />
        {errors.username && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register('email', { required: true })} />
        {errors.email && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" {...register('phone')} />
      </div>
      <div>
        <label htmlFor="website">Website:</label>
        <input type="url" id="website" {...register('website')} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default One;
