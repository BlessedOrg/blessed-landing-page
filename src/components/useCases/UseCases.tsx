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

      {/* Основная секция */}
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

      {/* Нижняя зеркальная секция */}
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
            src="/img/icons/pacman.svg"
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
    </section>
  );
};
