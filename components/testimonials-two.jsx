import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function TestimonialSection() {
    const testimonials = [
        {
            name: 'Sohail Ahmed',
            role: 'DevOps Engineer, Adobe (USA)',
            avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
            content:
                "The real-time support helped me solve CI/CD deployment challenges during my AWS migration project at Amazon. The mentor explained everything clearly and quickly.",
        },
        {
            name: 'Irfan Mohammad',
            role: 'Java Developer, University of California (USA)',
            avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
            content:
                "The job support team was incredible! They helped me debug microservice communication issues in my Spring Boot application just before a major client demo.",
        },
        {
            name: 'Pooja',
            role: 'Cloud Engineer, FIS (USA)',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            content:
                "I was new to Azure DevOps and pipelines, but with step-by-step guidance, I mastered it. The mentors were professionals with strong hands-on experience.",
        },
        {
            name: 'Soham Patel',
            role: 'QA Automation Engineer, AMFAM (USA)',
            avatar: 'https://randomuser.me/api/portraits/women/48.jpg',
            content:
                "Their QA automation sessions were a lifesaver. I learned how to handle advanced Selenium and API frameworks — which directly improved my performance reviews.",
        },
        {
            name: 'Jaffar Ahmed',
            role: 'Site Reliability Engineer, ESRI (USA)',
            avatar: 'https://randomuser.me/api/portraits/men/58.jpg',
            content:
                "The best thing about this team is the 24/7 availability. I reached out at midnight for urgent SRE troubleshooting, and they immediately joined to resolve it.",
        },
    ]

    return (
        <section>
            <div className="bg-muted py-24">
                <div className="@container mx-auto w-full max-w-5xl px-6">
                    <div className="mb-12">
                        <h2 className="text-foreground text-4xl font-semibold">What Our Clients Say</h2>
                        <p className="text-muted-foreground my-4 text-balance text-lg">
                            Hear from IT professionals across top US companies who overcame complex technical challenges and interviews with our real-time project support.
                        </p>
                    </div>
                    <div className="@lg:grid-cols-2 @3xl:grid-cols-3 grid gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div key={index}>
                                <div
                                    className="bg-background ring-foreground/10 rounded-2xl rounded-bl border border-transparent px-4 py-3 ring-1">
                                    <p className="text-foreground">{testimonial.content}</p>
                                </div>
                                <div className="mt-4 flex items-center gap-2">
                                    <Avatar
                                        className="ring-foreground/10 size-6 border border-transparent shadow ring-1">
                                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="text-foreground text-sm font-medium">{testimonial.name}</div>
                                    <span aria-hidden className="bg-foreground/25 size-1 rounded-full"></span>
                                    <span className="text-muted-foreground text-sm">{testimonial.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
