import HeroAvatar from '@/public/images/hero-avatar.jpg';
import BlogImg from '@/public/images/blog-img.jpg';
import BlogImg2x from '@/public/images/blog-img@2x.jpg';
import BlogImgWide from '@/public/images/blog-img-wide.jpg';
import PortfolioImg from '@/public/images/portfolio-img.jpg';
import PortfolioImgWide from '@/public/images/portfolio-img-wide.jpg';
import TestimonialAvatar from '@/public/images/testimonial-avatar.jpg';
import digitalTricks from '@/public/images/digitaltricks.png';

export const headerData = {
  logo: "OZD",
  navlinks: [
    { title: "Home", url: "/" },
    { title: "Sobre", url: "/sobre" },
    { title: "Serviços", url: "/servicos" },
    { title: "Projetos", url: "/projetos" },
    { title: "Contato", url: "/#contact" },
  ],
};


export const aboutData = {
  hero: Array.from({ length: 21 }, (_, i) => 
    `/images/portfolio/hero-portfolio (${i + 1}).jpg`
  ),
  mainData: {
    digitalTricks: digitalTricks,
    name: "Osmar Dourado",
    heroAvatar: HeroAvatar,
    biography:
      "Sou Osmar Dourado, Head de Criação da OZD. Minha trajetória une design gráfico, editorial, audiovisual e animação. Já liderei projetos para marcas, instituições e editoras, criando soluções visuais modernas, consistentes e impactantes.",
    projectsDone: "80+",
    yearsOfExperience: "20",
    worldwideClients: "20+ marcas",
  },
  skills: [
    { name: 'Branding & Identidade Visual' },
    { name: 'Design Editorial' },
    { name: 'Audiovisual' },
    { name: 'Animação & Motion' },
    { name: 'Conteúdo Digital' },
    { name: 'Websites' },
  ],
  connect: [
    { url: 'https://www.instagram.com/ozd.ia/', bootstrapIcon: 'bi bi-instagram' },
    { url: "https://wa.me/5585997089722?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20OZD%20Studio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20que%20podemos%20produzir%20juntos%20%F0%9F%9A%80", bootstrapIcon: 'bi bi-whatsapp' },
    { url: "/#contact", bootstrapIcon: 'bi bi-envelope' },
  ],
};

export const servicesData = {
  mainData: {
    title: "Serviços",
    title2: "Nossas",
    title2Span: "Especialidades",
  },
  services: [
    {
      number: '01',
      bootstrapIcon: 'bi bi-palette',
      title: 'Branding & Identidade Visual',
      description: 'Construção de marcas fortes, com propósito e impacto visual.',
    },
    {
      number: '02',
      bootstrapIcon: 'bi bi-journal-text',
      title: 'Design Editorial',
      description: 'Revistas, jornais e livros com layouts modernos e consistentes.',
    },
    {
      number: '03',
      bootstrapIcon: 'bi bi-camera-video',
      title: 'Audiovisual & Motion',
      description: 'Captação, edição, color e animação para vídeos marcantes.',
    },
    {
      number: '04',
      bootstrapIcon: 'bi bi-phone',
      title: 'Conteúdo Digital',
      description: 'Posts, carrosséis, reels e social content com estética atual.',
    },
  ],
};

export const clientsData = {
  clients: [
    { logo: "/images/marcas/image (1).png", name: "Marca 1" },
    { logo: "/images/marcas/image (2).png", name: "Marca 2" },
    { logo: "/images/marcas/image (3).png", name: "Marca 3" },
    { logo: "/images/marcas/image (4).png", name: "Marca 4" },
    { logo: "/images/marcas/image (5).png", name: "Marca 5" },
    { logo: "/images/marcas/image (6).png", name: "Marca 6" },
    { logo: "/images/marcas/image (7).png", name: "Marca 7" },
    { logo: "/images/marcas/image (8).png", name: "Marca 8" },
    { logo: "/images/marcas/image (9).png", name: "Marca 9" },
    { logo: "/images/marcas/image (11).png", name: "Marca 11" },
    { logo: "/images/marcas/image (12).png", name: "Marca 12" },
    { logo: "/images/marcas/image (13).png", name: "Marca 13" },
    { logo: "/images/marcas/image (14).png", name: "Marca 14" },
  ],
};


export const portfolioData = {
  mainData: {
    title: "Portfólio",
    title2: "Projetos que unem",
    title2Span: "Estética e Resultado",
    description:
      "Branding, design editorial, campanhas políticas e projetos digitais que conectam estética a performance.",
  },
  projects: [
    {
      title: 'ServPRO',
      slug: 'servpro',
      description:
        'Projetos de branding e campanhas digitais para fortalecimento de marca.',
      keywords: 'branding, digital, design',
      categories: [{ name: 'Branding' }, { name: 'Digital' }],
      services: [{ name: 'Design' }, { name: 'Campanhas' }],
      client: 'ServPRO',
      duration: '120 horas',
      projectLink: { title: 'ServPRO', url: '#' },
      content:
        '<p class="text-white/70">Branding e comunicação digital com foco em performance.</p>',
      mainImage: PortfolioImg,
      wideImage: PortfolioImgWide,
      imagesLightbox: { image: PortfolioImg, alt: 'ServPRO' },
      trending: true,
    },
    {
      title: 'Doce Colo',
      slug: 'doce-colo',
      description:
        'Design editorial e identidade visual para um projeto delicado e humano.',
      keywords: 'editorial, branding',
      categories: [{ name: 'Editorial' }, { name: 'Branding' }],
      services: [{ name: 'Design Editorial' }],
      client: 'Doce Colo',
      duration: '80 horas',
      projectLink: { title: 'Doce Colo', url: '#' },
      content:
        '<p class="text-white/70">Projeto editorial com ênfase na clareza e impacto visual.</p>',
      mainImage: PortfolioImg,
      wideImage: PortfolioImgWide,
      imagesLightbox: { image: PortfolioImg, alt: 'Doce Colo' },
      trending: true,
    },
  ],
};

export const blogData = {
  mainData: {
    title: "Blog",
    title2: "Do Estúdio",
    title2Span: "Para o Feed",
    description:
      "Criações, bastidores e lançamentos em @ozd.ia.",
  },
  posts: [
    {
      title: 'Bastidores de um projeto editorial',
      slug: 'projeto-editorial',
      description:
        'Como transformamos ideias em narrativas visuais de impacto.',
      category: 'Design Editorial',
      date: 'Mar 2025',
      postedBy: 'Osmar Dourado',
      mainImage: BlogImg,
      wideImage: BlogImgWide,
      imagesLightbox: { image: BlogImg2x, alt: 'Projeto Editorial' },
      tags: [{ name: 'Design' }, { name: 'Editorial' }],
    },
  ],
};

export const awardsData = {
  mainData: {
    title: "Trajetória",
    title2: "Minha",
    title2Span: "História",
  },
  awards: [
    {
      title: '2004–2010',
      date: 'Gestor de pré-impressão e design editorial',
      description:
        'Início da jornada criativa, unindo técnica e precisão gráfica.',
    },
    {
      title: '2010–2012',
      date: 'Diretor de Arte',
      description:
        'Campanhas e identidades visuais com impacto estético e resultado.',
    },
    {
      title: '2012–2016',
      date: 'Assessoria de comunicação pública',
      description:
        'Fortalecendo a relação entre governo e sociedade.',
    },
    {
      title: '2018–2024',
      date: 'Criação Suricate Agência',
      description:
        'Fundação e liderança criativa em projetos de inovação e performance.',
    },
    {
      title: '2025',
      date: 'OZD Comunicação & Marketing',
      description:
        'Nova fase com foco em design, editorial, audiovisual e IA aplicada.',
    },
  ],
};

export const testimonialData = {
  testimonial: [
    {
      name: 'Cliente satisfeito',
      avatar: TestimonialAvatar,
      jobTitle: 'CEO - Empresa',
      description:
        'Profissionalismo, criatividade e velocidade de entrega. A OZD consegue unir design moderno com clareza de comunicação.',
    },
  ],
};

export const contactData = {
  mainData: {
    title: "Contato",
    title2: "Vamos Criar Algo",
    title2Span: "Juntos?",
    phone: "+55 85 9 9708-9722",
    email: "contato@ozdstudio.com.br",
  },
};

export const mapData = {
  mainData: {
    lat: -3.745,
    lng: -38.523,
  },
};

export const footerData = {
  copyWriteText: "© 2025 OZD Studio. All rights reserved.",
  socials: [
    {
      name: "Instagram",
      url: "https://www.instagram.com/ozd.ia/",
      icon: "bi bi-instagram",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/5585997089722?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20OZD%20Studio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20que%20podemos%20produzir%20juntos%20%F0%9F%9A%80",
      icon: "bi bi-whatsapp",
    },
  ],
};

