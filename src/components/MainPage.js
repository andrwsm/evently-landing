import CustomIcons from '../assets/icons'

const features = [
  {
    name: 'Keep Your Profits.',
    description: 'Your profits are your own. Keep all of what you earn from your events with no hidden fees.',
    icon: CustomIcons.find(icon => icon.name === 'MoneyIcon').component,
  },
  {
    name: 'Easy To Use.',
    description: 'Our platform designed to be easy to use and easy to understand. No need to be a tech wizard.',
    icon: CustomIcons.find(icon => icon.name === 'TicketIcon').component,
  },
  {
    name: 'Client First',
    description: 'You are our priority. We will always be here to help you with any issues you may have.',
    icon: CustomIcons.find(icon => icon.name === 'UserIcon').component,
  },

]

export default function LandingPage() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-grey" style={{fontFamily: 'Montserrat, sans-serif'}}>Don't just learn it</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-pretty text-grey sm:text-5xl" style={{fontFamily: 'Montserrat, sans-serif'}}> 
                BECOME IT
              </p>
              <p className="mt-6 text-lg/8 text-grey-600">
                Join us to elevate your corporate and networking events to the next level. Connect, collaborate, and create unforgettable experiences.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text--midnight-sky-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://tailwindui.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
