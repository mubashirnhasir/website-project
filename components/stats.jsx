export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                {/* <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">Tailark in numbers</h2>
                    <p>Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
                </div> */}

                <div
                    className="grid gap-12 divide-y *:text-center md:grid-cols-5 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl  font-bold">5+</div>
                        <p>Years of Industry Experience</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">100%</div>
                        <p>Satisfied Customers</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">50+</div>
                        <p>Skilled Experts</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">24/7</div>
                        <p>Call Support</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">98%</div>
                        <p>Success Rate in Project Delivery</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
