import ContactForm from '@/components/contact-form'
import React from 'react'

export default function Contact() {
  return (
    <section>
    <div className="overflow-x-hidden w-full">
      <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max">
        Contact Me
      </h2>
      <div className='flex justify-center items-center'>
      <ContactForm/>
      </div>
    </div>
  </section>
  )
}
