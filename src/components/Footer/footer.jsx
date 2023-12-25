const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="flex flex-wrap">
        {/* Top Part */}
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="mr-[60px]">
            Avero Inc. is a multi-service engineering firm specializing in
            design, build, testing, certification, and support services for
            embedded flight systems & software, health technology, and advanced
            IT.
          </p>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-4">What We Do</h2>
          <ul className="leading-10">
            <li>Product development</li>
            <li>System Integration</li>
            <li>Test Automation</li>
            <li>Independent Verification & Validation</li>
            <li>Application Development</li>
            <li>Professional Services</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-4">Industries</h2>
          <ul className="leading-10">
            <li>Aerospace & Defense</li>
            <li>Medical Devices</li>
            <li>Digital Health</li>
            <li>Rail & Transportation</li>
          </ul>
        </div>

        {/* Bottom Part */}
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 mt-[60px]">
          <ul className="flex flex-col md:flex-row text-xs gap-4">
            <li className="mb-2 md:mb-0">Terms & Conditions</li>
            <li className="mb-2 md:mb-0">Privacy Policy</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 mt-[60px]">
          <ul className="flex flex-col md:flex-row gap-4">
            <li className="mb-2 md:mb-0">Culture</li>
            <li className="mb-2 md:mb-0">Career</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 mt-[60px]">
          <div className="flex gap-4" style={{ fontSize: "18px" }}>
            <a href="#" className="mr-4">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="mr-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
