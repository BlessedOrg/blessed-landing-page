"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const subjects = [
  "Report bugs",
  "Talk to sales",
  "Account & billing",
  "General contact inquiries"
];

export const GetInTouch = () => {
  return (
    <div className="flex flex-col p-4 md:p-6 rounded-lg max-w-4xl mx-auto">
      <div className="py-6 md:py-10">
        <h2 className="font-bold uppercase text-2xl md:text-4xl lg:text-6xl text-center">
          Get in touch
        </h2>
        <p className="text-center mt-2">We'd love to hear from you!</p>
      </div>

      <form className="space-y-4 md:space-y-6">
        <div>
          <label htmlFor="subject" className="block mb-1 text-sm font-medium">
            Subject
          </label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Input
                id="subject"
                type="text"
                placeholder="Select Subject"
                className="h-12 w-full border-2 border-black rounded-md cursor-pointer"
                readOnly
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              {subjects.map((subject, index) => (
                <DropdownMenuItem key={index}>{subject}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label htmlFor="first-name" className="block mb-1 text-sm font-medium">
              First name
            </label>
            <Input
              id="first-name"
              type="text"
              placeholder="Enter your first name"
              className="h-12 w-full border-2 border-black rounded-md"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block mb-1 text-sm font-medium">
              Last name
            </label>
            <Input
              id="last-name"
              type="text"
              placeholder="Enter your last name"
              className="h-12 w-full border-2 border-black rounded-md"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium">
            Email address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            className="h-12 w-full border-2 border-black rounded-md"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your message"
            className="h-32 md:h-64 w-full border-2 border-black rounded-md resize-none p-2"
          />
        </div>

        <div className="flex justify-center mt-6">
          <Button
            type="submit"
            variant="outline"
            size="lg"
            className="bg-primary-500 hover:bg-primary-600 rounded-full text-black px-8 py-3"
          >
            Send message
          </Button>
        </div>
      </form>
    </div>
  );
};