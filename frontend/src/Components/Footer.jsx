import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-yellow-600 lg:grid lg:grid-cols-5">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <img
          src="/Assets/Image/footerimg.jpg"
          alt="Office Building"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs tracking-wide text-gray-500 uppercase"> Call us </span>

              <a href="tel:0123456789" className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
                0123456789
              </a>
            </p>

            <ul className="mt-8 space-y-1 text-sm text-gray-700">
              <li>Monday to Friday: 9am - 6pm</li>
              <li>Weekend: Closed</li>
            </ul>

            <ul className="flex gap-6 mt-8">
              <li>
                <a
                  href="https://www.facebook.com/ChuzeLearning"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/ChuzeLearning"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.63c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.467.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058h.63c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.023.058-1.351.058-3.807v-.63c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857-.182-.467-.398-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058h-.63z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M12 5.994c-3.315 0-6.006 2.691-6.006 6.006 0 3.315 2.691 6.006 6.006 6.006 3.315 0 6.006-2.691 6.006-6.006 0-3.315-2.691-6.006-6.006-6.006zM12 4.2c-4.295 0-7.8 3.505-7.8 7.8s3.505 7.8 7.8 7.8 7.8-3.505 7.8-7.8-3.505-7.8-7.8-7.8zm6.406 2.55a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/ChuzeLearning"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">LinkedIn</span>

                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M16 8a6 6 0 00-4.473 10.073v.002H8v-.001C8 15.093 8 10.907 8 10.907H11V8H8V8a2 2 0 012-2h5a2 2 0 012 2v2h-3v2.907h3V18h-3v.073A6.001 6.001 0 0016 8zm-2.5 3.5h-1v4.5h1v-4.5zm3.5 0h-1v4.5h1v-4.5zm-5 0h-1v4.5h1v-4.5zM8 7a2 2 0 10-4 0 2 2 0 004 0zM6 9a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900">Our Services</p>

            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>
                <Link to="/services/online-courses" className="transition hover:opacity-75">
                  Online Courses
                </Link>
              </li>

              <li>
                <Link to="/services/tutoring" className="transition hover:opacity-75">
                  Tutoring
                </Link>
              </li>

              <li>
                <Link to="/services/consulting" className="transition hover:opacity-75">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900">Company</p>

            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>
                <Link to="/about" className="transition hover:opacity-75">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/careers" className="transition hover:opacity-75">
                  Careers
                </Link>
              </li>

              <li>
                <Link to="/contact" className="transition hover:opacity-75">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
