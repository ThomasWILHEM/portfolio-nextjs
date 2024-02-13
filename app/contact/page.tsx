'use client'

import Image from "next/image";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {FormEvent, useState} from "react";
import {getMaxAge} from "next/dist/server/image-optimizer";
import {Toaster} from "@/components/ui/sonner";
import {toast} from "sonner";

export default function Home() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (firstname == "" && email == "" && lastname == "" && message == "") {
      alert("Information missing !");
      return false;
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        firstname, lastname, email, message
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((data) => {
      resetFields();
      toast.success('Your message has been send')
    })
    .catch((err) => {
      toast.error('There has been a problem. Please try again');
    });
  }

  function resetFields(){
    setFirstname("");
    setLastname("");
    setEmail("");
    setMessage("");
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg w-full">
      <h1 className="font-bold lg:text-5xl text-3xl lg:mt-16 mt-6 lg:mb-12">Want to contact me ?</h1>
      <Card className="my-5 dark:text-white dark:bg-neutral-900 w-5/6 lg:w-4/6 p-6">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between w-full space-y-2">
            <div className="flex space-x-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              <div className="font-bold lg:text-2xl">+33 6 65 39 96 80</div>
            </div>
            <div className="flex space-x-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 lg:hidden">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <div className="font-bold lg:text-2xl">thomaswilhempro@outlook.fr</div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hidden lg:block">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </div>
          </div>
      </Card>

      <Card className="my-5 dark:text-white dark:bg-neutral-900 p-2 w-5/6 lg:w-4/6">
        <CardHeader>
          <CardTitle>
            <p className="text-center font-bold text-3xl">Contact Form</p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col justify-between w-full px-14 space-y-6"
                onSubmit={onSubmit}
          >
            <div className="flex lg:flex-row flex-col justify-between space-y-5 lg:space-y-0">
              <div className="flex flex-col space-y-1 lg:w-96">
                <label className="ml-2" form="firstname">Firstname</label>
                <input className="rounded p-2" id="firstname" name="firstname" placeholder="ex: Jack" required
                       value={firstname}
                       onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1 lg:w-96">
                <label className="ml-2" form="lastname">Lastname</label>
                <input className="rounded p-2" id="lastname" name="lastname" placeholder="ex: Jones" required
                       value={lastname}
                       onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="ml-2" form="email">Email</label>
              <input className="rounded p-2" id="email" name="email" placeholder="ex: test@mail.com" required type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label className="ml-2" form="message">Message</label>
              <textarea className="rounded p-2 h-40" id="message" name="message" placeholder="Your message" required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <Button className="w-80 text-white text-xl">
                Not Working
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <Toaster richColors/>
    </main>
  );
}
