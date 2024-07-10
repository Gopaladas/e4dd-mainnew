import React from "react";
import "./CyberSecurity.css";

const SecurityServices = () => {
  const h2Styles = {
    background: "linear-gradient(to right, #f43c6e, #5cb5e6)",
    // WebkitBackgroundClip: 'text',
    // WebkitTextFillColor: 'transparent',
    color: "#33ffdc",
    fontFamily: "Helvetica, sans-serif",
    padding: "10px",
    marginTop: "-30px",
    borderRadius: "5px", // Optional: add some border radius
    animation: "fadeInUp 1s ease-in-out",
  };

  const fadeInUpKeyframes = `
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  return (
    <section className="relative py-12 px-4 bg-gray-100">
      <div className="absolute inset-0 z-0">
        <img
          className="object-cover w-full h-full"
          src="./cybersecurity/cs2.jpg"
          alt="Cybersecurity"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <style>{fadeInUpKeyframes}</style>
        <h2
          style={h2Styles}
          className="text-3xl lg:text-4xl font-bold text-center mb-8"
        >
          Security Operations and Response Services
        </h2>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent hover:bg-transparent">
            Why Choose Elite for Digital Development Security Services?
          </h3>

          <div className="flex flex-wrap justify-center">
            {/* Card 1 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 group">
              <div
                className="bg-cover bg-center h-64"
                style={{ backgroundImage: 'url("./cybersecurity/bcs1.jpg")' }}
              >
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-gradient">
                    Adaptive Cyber Defense
                  </h4>
                  <p className="text-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 bg-transparent hover:bg-black bg-opacity-50">
                    Build an adaptive, flexible, and scalable cyber defense with
                    Elite's Security Operations and Response Services. Our
                    services are designed to evolve with your business,
                    providing you with the agility and resilience needed to
                    combat evolving cyber threats effectively.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 group">
              <div
                className="bg-cover bg-center h-64"
                style={{ backgroundImage: 'url("./cybersecurity/bcs2.jpg")' }}
              >
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-gradient">
                    Comprehensive Security Solutions
                  </h4>
                  <p className="text-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 bg-transparent hover:bg-black bg-opacity-50">
                    Our end-to-end security and resiliency services, powered by
                    AI and automation, enable us to assess, advise, implement,
                    and deliver comprehensive managed services tailored to your
                    unique needs. From anticipation to recovery, Elite helps you
                    fortify your defenses and respond swiftly to cyberattacks.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 group">
              <div
                className="bg-cover bg-center h-64"
                style={{ backgroundImage: 'url("./cybersecurity/bcs3.jpg")' }}
              >
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-gradient">
                    Flexible Operating Model
                  </h4>
                  <p className="text-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 bg-transparent hover:bg-black bg-opacity-50">
                    With Elite, businesses can flexibly select the tools and
                    operating model they need to address different challenges
                    and requirements across regions. Our services ensure
                    compliance and data processing needs are met while providing
                    the flexibility to deploy capabilities where they are needed
                    most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold text-purple-800 mb-4">
            Explore Elite's Security Services:
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="p-6 bg-white rounded-lg shadow-md border-4 border-gradient-blue">
              <h4 class="text-xl font-semibold mb-2 text-gradient-purple">
                Security Operations Center (SOC)
              </h4>
              <p class="text-gray-700">
                Our global Security Operations Center provides comprehensive
                support and protection against cyber threats using AI, machine
                learning, and integrated automation systems. Whether you
                integrate our experts with your existing security teams or fully
                outsource cybersecurity operations to Elite, we bridge the
                skills gap and simplify security operations.
              </p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-md border-4 border-gradient-blue">
              <h4 class="text-xl font-semibold mb-2 text-gradient-purple">
                Security Operations as a Platform
              </h4>
              <p class="text-gray-700">
                Our Security Operations platform offers a standard, dedicated,
                and secure infrastructure that integrates essential managed
                detection and response building blocks. Through Security
                Orchestration, Automation, and Response (SOAR), Security
                Information and Event Management (SIEM), Endpoint Detection and
                Response (EDR), and Vulnerability Management, we provide an
                integrated and automated ecosystem to detect and respond to
                threats swiftly.
              </p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-md border-4 border-gradient-blue">
              <h4 class="text-xl font-semibold mb-2 text-gradient-purple">
                Cybersecurity Incident Response and Forensics (CSIRF)
              </h4>
              <p class="text-gray-700">
                In the event of a cyber disruption, Elite's Cybersecurity
                Incident Response and Forensics (CSIRF) service offers threat
                detection and incident response to boost the efficiency of
                security operations. Our team provides on-demand, hands-on
                support to assist in resolving threats and safeguarding your
                business against cyber threats like ransomware.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityServices;
