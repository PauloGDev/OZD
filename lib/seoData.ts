interface SEOMetadata {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl: string;
}

interface PageSEO {
    [key: string]: SEOMetadata;
}

const siteUrl = 'https://ozdstudio.com.br';

export const seoData: PageSEO = {
    home: {
        title: 'OZD Comunicação & Marketing | Design, Audiovisual e IA',
        description:
            'Estúdio criativo especializado em design, audiovisual, editorial e inteligência artificial aplicada à comunicação.',
        keywords: [
            'OZD Studio',
            'OZD Comunicação & Marketing',
            'design gráfico',
            'audiovisual',
            'design editorial',
            'motion design',
            'branding',
            'identidade visual',
            'marketing com inteligência artificial',
        ],
        canonicalUrl: `${siteUrl}`,
    },
    error404: {
        title: 'Erro 404 | Página não encontrada | OZD Comunicação & Marketing',
        description: 'A página que você procura não existe ou foi movida.',
        keywords: ['erro 404', 'página não encontrada', 'OZD Studio'],
        canonicalUrl: `${siteUrl}/404`,
    },
    sobre: {
        title: 'Sobre nós | OZD Comunicação & Marketing',
        description: 'Conheça a história da OZD Studio, nossa missão e nossa paixão por design e comunicação.',
        keywords: ['sobre OZD', 'história OZD', 'quem somos', 'estúdio criativo'],
        canonicalUrl: `${siteUrl}/sobre`,
    },
    projetos: {
        title: 'Projetos | OZD Comunicação & Marketing',
        description: 'Explore os projetos criativos desenvolvidos pela OZD em design, audiovisual e branding.',
        keywords: ['projetos OZD', 'design gráfico', 'audiovisual', 'branding', 'editorial'],
        canonicalUrl: `${siteUrl}/projetos`,
    },
    servicos: {
        title: 'Serviços | OZD Comunicação & Marketing',
        description: 'Descubra os serviços oferecidos pela OZD em design, branding, audiovisual e marketing com IA.',
        keywords: ['serviços OZD', 'design gráfico', 'branding', 'marketing digital', 'audiovisual'],
        canonicalUrl: `${siteUrl}/servicos`,
    },
    privacy: {
        title: 'Política de Privacidade | OZD Comunicação & Marketing',
        description: 'Leia nossa política de privacidade e entenda como a OZD trata seus dados e informações.',
        keywords: ['política de privacidade', 'LGPD', 'dados pessoais', 'OZD Studio'],
        canonicalUrl: `${siteUrl}/politica-de-privacidade`,
    },
};

export const getPortfolioProjectSEO = (id: string, title: string, excerpt: string): SEOMetadata => ({
    title: `${title} | Portfólio | OZD Comunicação & Marketing`,
    description: excerpt,
    keywords: ['portfólio', 'projeto', 'OZD Studio', title.toLowerCase()],
    canonicalUrl: `${siteUrl}/portfolio/${id}`,
});

export const getBlogPostSEO = (slug: string, title: string, excerpt: string): SEOMetadata => ({
    title: `${title} | Blog | OZD Comunicação & Marketing`,
    description: excerpt,
    keywords: ['blog', 'artigo', 'OZD Studio', ...title.toLowerCase().split(' ')],
    canonicalUrl: `${siteUrl}/blog/${slug}`,
});
