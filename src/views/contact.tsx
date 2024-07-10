import ContactForm from '@/components/contact-form';
import React from 'react';

export default function Contact() {
  return (
    <section>
      <div className="w-full overflow-x-hidden">
        <h2 className="landingSectionTitle relative mx-0 mb-4 max-w-max text-left md:w-max">
          Contact Me
        </h2>
        <div className="flex items-center justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
