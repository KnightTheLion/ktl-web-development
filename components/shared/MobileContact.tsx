import React from 'react'
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import ContactForm from "@/components/shared/ContactForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const MobileContact = () => {
  return (
    <div className="fixed top-1/2 -rotate-90 -right-12 transform -translate-y-1/2 md:hidden">
          <Dialog>
            <DialogTrigger>
              <div className="flex gap-2 h-6 p-[13px] bg-sky-600 rounded-t-md text-white items-center justify-center opacity-75">
                <EnvelopeOpenIcon />
                Contact
              </div>
            </DialogTrigger>
            <DialogContent>
              <ContactForm />
            </DialogContent>
          </Dialog>
        </div>
  )
}

export default MobileContact