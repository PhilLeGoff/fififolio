import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

type Props = {};

function ContactMe({}: Props) {
    const {register, handleSubmit} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:webbyphil65@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message}`
    };

  return (
    <div className="flex relative justify-center items-center px-10 mx-auto max-w-7xl h-screen text-center md:justify-evenly flex-column md:text-left md:flex-row">
      <h3 className="absolute top-20 uppercase tracking-[10px] text-gray-500 text-2xl">
        Contact Me
      </h3>
      <div className="flex flex-col space-y-5 w-screen">
        <h4 className="mt-14 mb-0 text-xl font-semibold text-center md:text-4xl">
          Want to work with me?{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let&apos;s talk!</span>
        </h4>
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center space-x-5">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="md:text-2xl">+33 0645023082</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="md:text-2xl">webbyphil@gmail.com</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="md:text-2xl">11 route du Côteau</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-3 space-y-2 md:mx-auto">
          <div className="flex flex-col space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
            <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
            <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
          </div>
          <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />
          <textarea {...register('message')} placeholder="Message" className="contactInput" />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
