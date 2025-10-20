import { Logo } from '@/components/logo'
import Link from 'next/link'

const links = [
    {
        title: 'Home',
        href: '#',
    },
    {
        title: 'IT Recruitment',
        href: '#',
    },

]

export default function FooterSection() {
    return (
        <footer className="bg-muted py-16">
            <div className="mx-auto max-w-5xl px-6">
                <Link href="/" aria-label="go home" className="mx-auto block size-fit">
                    <img src="/logoname.svg" alt="" />
                </Link>

                <div className="my-8 flex flex-wrap justify-center gap-6">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {/* <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X/Twitter"
                        className="text-muted-foreground hover:text-primary block">
                        <svg
                            className="size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></path>
                        </svg>
                    </Link> */}
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-muted-foreground hover:text-primary block">
                        <svg
                            className="size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                        </svg>
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="text-muted-foreground hover:text-primary block">
                        <svg
                            className="size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
                        </svg>
                    </Link>
                    {/* <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Threads"
                        className="text-muted-foreground hover:text-primary block">
                        <svg
                            className="size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M19.25 8.505c-1.577-5.867-7-5.5-7-5.5s-7.5-.5-7.5 8.995s7.5 8.996 7.5 8.996s4.458.296 6.5-3.918c.667-1.858.5-5.573-6-5.573c0 0-3 0-3 2.5c0 .976 1 2 2.5 2s3.171-1.027 3.5-3c1-6-4.5-6.5-6-4"
                                color="currentColor"></path>
                        </svg>
                    </Link> */}
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-muted-foreground hover:text-primary block">
                        <svg
                            className="size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
                        </svg>
                    </Link>
                    <Link
                        href="https://wa.me/8985098161" // <-- replace with your real WhatsApp number (in international format)
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="text-muted-foreground hover:text-gray-800 flex items-center gap-2"
                    >
                        <svg
                            className="size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M20.52 3.48A11.82 11.82 0 0 0 12.06 0C5.47 0 .03 5.44.03 12.03c0 2.12.56 4.2 1.62 6.02L0 24l6.12-1.58a11.93 11.93 0 0 0 5.93 1.52h.01c6.6 0 12.03-5.44 12.03-12.03c0-3.21-1.25-6.23-3.57-8.43zM12.06 21.2a9.1 9.1 0 0 1-4.63-1.27l-.33-.2l-3.63.94l.97-3.54l-.23-.36a9.16 9.16 0 0 1-1.41-4.86c0-5.06 4.12-9.18 9.18-9.18c2.45 0 4.76.95 6.49 2.67a9.09 9.09 0 0 1 2.69 6.52a9.2 9.2 0 0 1-9.18 9.18zm5.17-6.9c-.28-.14-1.65-.82-1.91-.91c-.26-.1-.45-.14-.64.14c-.19.28-.74.91-.9 1.1c-.17.19-.33.21-.61.07a7.52 7.52 0 0 1-2.21-1.36a8.23 8.23 0 0 1-1.53-1.9c-.16-.27-.02-.42.12-.57c.13-.13.27-.33.4-.5c.14-.17.19-.28.28-.47c.09-.19.04-.35-.02-.5c-.07-.14-.64-1.55-.88-2.13c-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.35s-1 1-1 2.43s1.03 2.83 1.18 3.02c.14.19 2.03 3.1 4.92 4.34c.69.3 1.23.48 1.65.61c.69.22 1.31.19 1.8.12c.55-.08 1.65-.67 1.88-1.31c.23-.64.23-1.18.16-1.3c-.07-.11-.25-.18-.53-.32z"
                            />
                        </svg>
                        <span className="text-sm font-medium">+91 8985098161 </span>
                    </Link>


                </div>
                <span className="text-muted-foreground block text-center text-sm"> © {new Date().getFullYear()} Ninja Job Support, All rights reserved</span>
            </div>
        </footer>
    );
}
