import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { yoenPic1 } from "../assets";
import "../index.css";

const InputField = ({ label, value, onChange, placeholder, name, type }) => (
  <label className="flex flex-col">
    <span className="text-ink font-medium mb-4">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-ink rounded-lg outline-none border-none font-medium"
    />
  </label>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setNameError("");
    setConfirmation("");

    if (!validateEmail(form.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!form.name.trim()) {
      setNameError("Name is required.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_r2i0by4",
        "template_mf5x3bh",
        {
          from_name: form.name,
          to_name: "Yoen Zhang",
          from_email: form.email,
          to_email: "yoenzhang@gmail.com",
          message: form.message,
        },
        "p-gXzzyvEhPaJ0XA-"
      )
      .then(
        () => {
          setLoading(false);
          setConfirmation("Thank you! I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        }
      )
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setConfirmation("Something went wrong. Please try again. :/");
      });
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-tertiary border border-ink/10 p-8 rounded-2xl shadow-card">
        <div className="hud-frame relative overflow-hidden h-[380px] mb-6">
          <span className="hud-bl" />
          <span className="hud-br" />
          <img
            src={yoenPic1}
            alt="Argentina"
            className="absolute inset-0 w-full h-full object-cover object-[50%_80%] grayscale-[10%] contrast-[1.05]"
            loading="lazy"
          />
          <div className="absolute inset-0 hud-scanlines pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/50 to-ink/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-3 left-3 font-mono-hud text-[11px] text-[#0d8a6e] bg-primary/85 px-2 py-0.5">
            IMG_05
          </div>
          <div className="absolute top-3 right-3 font-mono-hud text-[11px] text-[#0d8a6e] bg-primary/85 px-2 py-0.5">
            STILL_EXPLORING / ARGENTINA
          </div>
          <div className="absolute bottom-5 left-6 right-6">
            <p className="font-mono-hud text-[11px] text-[#0d8a6e]">
              <span>&gt; </span>[ 06 // TRANSMIT ]
            </p>
            <h3 className="text-primary font-black md:text-[44px] sm:text-[38px] text-[30px] leading-tight mt-1">
              Contact Me.
            </h3>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <InputField
            label="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Insert Your name here..."
            type="text"
          />
          {nameError && <span className="text-red-500">{nameError}</span>}

          <InputField
            label="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email address?"
            type="email"
          />
          {emailError && <span className="text-red-500">{emailError}</span>}

          <InputField
            label="Your Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What you want to say...?"
            type="text"
          />

          <button
            type="submit"
            className="hud-frame bg-tertiary py-3 px-8 outline-none w-fit text-ink font-mono-hud font-bold hover:bg-[#E0D9C2] transition-colors relative"
          >
            <span className="hud-bl" />
            <span className="hud-br" />
            {loading ? "TRANSMITTING..." : "> SEND"}
          </button>
          {confirmation && <p className="text-green-500">{confirmation}</p>}
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
