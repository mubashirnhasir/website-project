"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function Pricing() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Flexible Pricing for Every Professional
          </h1>
          <p className="text-muted-foreground">
            Choose between flexible hourly sessions, full-time dedicated expert support, or proxy interview assistance.  
            Transparent. Confidential. Expert-led.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:mt-20 md:grid-cols-3">
          {/* HOURLY SUPPORT */}
          <Card>
            <CardHeader>
              <CardTitle className="font-medium">Hourly Support</CardTitle>
              <span className="my-3 block text-2xl font-semibold">$19/hour</span>
              <CardDescription className="text-sm">1-on-1 Real-Time Expert Session</CardDescription>

              <Button asChild variant="outline" className="mt-4 w-full">
                <Link href="">Book Now</Link>
              </Button>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed" />
              <ul className="list-outside space-y-3 text-sm">
                {[
                  'Live 1-on-1 Project Assistance',
                  'Flexible Hourly Scheduling',
                  'Available Across Time Zones',
                  'Debugging & Deployment Support',
                  'Confidential & Secure Help',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* FULL-TIME DEDICATED SUPPORT */}
          <Card className="relative border-indigo-200 shadow-lg">
            <span className="absolute inset-x-0 -top-3 mx-auto flex w-fit items-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-400 px-3 py-1 text-xs font-medium text-white shadow-sm">
              Popular
            </span>

            <CardHeader>
              <CardTitle className="font-medium">Full-Time Dedicated Support</CardTitle>
              <span className="my-3 block text-2xl font-semibold">$1199 / month</span>
              <CardDescription className="text-sm">Continuous Expert Guidance & Assistance</CardDescription>

              <Button asChild className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700">
                <Link href="">Get Started</Link>
              </Button>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed" />
              <ul className="list-outside space-y-3 text-sm">
                {[
                  'Dedicated Expert Assigned',
                  'Remote & On-Demand Availability',
                  'Priority Scheduling',
                  'Weekly Progress Tracking',
                  'Access to Senior Mentors',
                  'Proxy Interview Preparation',
                  'Career Guidance Sessions',
                  'Multi-Stack Support (DevOps, Cloud, Java, etc.)',
                  'Resume & Interview Optimization',
                  'Ongoing Technical Mentorship',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* PROXY INTERVIEW SUPPORT */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-medium">Proxy Interview Support</CardTitle>
              <span className="my-3 block text-2xl font-semibold">Starting at $299</span>
              <CardDescription className="text-sm">Confidential Interview Representation</CardDescription>

              <Button asChild variant="outline" className="mt-4 w-full">
                <Link href="">Request Proxy</Link>
              </Button>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed" />
              <ul className="list-outside space-y-3 text-sm">
                {[
                  'Handled by Domain Experts',
                  '100% Confidential Process',
                  'US / UK / India Time Zone Coverage',
                  'Pre-Interview Briefing & Coordination',
                  'Post-Interview Follow-Up Guidance',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Optional footnote */}
        <p className="mt-10 text-center text-xs text-muted-foreground">
          *Pricing may vary based on technology stack, timezone, and project scope.
        </p>
      </div>
    </section>
  )
}
