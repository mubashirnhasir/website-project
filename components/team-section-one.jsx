import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const members = [
     {
    src: 'https://avatars.githubusercontent.com/u/101?v=4',
    name: 'Mubashir',
    role: 'Founder & Software Engineer | Adobe Cloud Suite | Data Engineer',
  },
  {
    src: 'https://avatars.githubusercontent.com/u/102?v=4',
    name: 'Abdul Aziz Masood',
    role: 'Technical Lead | Solution Architect',
  },
  {
    src: 'https://avatars.githubusercontent.com/u/103?v=4',
    name: 'Mohd Abbas',
    role: 'Sr. DevOps Engineer',
  },
  {
    src: 'https://avatars.githubusercontent.com/u/108?v=4',
    name: 'Mohammad Affan',
    role: 'DevOps, Cloud Engineer | AWS | CI/CD | Automation',
  },
  {
    src: 'https://avatars.githubusercontent.com/u/104?v=4',
    name: 'Yahya Bassam',
    role: 'Frontend Engineer | React & Next.js',
  },
  {
    src: 'https://avatars.githubusercontent.com/u/105?v=4',
    name: 'Fauzaan Hussain',
    role: 'Sr. DevOps Engineer',
  },
  {
    src: 'https://avatars.githubusercontent.com/u/106?v=4',
    name: 'Maaz',
    role: 'Recruitment Specialist | IT & Tech Hiring',
  },
  {
    src: 'https://avatars.githubusercontent.com/u/107?v=4',
    name: 'Mahmood',
    role: 'Project Coordinator | Operations & Delivery',
  },
  {
    src: 'https://avatars.githubusercontent.com/u/108?v=4',
    name: 'Talha',
    role: 'Fullstack, Cloud & DevOps Engineer | AWS | CI/CD | Automation',
  },
]

export default function TeamSection() {
    return (
        <section>
            <div className="bg-muted/50 py-24">
                <div className="@container mx-auto w-full max-w-5xl px-6">
                    <div className="mb-12">
                        <h2 className="text-foreground text-4xl font-semibold">Meet Our Team</h2>
                        <p className="text-muted-foreground my-4 text-balance text-lg">Our talented professionals bring diverse expertise and passion to every project. Together, we collaborate to deliver exceptional results and innovative solutions for our clients.</p>
                        {/* <Button asChild variant="outline" className="pr-2">
                            <Link href="#">
                                We're hiring
                                <ChevronRight className="opacity-50" />
                            </Link>
                        </Button> */}
                    </div>

                    <div className="@sm:grid-cols-2 @xl:grid-cols-3 grid gap-6 md:gap-y-10">
                        {members.map((member, index) => (
                            <div key={index} className="grid grid-cols-[auto_1fr] items-center gap-3">
                                <Avatar
                                    className="rounded-(--radius) ring-foreground/10 size-10 border border-transparent shadow ring-1">
                                    <AvatarImage src={member.src} alt={member.name} />
                                    <AvatarFallback className="rounded-(--radius)">{member.name.charAt(0)}</AvatarFallback>
                                </Avatar>

                                <div>
                                    <span className="text-foreground font-medium">{member.name}</span>
                                    <div className="text-muted-foreground text-sm">{member.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
