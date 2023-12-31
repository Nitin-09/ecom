import React from "react";

function about() {
  return (
    <div className="text-white h-[91vh] bg-black  w-full">
      <div className="bg-black pt-32 sm:pt-28 lg:pt-24 px-5 md:px-20 h-full">
        <div className="flex flex-col h-full justify-center">
          <h1 className="text-white pt-10 font-extrabold text-xl">
            Contact Us
          </h1>
          <p>
            Thank you for reaching out to WHIZZ. We value your interest and are
            eager to assist you. <br /> Please feel free to contact us using the
            information provided below: <br />Customer Support If you have any
            questions, concerns, or need assistance with your order, our
            dedicated customer support team is ready to help. <br />
            Email: <a href="whizzclothing9@gmail.com" className="text-blue-400">Email</a> <br />
            Social Media <br />
            Connect with us on social media for the latest updates, promotions, and
            community discussions. <br />
          <a className="text-blue-400" href="https://www.instagram.com/whizz.in_?utm_source=ig_web_button_share_sheet&igsh=MmVlMjlkMTBhMg==">Instagram</a>
          <br />
            Feedback <br />
            We appreciate your feedback and suggestions. If you have
            any comments or ideas to share, <br />
            please email us at <a href="whizzclothing9@gmail.com" className="text-blue-400">Email</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default about;
