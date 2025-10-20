'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQsTwo() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What is job support?',
            answer: 'Real-time expert help for professionals struggling with project tasks or deadlines.',
        },
        {
            id: 'item-2',
            question: 'Is  interview service confidential?',
            answer: 'Absolutely. We follow 100% confidentiality and never share client or candidate information.',
        },
        {
            id: 'item-3',
            question: 'What technologies do you support?',
            answer: 'DevOps, Cloud, Java, Python, Salesforce, ServiceNow, SAP, Adobe Suite - AEP, CJA , QA, Data Engineering, and more.',
        },
        {
            id: 'item-4',
            question: 'Do you offer 24/7 assistance?',
            answer: "Yes, our experts are available across all time zones for urgent help.",
        },
        {
            id: 'item-5',
            question: 'How quickly can I start?',
            answer: 'You can get matched with a domain expert and start receiving support within 30–60 minutes of Consultation.',
        },
        {
            id: 'item-6',
            question: 'What is a  Interview Service?',
            answer: 'It’s a confidential service where our qualified professionals represent you in client interviews, ensuring you perform confidently and secure the opportunity you deserve.',
        },
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
                        {faqItems.map((item) => (
                            <AccordionItem key={item.id} value={item.id} className="border-dashed">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6 px-8">
                        Can't find what you're looking for? Contact our{' '}
                        <Link href="#" className="text-primary font-medium hover:underline">
                            customer support team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
