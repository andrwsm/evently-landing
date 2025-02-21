import CustomIcons from '../assets/icons';
import EventlyIcon from '../assets/eventlyLogos/EventlyIcon.png';
import EventlyLogo from '../assets/eventlyLogos/EventlyLogo.png';
import lookingDown from '../assets/images/lookingAtPhone.png';

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
    <div className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute top-5 right-10 w-48 h-48 bg-dot-pattern bg-[size:15px_15px]">
      </div>
      <div className="absolute inset-0 z-0 bg-no-repeat opacity-50" style={{ backgroundImage: `url(${EventlyIcon})`, backgroundSize: '70%', backgroundPosition: 'right 20% top -10%' }} />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-2xl font-semibold text-grey" style={{fontFamily: 'Montserrat, sans-serif'}}>Don't just learn it</h2>
              <p className="mt-2 text-7xl font-bold tracking-tight text-pretty text-grey sm:text-8xl" style={{fontFamily: 'Montserrat, sans-serif'}}> 
                BECOME IT
              </p>
              <p className="mt-6 text-base text-grey-600">
                Join us to elevate your corporate and networking events to the next level. Connect, collaborate, and create unforgettable experiences.
              </p>
              <button className="mt-6 px-6 py-2 border-2 border-gray-900 text-gray-900 font-semibold rounded-md hover:bg-gray-900 hover:text-white transition-colors duration-300">
                Work with us --Placeholder
              </button>
              <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-8 text-base/7 text-gray-600 lg:max-w-none lg:flex-nowrap">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-4 flex-shrink-0 w-full sm:w-auto lg:w-1/3 flex-grow-0">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-0 size-5 text--midnight-sky-600" />
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
            src={lookingDown}
            width={2432}
            height={1442}
            className="w-[36rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
