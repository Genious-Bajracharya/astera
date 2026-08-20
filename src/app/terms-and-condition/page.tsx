const TermsConditions = () => {
  return (
    <div className="pt-32 pb-20 px-4 lg:px-0">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-14">
        <h1 className="heading1 text-black mb-4">Terms & Conditions</h1>
        <p className="text-gray-600 max-w-3xl">
          These terms govern your use of Astera Real Estate’s website and
          services.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12 space-y-10">
        <section>
          <h2 className="heading3 mb-3">Use of Website</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing this website, you agree to use it only for lawful
            purposes and in a way that does not infringe the rights of others.
          </p>
        </section>

        <section>
          <h2 className="heading3 mb-3">Property Information</h2>
          <p className="text-gray-700 leading-relaxed">
            All property listings are provided for informational purposes only
            and may be subject to change without notice.
          </p>
        </section>

        <section>
          <h2 className="heading3 mb-3">Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            Astera Real Estate shall not be liable for any direct or indirect
            damages arising from the use of this website.
          </p>
        </section>

        <section>
          <h2 className="heading3 mb-3">Governing Law</h2>
          <p className="text-gray-700 leading-relaxed">
            These terms shall be governed by and interpreted in accordance with
            the laws of the United Arab Emirates.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsConditions;
