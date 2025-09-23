"use client";

import React from "react";

export default function PoliticaDePrivacidade() {
  return (
    <section className="px-6 lg:px-10 py-20 bg-black text-white">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-outfit font-medium mb-6">
          Política de{" "}
          <span className="bg-themeGradient bg-clip-text text-transparent">
            Privacidade
          </span>
        </h1>
        <p className="text-white/70 leading-relaxed mb-10">
          A sua privacidade é importante para nós. Esta Política de
          Privacidade descreve como coletamos, usamos e protegemos suas
          informações quando você utiliza nosso site.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-outfit font-medium mb-3">
              1. Informações que coletamos
            </h2>
            <p className="text-white/70 leading-relaxed">
              Podemos coletar informações pessoais como nome, e-mail e dados
              de contato quando você preenche formulários, entra em contato
              conosco ou utiliza nossos serviços. Também coletamos dados
              técnicos automaticamente, como endereço IP, tipo de navegador e
              páginas visitadas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-outfit font-medium mb-3">
              2. Como usamos suas informações
            </h2>
            <p className="text-white/70 leading-relaxed">
              Utilizamos os dados para:
            </p>
            <ul className="list-disc list-inside text-white/70 leading-relaxed mt-2">
              <li>Fornecer e melhorar nossos serviços;</li>
              <li>Personalizar sua experiência no site;</li>
              <li>Entrar em contato com você sobre novidades e atualizações;</li>
              <li>Cumprir obrigações legais.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-outfit font-medium mb-3">
              3. Compartilhamento de dados
            </h2>
            <p className="text-white/70 leading-relaxed">
              Não vendemos suas informações. Podemos compartilhá-las apenas
              com parceiros de confiança que nos auxiliam na operação do
              site, sempre em conformidade com esta política.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-outfit font-medium mb-3">
              4. Cookies
            </h2>
            <p className="text-white/70 leading-relaxed">
              Utilizamos cookies para melhorar sua experiência, analisar o
              tráfego do site e personalizar conteúdos. Você pode gerenciar
              cookies diretamente nas configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-outfit font-medium mb-3">
              5. Seus direitos
            </h2>
            <p className="text-white/70 leading-relaxed">
              Você tem o direito de acessar, corrigir ou excluir suas
              informações pessoais, bem como de solicitar a interrupção do
              uso dos seus dados para determinadas finalidades.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-outfit font-medium mb-3">
              6. Alterações nesta política
            </h2>
            <p className="text-white/70 leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente.
              Recomendamos que você a revise regularmente para estar ciente
              de como protegemos suas informações.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-outfit font-medium mb-3">
              7. Contato
            </h2>
            <p className="text-white/70 leading-relaxed">
              Se tiver dúvidas sobre esta política ou sobre o uso de seus
              dados, entre em contato conosco através do e-mail{" "}
              <a
                href="mailto:contato@ozdstudio.com"
                className="underline text-fuchsia-400 hover:text-fuchsia-300"
              >
                contato@ozdstudio.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
