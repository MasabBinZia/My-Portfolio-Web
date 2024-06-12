"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaRegMessage } from "react-icons/fa6";
import ContactForm from "./contact-form";

export default function ContactPopOver() {
  return (
    <div className="fixed bottom-8 lg:right-16 right-2 z-[99]">
      <Popover>
        <PopoverTrigger>
          <Button
            variant="outline"
            size={"icon"}
            className="w-16 h-16 rounded-full "
          >
            <FaRegMessage className="w-8 h-8" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          className="lg:mr-12 lg:w-[400px] mr-6 w-[350px]"
        >
          <ContactForm />
        </PopoverContent>
      </Popover>
    </div>
  );
}
