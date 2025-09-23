"use client";

import React, { useState } from "react";
import { contactData } from "@/lib/siteData";
import { motion, AnimatePresence } from "framer-motion";
import Quiz from "./Quiz";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await Promise.all([
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }),
        delay(3000),
      ]);

      const fetchResponse = response[0] as Response;

      if (fetchResponse.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      id="contact"
      className="container max-w-[1320px] mx-auto px-5 md:px-10 xl:px-5 pb-12 pt-12 lg:pt-20"
    >

      {/* Grid Responsivo */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
        {/* Texto lateral */}
        <div>
          <h6 className="pl-[20px] relative font-outfit font-medium text-sm uppercase tracking-wider text-white/40 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-[12px] before:rounded-full before:border-2 before:border-white/30">
            {contactData.mainData.title}
          </h6>
          <h2 className="font-outfit font-medium text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mt-2">
            {contactData.mainData.title2}{" "}
            <span className="bg-themeGradient bg-clip-text text-transparent">
              {contactData.mainData.title2Span}
            </span>
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <h6 className="font-outfit font-medium uppercase text-sm tracking-wider text-white mb-1">
                E-mail:
              </h6>
              <h3 className="font-outfit font-medium text-lg md:text-2xl text-white">
                {contactData.mainData.email}
              </h3>
            </div>
            <div>
              <h6 className="font-outfit font-medium uppercase text-sm tracking-wider text-white mb-1">
                Telefone:
              </h6>
              <h3 className="font-outfit font-medium text-lg md:text-2xl text-white">
                {contactData.mainData.phone}
              </h3>
            </div>
          </div>
        </div>

        {/* Formulário */}
        <div className="lg:col-span-2">
          <form
            className="space-y-4"
            method="post"
            id="contactform"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="w-full bg-darkBg px-5 py-4 rounded-lg placeholder:text-white/40 text-white/70 focus:outline-none"
                type="text"
                id="name"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                className="w-full bg-darkBg px-5 py-4 rounded-lg placeholder:text-white/40 text-white/70 focus:outline-none"
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              className="w-full bg-darkBg px-5 py-4 rounded-lg placeholder:text-white/40 text-white/70 focus:outline-none"
              type="text"
              id="subject"
              name="subject"
              placeholder="Assunto"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              className="w-full bg-darkBg px-5 py-4 rounded-lg placeholder:text-white/40 text-white/70 h-[160px] focus:outline-none"
              name="message"
              id="message"
              placeholder="Mensagem"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <div className="flex justify-end">
              <button
                className={`inline-block relative group overflow-hidden bg-white/15 px-7 py-3 pr-11 rounded-3xl font-outfit font-medium uppercase text-sm tracking-wider text-white ${
                  status === "loading" ? "opacity-50 cursor-not-allowed" : ""
                }`}
                type="submit"
                disabled={status === "loading"}
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {status !== "idle" && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-darkBg rounded-xl p-8 text-center w-[320px] sm:w-[400px] shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {status === "loading" && (
                <>
                  <div className="w-10 h-10 border-4 border-white/30 border-t-themeGradient rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-white text-lg">Enviando</p>
                </>
              )}
              {status === "success" && (
                <>
                  <p className="text-green-500 text-xl font-semibold mb-2">
                    ✅ Sucesso!
                  </p>
                  <p className="text-white/80">Sua mensagem foi enviada.</p>
                </>
              )}
              {status === "error" && (
                <>
                  <p className="text-red-500 text-xl font-semibold mb-2">
                    ❌ Erro
                  </p>
                  <p className="text-white/80 mb-4">
                    Algo deu errado. Tente novamente.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-4 py-2 rounded-lg bg-white/15 hover:bg-white/25 transition text-white/80 text-sm"
                  >
                    Fechar
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Quiz */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={5}
      >
        <Quiz />
      </motion.div>
    </div>
  );
}
