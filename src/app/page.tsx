import { Metadata } from "next"
import { Button } from "@cc/components/Button/Button"
import { LP_GRID_ITEMS } from "@cc/lp-items"

export const metadata: Metadata = {
  title: "Cloud Context Waitlist",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://cloudcontext.cc/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/mathewlewallen/cloud-context-waitlist/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <section className="bg-background text-neutral-50">
        <div className="mx-auto grid max-w-(--breakpoint-xl) px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl">
              Cloud Context Waitlist
            </h1>
            <p className="mb-6 max-w-2xl font-light text-neutral-300 md:text-lg lg:mb-8 lg:text-xl">
              Join the waitlist to get early access to Cloud Context.
            </p>
            <Button href="https://github.com/mathewlewallen" className="mr-3 text-background">
              Follow on Github
            </Button>
            <Button
              href="https://github.com/mathewlewallen/cloud-context-waitlist"
              intent="secondary"
            >
              Fork this code for your own waitlist
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-background text-neutral-50">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LP_GRID_ITEMS.map((singleItem) => (
              <div
                key={singleItem.title}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="bg-primary-200 rounded-full p-1.5 mb-4 flex size-10 items-center justify-center lg:size-12">
                  {singleItem.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold">{singleItem.title}</h3>
                <p className="text-neutral-300">{singleItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
