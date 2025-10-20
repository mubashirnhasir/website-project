"use client"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

// ✅ Validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(8, "Enter a valid phone number."),
  country: z.string().min(2, "Enter your country name."),
  timezone: z.string().min(2, "Enter your time zone."),
  technology: z.string().min(2, "Enter required technology."),
  jobDescription: z.string().optional(),
})

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      timezone: "",
      technology: "",
      jobDescription: "",
    },
  })

 const onSubmit = async (data) => {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    const result = await res.json()
    if (result.success) {
      alert("✅ Form submitted successfully! We'll reach out soon.")
    } else {
      alert("❌ Failed to send message. Please try again.")
    }
  } catch (error) {
    console.error(error)
    alert("⚠️ Something went wrong.")
  }
}


  return (
    <div id="contactForm" className="w-full flex-col lg:flex-row flex lg:pl-20 items-center  justify-center">
        <div className="heading flex items-center justify-center font-semibold lg:text-8xl lg: text-6xl">
            Contact Us
        </div>
        <div className="max-w-xl w-full mx-auto p-8 rounded-lg ">

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">Name*</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">Email Id*</FormLabel>
                <FormControl>
                  <Input placeholder="example@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">Phone Number*</FormLabel>
                <FormControl>
                  <Input placeholder="+1 123 456 7890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Country */}
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">Country*</FormLabel>
                <FormControl>
                  <Input placeholder="United States" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Timezone */}
          <FormField
            control={form.control}
            name="timezone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">Time Zone*</FormLabel>
                <FormControl>
                  <Input placeholder="EST / PST / IST" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Technology */}
          <FormField
            control={form.control}
            name="technology"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">
                  Support Needed Technology*
                </FormLabel>
                <FormControl>
                  <Input placeholder="e.g. AWS, React, DevOps" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Job Description */}
          <FormField
            control={form.control}
            name="jobDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">Job Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Briefly describe the requirement"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full cursor-pointer font-semibold"
          >
            Submit Form
          </Button>
        </form>
      </Form>
    </div>
    </div>
  )
}
