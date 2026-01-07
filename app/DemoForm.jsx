'use client';
import { Button, Datepicker, Label, Textarea, TextInput } from "flowbite-react"
import Image from "next/image"
import contact_img from "../assets/imagesource/contact_img.png";
import captcha_img from "../assets/imagesource/captcha_img.png";
import { useForm } from "react-hook-form";
const DemoForm=()=>{
      const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();
    return(
        <>
        <div className="lg:flex gap-12">
                  <div className="lg:w-7/12">
                    <div className="flex gap-4 form_area mb-4">
                      <div className="w-6/12">
                        <div className="mb-0 block">
                          <Label htmlFor="base">Name <span>*</span></Label>
                        </div>
                        <TextInput id="base" type="text" sizing="md" placeholder="Enter Name" />
                      </div>
                      <div className="w-6/12">
                        <div className="mb-0 block">
                          <Label htmlFor="base">Email Address <span>*</span></Label>
                        </div>
                        <TextInput id="base" type="email" sizing="md" placeholder="Enter Email" />
                      </div>
                    </div>
                    <div className="flex gap-4 form_area mb-4">
                      <div className="w-6/12">
                        <div className="mb-0 block">
                          <Label htmlFor="base">Phone <span>*</span></Label>
                        </div>
                        <TextInput id="base" type="text" sizing="md" />
                      </div>
                      <div className="w-6/12">
                        <div className="mb-0 block">
                          <Label htmlFor="base">Organization Name <span>*</span></Label>
                        </div>
                        <TextInput id="base" type="text" sizing="md" />
                      </div>
                    </div>
                    <div className="flex gap-4 form_area mb-4">
                      <div className="w-6/12">
                        <div className="mb-0 block">
                          <Label htmlFor="base">Job Level <span>*</span></Label>
                        </div>
                        <TextInput id="base" type="text" sizing="md" />
                      </div>
                      <div className="w-6/12">
                        <div className="mb-0 block">
                          <Label htmlFor="base">Country <span>*</span></Label>
                        </div>
                        <TextInput id="base" type="text" sizing="md" />
                      </div>
                    </div>
                    <div className="flex gap-4 form_area mb-4">
                      <div className="w-6/12">
                        <div className="mb-0 block">
                          <Label htmlFor="base">Website <span>*</span></Label>
                        </div>
                        <TextInput id="base" type="email" sizing="md" />
                      </div>
                      <div className="w-6/12">
                        <div className="mb-0 block">
                          <Label htmlFor="base">Business <span>*</span></Label>
                        </div>
                        <TextInput id="base" type="text" sizing="md" />
                      </div>
                    </div>
                    <div className="lg:flex gap-4 form_area mb-4">
                      <div className="lg:w-6/12">
                        <div className="mb-0 block">
                          <Label htmlFor="base">Message <span>*</span></Label>
                        </div>
                        <Textarea id="comment" placeholder="Enter Message" required rows={5} />
                      </div>
                      <div className="lg:w-6/12">
                        <div className="mb-0 block">
                          <Label htmlFor="base">Date <span>*</span></Label>
                        </div>
                        <Datepicker />
                        <div className="mt-2">
                           <Image src={captcha_img} alt='captcha_img' className="w-9/12" />
                        </div>
                      </div>
                    </div>
                    <div className="form_area">
                      <Button  type="submit">Request a Demo</Button>
                    </div>
                  </div>
                  <div className="lg:w-5/12 mt-4 lg:mt-0">
                    <Image src={contact_img} alt='contact_img' />
                  </div>
              </div>
        </>
    )
}
export default DemoForm