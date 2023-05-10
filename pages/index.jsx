import SignupForm from '../components/SignupForm';
import { CalendarIcon } from "@heroicons/react/outline"

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl pb-20 lg:pt-10 grid lg:grid-cols-2 lg:gap-x-10 px-8 lg:py-20">
          <div className="px-6 lg:px-0 lg:pt-4 mt-16 lg:mx-0 lg:mt-0 md:mx-auto md:max-w-2xl">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <ul className="mt-6 text-lg leading-7 text-primary list-outside list-['\2713']">
                  <li className="pl-2">5 day course + 2 bonus sessions</li>
                  <li className="pl-2">Over 5000 words</li>
                  <li className="pl-2">3 simple powerful principles</li>
                  <li className="pl-2">5 intuitive insights</li>
                  <li className="pl-2">Understand key trends from the rise of the tech giants to the election of Donald Trump.</li>
                  <li className="pl-2">Simple frameworks you can start using to build sustainable digital businesses and ecosystems, today.</li>
                </ul>
                <h1 className="mt-10 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                  Everything you need to start understanding 
                  the digital world as a citizen, entrepreneur
                  and policy-maker.
                </h1>
                <p className="mt-6 text-lg leading-7 text-primary">
                  Written by Rufus Pollock and Theo Cox,
                  creators of the Open Revolution
                  and advisers on digital strategy
                  to governments, IGOs and companies for over two decades.
                </p>
                <div className="">
                  
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-2xl mt-16 lg:mx-0 lg:mt-0 order-first">
            <div className="px-4 py-6 sm:p-10 border shadow-sm rounded-3xl">
              <div className="relative">
                <h2 className="text-center text-2xl text-primary font-semibold font-headings">
                  Understanding the digital economy in 5 days
                </h2>
              </div>
              {/* Book cover */}
              <div className="py-10">
                <div className="relative bg-secondary grid grid-flow-row grid-rows-3 justify-center h-[400px] w-[300px] mx-auto shadow-2xl rounded-sm ring-1 ring-gray-900/10 sm:px-3">
                  <h3 className="pt-6 text-md text-center font-medium">
                    🗺️ The Diginomics Introductory Masterclass
                  </h3>
                  <p className="self-center px-16 text-2xl font-semibold text-center flex flex-col gap-1 max-w-xs mx-auto">
                    <span>How to Understand</span>
                    <span className="font-extrabold text-4xl">Digital Economics</span>
                  </p>
                  <span className="pb-6 self-end font-medium text-xs text-center">by <br/> Rufus Pollock and Theo Cox</span>
                </div>
              </div>
              <div>
                <p className="text-primary text-center text-lg py-4">Key principles learned over 20 years in a simple guide.</p>
              </div>
              <div className="pt-4">
                <SignupForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-6 grid max-w-2xl gap-y-6 lg:mt-0 lg:max-w-7xl pb-24 lg:pb-20">
        <div className="px-8 lg:px-16 md:mx-auto space-y-8">
          <div>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-primary sm:text-3xl text-center sm:text-left">
              Want to make sure this course is worth it before you sign up?
            </h1>
            <p className="mt-12 text-xl text-primary">
              Here’s everything that’s covered:
            </p>
            <ul role="list" className="mt-6 space-y-8 text-lg leading-7 text-primary">
              <li className="flex gap-x-3">
                <CalendarIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold underline underline-offset-4">Day 1:</strong> Why using the right mental model for the digital world is so important
                </span>
              </li>
              <li className="flex gap-x-3">
                <CalendarIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold underline underline-offset-4">Day 2:</strong> Why data is different and bits aren’t equivalent to atoms
                </span>
              </li>
              <li className="flex gap-x-3">
                <CalendarIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold underline underline-offset-4">Day 3:</strong> Understand the implications of data being costlessly copyable 
                </span>
              </li>
              <li className="flex gap-x-3">
                <CalendarIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold underline underline-offset-4">Day 5 (Bonus):</strong> Fancy economic terminology to wow your friends with
                </span>
              </li>
            </ul>
          </div>
          <div>
            <form
              method="POST"
              action="https://1ebb0834.sibforms.com/serve/MUIEABg79115rPtMI1fZhLoYmKiTdVgnX9y2kqJ2yyzRMcv_w3UsqZZV0CfFLdQsyyVVof0kHf012lqXLGL3aNloY3_yzN7OQyUxiMMWiTHJziOPYJXjbjX2CSNSHXrKU7brIv_gnrtlDXL03YzznNOPlPyXzUGktiyU0WUdfyR9dmsxq5Zal1JWKa8J_SykSjOF6aM8NOn5nIFU"
              data-type="subscription"
              className="flex flex-col items-center sm:items-start gap-y-4 max-w-sm"
            >
              <label htmlFor="EMAIL" className="sr-only">
                Email address
              </label>
              <input
                id="EMAIL"
                name="EMAIL"
                type="email"
                autoComplete="email"
                required
                className="w-full min-w-0 flex-auto rounded-md border bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-primary focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-3 w-full max-w-xs sm:justify-self-start rounded-md border border-transparent bg-primary px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:mt-0"
              >
                Sign me up to the masterclass and send me lesson 1
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
