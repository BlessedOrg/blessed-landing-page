"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

export const GetInTouch = () => {
  return (
    <div className="flex flex-col p-6 rounded-lg">
      <div className="py-10">
        <h2 className="font-bold uppercase text-3xl md:text-6xl text-center">Get in touch</h2>
        <p className="text-center">We’d love to hear from you!</p>
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block mb-1">Subject</label>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Input
              id="subject"
              type="text"
              placeholder="Select Subject"
              className="h-[52px] w-[842px] border-2 border-black rounded-md cursor-pointer"
              readOnly
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Subject 1</DropdownMenuItem>
            <DropdownMenuItem>Subject 2</DropdownMenuItem>
            <DropdownMenuItem>Subject 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>


      <div className="flex gap-20 mb-4">
        <div className="flex-1">
          <label htmlFor="first-name" className="block mb-1">First name</label>
          <Input
            id="first-name"
            type="text"
            placeholder="Enter your first name"
            className="h-[52px] w-[377px] border-2 border-black rounded-md" 
          />
        </div>
        <div className="flex-1">
          <label htmlFor="last-name" className="block mb-1">Last name</label>
          <Input
            id="last-name"
            type="text"
            placeholder="Enter your last name"
            className="h-[52px] w-[377px] border-2 border-black rounded-md" 
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">Email address</label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email address"
          className="h-[52px] w-[842px] border-2 border-black rounded-md" 
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-1">Message</label>
        <Input
          id="message"
          type="text"
          placeholder="Input"
          className="h-[310px] w-[842px] border-2 border-black rounded-md resize-none"
        />
      </div>

      <div className="flex justify-center mt-6">
        <Button variant="outline" size="xl" className="bg-primary-500 hover:!bg-primary-600 rounded-[39px] text-black">
          Send message
        </Button>
      </div>
    </div>
  );
};
