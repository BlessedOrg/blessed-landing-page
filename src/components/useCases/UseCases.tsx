import Image from "next/image";

export const UseCases = () => {
  return (
    <section
      className="flex flex-col justify-center items-center py-16"
      style={{
        background: "linear-gradient(247.1deg, #FFFACD 0%, #FFFFFF 67%)",
      }}
    >
      <div
        className="flex items-center flex-row-reverse mb-16"
        style={{ width: "1280px" }}
      >
        <div
          className="rounded-lg flex items-center justify-center"
          style={{
            width: "624px",
            height: "576px",
            backgroundColor: "#EFEFEF",
          }}
        >
          <Image
            src="/img/icons/coffe.svg"
            alt="Event Icon"
            width={200}
            height={200}
          />
        </div>

        <div className="mr-16" style={{ width: "547px" }}>
          <h2 className="font-bold uppercase text-3xl md:text-6xl text-center mb-10">
            Conferences
          </h2>

          <div className="flex items-start mb-10">
            <Image
              src="/img/icons/Check.svg"
              alt="Check Icon"
              width={24}
              height={24}
              className="mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Easy integration and management
              </h3>
              <p className="text-gray-600">
                Seamlessly integrate our platform into your existing systems.
                Manage ticket with ease, allowing you to focus on delivering a
                great experience while we handle the back-end complexities.
              </p>
            </div>
          </div>

          <div className="flex items-start mb-10">
            <Image
              src="/img/icons/Check.svg"
              alt="Check Icon"
              width={24}
              height={24}
              className="mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Radical transparency
              </h3>
              <p className="text-gray-600">
                Ensure transparency in how access is granted. Our platform uses
                fair methods like lotteries and auctions, so participants trust
                the process and feel assured that everyone has an equal chance.
              </p>
            </div>
          </div>

          <div className="flex items-start mb-10">
            <Image
              src="/img/icons/Check.svg"
              alt="Check Icon"
              width={24}
              height={24}
              className="mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Fair access for all
              </h3>
              <p className="text-gray-600">
                Break down traditional barriers like location or timing. Our
                system ensures that every participant has a fair shot at ticket,
                regardless of where they are or how fast they can act..
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center mb-16" style={{ width: "1280px" }}>
        <div
          className="rounded-lg flex items-center justify-center"
          style={{
            width: "624px",
            height: "576px",
            backgroundColor: "#FFFACD",
          }}
        >
          <Image
            src="/img/icons/party-popper.svg"
            alt="Event Icon"
            width={200}
            height={200}
          />
        </div>

        <div className="ml-16" style={{ width: "547px" }}>
          <h2 className="font-bold uppercase text-3xl md:text-6xl text-center mb-10">
            Music & Festival Events
          </h2>

          <div className="flex items-start mb-10">
            <Image
              src="/img/icons/Check.svg"
              alt="Check Icon"
              width={24}
              height={24}
              className="mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Effortless integration
              </h3>
              <p className="text-gray-600">
                Add our platform as an extra service to your current setup
                without disruption. Simplify how you manage ticketing, letting
                you deliver an exceptional event experience while we take care
                of the logistics.
              </p>
            </div>
          </div>

          <div className="flex items-start mb-10">
            <Image
              src="/img/icons/Check.svg"
              alt="Check Icon"
              width={24}
              height={24}
              className="mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Radical transparency
              </h3>
              <p className="text-gray-600">
                Offer your audience a transparent and fair way to gain a ticket.
                Our methods ensure everyone knows the process is unbiased and
                equitable.
              </p>
            </div>
          </div>

          <div className="flex items-start mb-10">
            <Image
              src="/img/icons/Check.svg"
              alt="Check Icon"
              width={24}
              height={24}
              className="mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Fair access for all
              </h3>
              <p className="text-gray-600">
                Level the playing field by ensuring fair access to your events,
                regardless of audience location or other potential barriers. Our
                system is designed to be inclusive and equitable.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex items-center flex-row-reverse"
        style={{ width: "1280px" }}
      >
        <div
          className="rounded-lg flex items-center justify-center"
          style={{
            width: "624px",
            height: "576px",
            backgroundColor: "#000000",
          }}
        >
          <Image
            src="/img/icons/pacman-white.svg"
            alt="Event Icon"
            width={200}
            height={200}
          />
        </div>

        <div className="mr-16" style={{ width: "547px" }}>
          <h2 className="font-bold uppercase text-3xl md:text-6xl text-center mb-10">
            Gaming Events
          </h2>

          <div className="flex items-start mb-10">
            <Image
              src="/img/icons/Check.svg"
              alt="Check Icon"
              width={24}
              height={24}
              className="mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Seamless integration and management
              </h3>
              <p className="text-gray-600">
                Easily integrate our platform with your current systems to
                enhance your ticket management. Focus on creating great gaming
                experiences while we handle the technical side.
              </p>
            </div>
          </div>

          <div className="flex items-start mb-10">
            <Image
              src="/img/icons/Check.svg"
              alt="Check Icon"
              width={24}
              height={24}
              className="mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Radical transparency
              </h3>
              <p className="text-gray-600">
                Provide your gaming community with a clear and transparent
                ticket process. Our fair methods, like auctions and lotteries,
                build trust and ensure everyone has an equal opportunity to
                participate.
              </p>
            </div>
          </div>

          <div className="flex items-start mb-10">
            <Image
              src="/img/icons/Check.svg"
              alt="Check Icon"
              width={24}
              height={24}
              className="mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Fair access for all
              </h3>
              <p className="text-gray-600">
                Ensure that access isn’t determined by external factors like
                location or speed. Our platform offers a fair chance for
                everyone to participate, making your events more inclusive and
                engaging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
