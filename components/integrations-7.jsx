import { Gemini, Replit, MagicUI, VSCodium, MediaWiki, GooglePaLM } from '@/components/logos'
import { LogoIcon } from '@/components/logo'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { InfiniteSlider } from '@/components/ui/infinite-slider'

export default function IntegrationsSection() {
    return (
        <section>
            <div className="bg-muted dark:bg-background py-24 md:py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div
                        className="bg-muted/25 group relative mx-auto max-w-[22rem] items-center justify-between space-y-6 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] sm:max-w-md">
                        <div
                            role="presentation"
                            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"></div>
                        <div>
                            <InfiniteSlider gap={24} speed={20} speedOnHover={10}>
                                <IntegrationCard>
                                    <img
                                        className="mx-auto h-6 w-fit dark:invert"
                                        src="/adobe.png"
                                        alt="adobe Logo"
                                        height="24"
                                        width="auto" />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <img
                                        className="mx-auto h-6 w-fit dark:invert"
                                        src="/physics.png"
                                        alt="react Logo"
                                        width="auto" />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <img
                                        className="mx-auto h-6 w-fit dark:invert"
                                        src="/devops.png"
                                        alt="OpenAI Logo"
                                        height="24"
                                        width="auto" />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <img
                                        className="mx-auto h-6 w-fit dark:invert"
                                        src="/logo.png"
                                        alt="OpenAI Logo"
                                        height="24"
                                        width="auto" />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <img
                                        className="mx-auto h-6 w-fit dark:invert"
                                        src="/java.png"
                                        alt="OpenAI Logo"
                                        height="24"
                                        width="auto" />
                                </IntegrationCard>
                            </InfiniteSlider>
                        </div>

                        <div>
                            <InfiniteSlider gap={24} speed={20} speedOnHover={10} reverse>
                                <IntegrationCard>
                                    <img
                                        className="mx-auto h-6 w-fit dark:invert"
                                        src="/adobe.png"
                                        alt="adobe Logo"
                                        height="24"
                                        width="auto" />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <img
                                        className="mx-auto h-6 w-fit dark:invert"
                                        src="/physics.png"
                                        alt="react Logo"
                                        width="auto" />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <img
                                        className="mx-auto h-6 w-fit dark:invert"
                                        src="/devops.png"
                                        alt="OpenAI Logo"
                                        height="24"
                                        width="auto" />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <img
                                        className="mx-auto h-6 w-fit dark:invert"
                                        src="/logo.png"
                                        alt="OpenAI Logo"
                                        height="24"
                                        width="auto" />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <img
                                        className="mx-auto h-6 w-fit dark:invert"
                                        src="/java.png"
                                        alt="OpenAI Logo"
                                        height="24"
                                        width="auto" />
                                </IntegrationCard>
                            </InfiniteSlider>
                        </div>
                        <div>
                            <InfiniteSlider gap={24} speed={20} speedOnHover={10}>
                                <IntegrationCard>
                                    <img
                                        className="mx-auto h-6 w-fit dark:invert"
                                        src="/adobe.png"
                                        alt="adobe Logo"
                                        height="24"
                                        width="auto" />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <img
                                        className="mx-auto h-6 w-fit dark:invert"
                                        src="/physics.png"
                                        alt="react Logo"
                                        width="auto" />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <img
                                        className="mx-auto h-6 w-fit dark:invert"
                                        src="/devops.png"
                                        alt="OpenAI Logo"
                                        height="24"
                                        width="auto" />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <img
                                        className="mx-auto h-6 w-fit dark:invert"
                                        src="/logo.png"
                                        alt="OpenAI Logo"
                                        height="24"
                                        width="auto" />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <img
                                        className="mx-auto h-6 w-fit dark:invert"
                                        src="/java.png"
                                        alt="OpenAI Logo"
                                        height="24"
                                        width="auto" />
                                </IntegrationCard>
                            </InfiniteSlider>
                        </div>
                        <div className="absolute inset-0 m-auto flex size-fit justify-center gap-2">
                            <IntegrationCard
                                className="shadow-black-950/10 size-18 bg-white/60 shadow-xl backdrop-blur-md backdrop-grayscale dark:border-white/10 dark:shadow-white/15"
                                isCenter={true}>
                                <img src="/logodark.svg" alt="logo" />
                            </IntegrationCard>
                        </div>
                    </div>
                    <div className="mx-auto mt-12 max-w-lg space-y-6 text-center">
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl">Available Across All Major Tech Stacks</h2>
                        <p className="text-muted-foreground">We cover DevOps, Cloud, Data, Development, QA, and Automation — offering expert-level support across tools like AWS, Azure, Jenkins, Terraform, Docker, Kubernetes, Java, Python, Adobe Suite and more.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

const IntegrationCard = ({
    children,
    className,
    isCenter = false
}) => {
    return (
        <div
            className={cn('bg-background relative z-20 flex size-12 rounded-full border', className)}>
            <div className={cn('m-auto size-fit *:size-5', isCenter && '*:size-8')}>{children}</div>
        </div>
    );
}
