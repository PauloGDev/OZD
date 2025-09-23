"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Question = {
  id: number;
  question: string;
  options: string[];
};

const questions: Question[] = [
  { id: 1, question: "👉 Qual é o foco principal do seu projeto?", options: ["Branding", "Design Editorial", "Conteúdo Digital", "Audiovisual", "Motion"] },
  { id: 2, question: "👉 Qual é o seu maior objetivo?", options: ["Aumentar autoridade", "Gerar vendas", "Fortalecer marca", "Comunicação institucional"] },
  { id: 3, question: "👉 Qual é o prazo desejado?", options: ["Urgente (1-2 semanas)", "Curto (até 1 mês)", "Médio (2-3 meses)", "Sem pressa"] },
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [clientData, setClientData] = useState({ name: "", phone: "", email: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [quizStarted, setQuizStarted] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [customMessage, setCustomMessage] = useState("");

  const questionRefs = useRef<HTMLDivElement[]>([]);
  const sendButtonRef = useRef<HTMLDivElement | null>(null);

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (digits.startsWith("55")) {
      const country = "+55 ";
      const rest = digits.slice(2);
      if (rest.length <= 2) return country + rest;
      if (rest.length <= 7) return country + `(${rest.slice(0, 2)}) ${rest.slice(2)}`;
      return country + `(${rest.slice(0, 2)}) ${rest.slice(2, 7)}-${rest.slice(7, 11)}`;
    } else {
      if (digits.length <= 2) return `(${digits}`;
      if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientData({ ...clientData, phone: formatPhone(e.target.value) });
  };

  const startQuiz = () => {
    setShowErrors(true);
    const isPhoneValid = clientData.phone.replace(/\D/g, "").length >= 10;
    const isEmailValid = isValidEmail(clientData.email);
    if (!clientData.name || !isPhoneValid || !isEmailValid) return;

    setQuizStarted(true);
    setStep(0);
    setAnswers([]);
  };

  const handleAnswer = (answer: string, index: number) => {
    setAnswers((prev) => [...prev, answer]);
    setStep((prev) => prev + 1);

    setTimeout(() => {
      if (index + 1 < questions.length) {
        const nextEl = questionRefs.current[index + 1];
        if (nextEl) nextEl.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // final do quiz: scroll para os botões de envio
        if (sendButtonRef.current) {
          sendButtonRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    }, 100);
  };

  const restartQuiz = () => {
    setAnswers([]);
    setStep(0);
    setQuizStarted(false);
    setClientData({ name: "", phone: "", email: "" });
    setStatus("idle");
    setShowErrors(false);
    setCustomMessage("");
  };

  const getOrganizedMessage = (forEmail: boolean = false) => {
    const messageContent = `
📌 Diagnóstico do Quiz

👤 Nome: ${clientData.name}
📞 Telefone: ${clientData.phone}
📧 Email: ${clientData.email}

📝 Respostas do Quiz:
1️⃣ Foco do projeto: ${answers[0] || "-"}
2️⃣ Objetivo: ${answers[1] || "-"}
3️⃣ Prazo desejado: ${answers[2] || "-"}

${customMessage ? `💬 Mensagem personalizada:\n${customMessage}` : ""}
    `;
    if (forEmail) {
      return `
<p>📌 <strong>Diagnóstico do Quiz</strong></p>
<p>👤 <strong>Nome:</strong> ${clientData.name}</p>
<p>📞 <strong>Telefone:</strong> ${clientData.phone}</p>
<p>📧 <strong>Email:</strong> ${clientData.email}</p>
<p>📝 <strong>Respostas do Quiz:</strong></p>
<ul>
  <li>1️⃣ Foco do projeto: ${answers[0] || "-"}</li>
  <li>2️⃣ Objetivo: ${answers[1] || "-"}</li>
  <li>3️⃣ Prazo desejado: ${answers[2] || "-"}</li>
</ul>
${customMessage ? `<p>💬 <strong>Mensagem personalizada:</strong></p><p>${customMessage}</p>` : ""}
      `;
    }
    return messageContent;
  };

  const whatsappLink = `https://wa.me/558597089722?text=${encodeURIComponent(getOrganizedMessage())}`;

  const handleEmailSubmit = async () => {
    setShowErrors(true);
    const isPhoneValid = clientData.phone.replace(/\D/g, "").length >= 10;
    const isEmailValid = isValidEmail(clientData.email);
    if (!clientData.name || !isPhoneValid || !isEmailValid) return;

    // scroll para os botões de envio
    if (sendButtonRef.current) sendButtonRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

    setStatus("loading");
    try {
      const response = await Promise.all([
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...clientData, message: getOrganizedMessage(true) }),
        }),
        new Promise((res) => setTimeout(res, 2000)),
      ]);
      const fetchResponse = response[0] as Response;
      if (fetchResponse.ok) {
        setStatus("success");
        setTimeout(() => setStatus("idle"), 2000);
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="container max-w-[700px] mx-auto px-5 md:px-10 xl:px-5 pb-20 pt-12">
      <h2 className="text-center font-outfit font-semibold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
        🤔 Não tem certeza do que seu projeto realmente precisa?
      </h2>
      <p className="text-center text-white/70 text-base md:text-lg mb-10">
        Responda a algumas perguntas rápidas e descubra de forma prática onde focar seus esforços.
      </p>

      <div className="bg-darkBg/80 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/10">
        {!quizStarted && (
          <div className="space-y-6">
            <h3 className="text-white font-medium text-lg mb-2">📧 Seus dados para contato</h3>
            <div className="flex flex-col space-y-4">
              {/* Nome */}
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={clientData.name}
                  autoComplete="name"
                  onChange={(e) => setClientData({ ...clientData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-darkBg/50 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                {showErrors && !clientData.name && (
                  <span className="text-red-500 text-sm mt-1">⚠️ O nome é obrigatório</span>
                )}
              </div>
              {/* Telefone */}
              <div className="flex flex-col">
                <input
                  type="tel"
                  placeholder="Telefone"
                  value={clientData.phone}
                  autoComplete="tel"
                  onChange={handlePhoneChange}
                  className="w-full px-4 py-3 rounded-lg bg-darkBg/50 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                {showErrors && clientData.phone.replace(/\D/g, "").length < 10 && (
                  <span className="text-red-500 text-sm mt-1">⚠️ Telefone inválido</span>
                )}
              </div>
              {/* Email */}
              <div className="flex flex-col">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Seu e-mail"
                  value={clientData.email}
                  autoComplete="email"
                  onChange={(e) =>
                    setClientData({ ...clientData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-darkBg/50 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                />
                {showErrors &&
                  clientData.email &&
                  !isValidEmail(clientData.email) && (
                    <span className="text-red-500 text-sm mt-1">
                      ⚠️ E-mail inválido
                    </span>
                  )}
              </div>
            </div>

            <button
              onClick={startQuiz}
              className="w-full mt-4 px-6 py-3 rounded-full bg-themeGradient text-white font-medium shadow-md hover:brightness-110 transition"
            >
              Iniciar Quiz
            </button>
          </div>
        )}

        {quizStarted && (
          <div className="flex flex-col gap-6 mt-6">
            <AnimatePresence mode="wait">
              {answers.map((ans, i) => (
                <motion.div
                  key={`answer-${i}`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-2"
                >
                  <div className="max-w-[80%] bg-darkBg/70 text-white p-5 rounded-2xl border border-white/10 shadow-md">
                    {questions[i].question}
                  </div>
                  <div className="max-w-[70%] ml-auto bg-darkBg/60 text-white p-5 rounded-2xl border border-white/10 shadow-inner">
                    {answers[i]}
                  </div>
                </motion.div>
              ))}

              {step < questions.length && (
                <motion.div
                  key={questions[step].id}
                  ref={(el) => { if (el) questionRefs.current[step] = el; }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <div className="bg-darkBg/70 p-5 rounded-2xl border text-white border-white/10 shadow-md">
                    {questions[step].question}
                  </div>
                  {questions[step].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt, step)}
                      className="w-full text-left px-5 py-3 rounded-lg bg-darkBg/50 border border-white/20 text-white hover:bg-white/10 transition"
                    >
                      {opt}
                    </button>
                  ))}
                </motion.div>
              )}

              {step === questions.length && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h3 className="text-white text-2xl mb-2">✅ Diagnóstico pronto!</h3>

                  <textarea
                    placeholder="Adicione uma mensagem personalizada (opcional)"
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-darkBg/50 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />

                  <pre className="bg-darkBg/60 text-white/80 p-5 rounded-xl text-sm whitespace-pre-wrap border border-white/10 shadow-inner">
                    {getOrganizedMessage()}
                  </pre>

                  <div ref={sendButtonRef} className="flex flex-col md:flex-row gap-4">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      className="flex-1 text-center px-6 py-3 rounded-full bg-themeGradient text-white font-medium shadow-md hover:brightness-110 transition"
                    >
                      📲 Enviar no WhatsApp
                    </a>
                    <button
                      onClick={handleEmailSubmit}
                      disabled={status === "loading"}
                      className="flex-1 px-6 py-3 rounded-full bg-themeGradient text-white font-medium shadow-md hover:brightness-110 transition"
                    >
                      {status === "loading" ? "Enviando..." : "✉️ Enviar E-mail"}
                    </button>
                  </div>

                  {status !== "idle" && (
                    <AnimatePresence>
                      <motion.div
                        className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <motion.div
                          className="bg-darkBg rounded-xl p-8 text-center w-[320px] shadow-lg"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {status === "loading" && (
                            <>
                              <div className="w-10 h-10 border-4 border-white/30 border-t-themeGradient rounded-full animate-spin mx-auto mb-4"></div>
                              <p className="text-white text-lg flex items-center justify-center">
                                Enviando
                                <motion.span
                                  className="ml-1 flex"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: [0, 1, 0] }}
                                  transition={{ repeat: Infinity, duration: 1 }}
                                >
                                  ...
                                </motion.span>
                              </p>
                            </>
                          )}
                          {status === "success" && (
                            <>
                              <p className="text-green-500 text-xl font-semibold mb-2">✅ Sucesso!</p>
                              <p className="text-white/80">Sua mensagem foi enviada.</p>
                            </>
                          )}
                          {status === "error" && (
                            <>
                              <p className="text-red-500 text-xl font-semibold mb-2">❌ Erro</p>
                              <p className="text-white/80 mb-4">Algo deu errado. Tente novamente.</p>
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
                    </AnimatePresence>
                  )}

                  <button
                    onClick={restartQuiz}
                    className="w-full mt-4 px-6 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition"
                  >
                    🔄 Refazer Quiz
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
