const certificates = [
  {
    id: 1,
    title: "INTERNSHIP IBM : ADVANCED AI",
    issuer: "Infinite Learning",
    date: "Batam, 1 Juli 2024",
    image: "./images/sertifikat.png",
  },
  {
    id: 2,
    title: "Full Stack Developer Bootcamp",
    issuer: "Vocasia Academy",
    date: "Jakarta, 17 Desember 2024",
    image: "./images/sertifikat2.png",
  },
  {
    id: 3,
    title: "Belajar AJAX",
    issuer: "Codepolitan",
    date: "Jakarta, 10 Maret 2024",
    image: "./images/sertifikat3.png",
  },
];

const CertificatSection = () => {
  return (
    <section id="certificates" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-secondary font-semibold tracking-wide uppercase">
            Sertifikat
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[#f6c432] sm:text-4xl">
            Prestasi Saya
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Sertifikat yang saya peroleh melalui perjalanan belajar saya
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((card) => {
            return (
              <div
                key={card.id}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white border border-gray-700 hover:border-secondary transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={card.image}
                    alt={card.title}
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-secondary">
                      {card.issuer}
                    </p>
                    <a href="#" className="block mt-2">
                      <h3 className="text-xl font-semibold text-shadow-gray-600">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-base text-yellow-500">
                        Diterbitkan: {card.date}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="text-sm font-medium px-4 py-2 rounded-sm "
                    >
                      View certificate <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/certificates"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-secondary hover:bg-yellow-300"
          >
            View All Certificates
          </a>
        </div>
      </div>
    </section>
  );
};

export default CertificatSection;
