import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import FAQ from '../../assets/images/FAQ.png'

const faqs = [
  {
    question: "What are the fees for selling using Evently?",
    answer: (
        <>
          We don't charge any fees for selling tickets. You keep all of what you earn from your events. Although there is a 1.5% + 20p processing payment for 
          <a href="https://support.stripe.com/questions/what-s-the-difference-between-standard-and-premium-cards" className="text-blue-600 underline" target='_blank'> standard UK cards</a> which is charged by Stripe.
        </>
      ), },
  {
    question: "How do I collect feedback from attendees?",
    answer:
      "You can collect feedback from attendees by sending out a survey after the event. You can also use the Evently platform to collect feedback from attendees. This is done upon your request.",
  },
  {
    question: "What tools are available for promoting my event?",
    answer:
      "There are many ways we can help you promote your event. We can help you create a marketing plan, and create a social media strategy. We can also promote your event within our platform.",
  },
  {
    question: "Can I offer discounts and promo codes?",
    answer:
      "Yes. You can generate discount code for your event, for both percentage and fixed amount discounts. You can also set the number of times a code can be used, and the date range for which it is valid.",
  },
  {
    question: "What types of events can I host on Evently?",
    answer:
      "We support a range of events, however the majorty of events are corporate events, networking events, and conferences. We also support webinars, workshops, and training sessions.",
  },
  {
    question: "Can I print attendee badges?",
    answer:
      "Yes. You can print attendee badges using the Evently platform. You can also print out a list of attendees, and their contact details.",
  },
  {
    question: "Can I customize the event page?",
    answer:
      "Yes. You can customize the event page to match your brand. You can add your logo, change the colors, and add images and videos.",
  },
  {
    question: "Can I host recurring events?",
    answer:
      "Yes. You can host recurring events on Evently. You can set the frequency of the event, and the number of times it will repeat.",
  },
  {
    question: "Are there any set up fees?",
    answer:
      "No. There are no set up fees for using Evently. You can create an account and start selling tickets for your event for free.",
  },
  // More questions...
]

export default function Faqs() {
  return (
    <div className="bg-white flex justify-around row">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40 flex flex-col lg:flex-row">
        <div className="flex-1 mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-16 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-[&:not([data-open])]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
        <div className="flex-1 mt-32">
          <img src={FAQ} className="w-full lg:w-auto h-auto mb-8 lg:mb-0 lg:mr-8" alt="FAQ" />
        </div>
      </div>
    </div>
  )
}
