'use client';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { FaRegMessage } from 'react-icons/fa6';
import ContactForm from './contact-form';

export default function ContactPopOver() {
  return (
    <div className="fixed bottom-8 right-2 z-[99] lg:right-16">
      <Popover>
        <PopoverTrigger>
          <Button
            variant="outline"
            size={'icon'}
            className="h-16 w-16 rounded-full"
          >
            <FaRegMessage className="h-8 w-8" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          className="mr-6 w-[350px] lg:mr-12 lg:w-[400px]" 
        >
          <ContactForm />
        </PopoverContent>
      </Popover>
    </div>
  );
}
