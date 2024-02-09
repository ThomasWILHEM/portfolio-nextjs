import Image from "next/image";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg w-full">
      <h1 className="font-bold text-5xl mt-16 mb-12">Want to contact me ?</h1>
      <Card className="my-5 dark:text-white dark:bg-neutral-900 p-2 w-4/6">
        <CardContent>
          <div className="flex justify-between w-full">
            <div className="flex space-x-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              <div className="font-bold text-2xl">+33 6 65 39 96 80</div>
            </div>
            <div className="flex  space-x-2 items-center">
              <div className="font-bold text-2xl">thomaswilhempro@outlook.fr</div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="my-5 dark:text-white dark:bg-neutral-900 p-2 w-4/6">
        <CardHeader>
          <CardTitle>
            <p className="text-center font-bold text-3xl">Contact Form</p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col justify-between w-full px-14 space-y-6">
            <div className="flex justify-between">
              <div className="flex flex-col space-y-1 w-96">
                <label className="ml-2" form="firstname">Firstname</label>
                <input className="rounded p-2" id="firstname" name="firstname" placeholder="ex: Jack" required/>
              </div>
              <div className="flex flex-col space-y-1 w-96">
                <label className="ml-2" form="lastname">Lastname</label>
                <input className="rounded p-2" id="lastname" name="lastname" placeholder="ex: Jones" required/>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="ml-2" form="email">Email</label>
              <input className="rounded p-2" id="email" name="email" placeholder="ex: test@mail.com" required type="email"/>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="ml-2" form="message">Message</label>
              <textarea className="rounded p-2" id="message" name="message" placeholder="Your message" required/>
            </div>
            <div className="flex justify-center">
              <Button className="w-80 text-white text-xl">
                Send
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
