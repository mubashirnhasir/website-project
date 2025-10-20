import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroSection() {
    return (
        <section className="py-40">
            <div className="relative z-10 mx-auto w-full max-w-3xl px-6 lg:px-0">
                <div className="relative text-center">
                    <MistKitLogo className="mx-auto" />
                    <h1 className="mx-auto mt-16 max-w-xl text-balance text-5xl font-medium">
                        IT Recruitment — Coming Soon
                    </h1>

                    <p className="text-muted-foreground mx-auto mb-6 mt-4 text-balance text-xl">
                        We’re building our next-gen IT Recruitment platform focused on
                        <br />
                        <strong>Onshore</strong>, <strong>Offshore</strong>, <strong>W2</strong>, <strong>C2C</strong>, and <strong>Full-Time</strong> hiring solutions.
                        Connecting top IT talent with leading organizations worldwide — faster, smarter, and more efficiently.
                    </p>

                    <div className="flex flex-col items-center gap-2 *:w-full sm:flex-row sm:justify-center sm:*:w-auto">
                        <Button asChild variant="default">
                            <Link href="/">
                                <span className="text-nowrap">Back to Home</span>
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="relative mt-12 overflow-hidden rounded-3xl bg-black/10 md:mt-16">
                    
                  
                </div>
            </div>
        </section>
    );
}

const MistKitLogo = ({ className }) => (
    <div
        aria-hidden
        className={cn(
            'border-background bg-linear-to-b rounded-(--radius) relative flex size-9 translate-y-0.5 items-center justify-center border from-yellow-300 to-orange-600 shadow-lg shadow-black/20 ring-1 ring-black/10',
            className
        )}>
        <BookOpen className="mask-b-from-25% size-6 fill-white stroke-white drop-shadow-sm" />
        <BookOpen
            className="absolute inset-0 m-auto size-6 fill-white stroke-white opacity-65 drop-shadow-sm" />
        <div className="z-1 h-4.5 absolute inset-2 m-auto w-px translate-y-px rounded-full bg-black/10"></div>
    </div>
)
