import { Scale, Phone, MapPin, Clock, Users, Shield, FileText, MessageCircle, ChevronDown, ArrowRight, PenTool, TrendingUp, HelpCircle, ClipboardCheck, Eye, Gavel, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Index = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [expandedService, setExpandedService] = useState<number | null>(null);

  // Para scroll suave nas especialidades
  const handleEspecialidadeScroll = () => {
    document.getElementById("convincing-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")?.substring(1);
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const mainServices = [
    {
      name: "Acompanhamentos Processuais",
      shortDesc: "Monitoramento completo dos seus processos.",
      fullDesc: "Acompanhamento detalhado dos processos jurídicos com relatórios periódicos, prazos e próximos passos. Você fica sempre informado sobre o status de seu caso.",
      icon: Eye,
      color: "from-amber-400 to-amber-600",
      textColor: "text-amber-800"
    },
    {
      name: "Audiências & Sustentações",
      shortDesc: "Representação técnica em tribunais.",
      fullDesc: "Atuação profissional em audiências e sustentações orais, defesa dos seus interesses em todas as instâncias.",
      icon: Gavel,
      color: "from-stone-400 to-stone-600",
      textColor: "text-stone-800"
    },
    {
      name: "Elaboração de Peças",
      shortDesc: "Petições e documentos jurídicos.",
      fullDesc: "Redação técnica de petições, recursos e documentos, focada em estratégia e resultado.",
      icon: PenTool,
      color: "from-amber-500 to-orange-500",
      textColor: "text-orange-800"
    },
    {
      name: "Recursos & Contestações",
      shortDesc: "Defesa em todas as instâncias.",
      fullDesc: "Recursos e contestações em todas as esferas do judiciário. Cada caso analisado de maneira estratégica com foco em resultados.",
      icon: TrendingUp,
      color: "from-stone-500 to-amber-500",
      textColor: "text-amber-800"
    },
    {
      name: "Consultoria Jurídica",
      shortDesc: "Orientação preventiva especializada.",
      fullDesc: "Consultoria para evitar litígios com orientação estratégica e soluções antes do problema surgir.",
      icon: HelpCircle,
      color: "from-amber-300 to-stone-400",
      textColor: "text-stone-800"
    },
    {
      name: "Serviços Cartoriais",
      shortDesc: "Documentações e registros oficiais.",
      fullDesc: "Atendimento completo de cartório: certidões, registros, reconhecimentos de firma e burocracia resolvida por você.",
      icon: ClipboardCheck,
      color: "from-stone-300 to-amber-400",
      textColor: "text-amber-800"
    }
  ];

  const specialties = [
    { title: "Direito Administrativo", icon: FileText },
    { title: "Direito Civil", icon: Users },
    { title: "Direito Consumidor", icon: Shield },
    { title: "Direito de Família", icon: Users },
    { title: "Direito Previdenciário", icon: Clock }
  ];

  const cidadesAtendidas = [
    "Jacobina/BA",
    "Miguel Calmon/BA",
    "Mundo Novo/BA",
    "Piritiba/BA"
  ];

  const servicosPrestados = [
    "Audiências",
    "Serviços em outros orgãos da cidade (cartórios, prefeitura)",
    "Cópias de processos, Protocolos de Petições, Diligências em geral"
  ];

  const navItems = [
    { href: "#servicos", label: "Serviços" },
    { href: "#especialidades", label: "Especialidades" },
    { href: "#convincing-section", label: "Por que escolher?" },
    { href: "#contato", label: "Contato" },
  ];

  const handleWhatsAppContact = () => {
    const phoneNumber = "5574999752871"; 
    const message = "Olá Dra. Lara! Vim através do site e gostaria de uma consulta jurídica.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const toggleServiceExpansion = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">

      {/* Header com Destaque */}
<header className="bg-white shadow border-b sticky top-0 z-40 backdrop-blur-sm bg-white/90">
  <div className="container mx-auto px-4 py-4 flex items-center justify-between">
    <div className="flex gap-2 items-center">
      <Scale className="h-8 w-8 text-amber-700" />
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-amber-800 font-serif leading-tight">Lara Rios Assessoria e Consultoria</h1>
        <p className="text-stone-600 text-sm">OAB/BA 45574 <span className="mx-1">|</span> Miguel Calmon/BA</p>
      </div>
    </div>
    <nav className="hidden md:flex space-x-6">
      {navItems.map((item) => (
        <a 
          key={item.href} 
          href={item.href} 
          onClick={handleSmoothScroll}
          className="text-stone-700 hover:text-amber-700 font-medium transition hover-underline cursor-pointer text-sm"
        >
          {item.label}
        </a>
      ))}
    </nav>
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="mt-8 flex flex-col space-y-2">
            {navItems.map((item) => (
              <SheetClose asChild key={item.href}>
                <a 
                  href={item.href} 
                  onClick={handleSmoothScroll}
                  className="text-lg text-stone-800 hover:text-amber-700 p-2 rounded-md hover:bg-stone-100"
                >
                  {item.label}
                </a>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</header>

      {/* Hero */}
<section id="inicio" className="py-16 bg-gradient-to-br from-amber-50 via-white to-stone-100 text-center">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-4 animate-fade-in leading-tight">
      Assessoria Jurídica{" "}
      <span className="hover:text-amber-700 transition-colors duration-300 cursor-default">Moderna</span>,{" "}
      <span className="hover:text-amber-700 transition-colors duration-300 cursor-default">Humana</span> e{" "}
      <span className="hover:text-amber-700 transition-colors duration-300 cursor-default">Transparente</span>
    </h2>
    <p className="max-w-2xl mx-auto text-lg text-stone-700 mb-8 animate-fade-in">Mais de 5 anos ajudando pessoas e empresas de <b className="text-amber-700">Miguel Calmon</b> e região a defender seus direitos e resolver questões jurídicas com agilidade.</p>
    <Button 
      size="lg" 
      onClick={handleWhatsAppContact}
      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 shadow-lg hover:scale-105 transition-all"
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      Fale no WhatsApp agora
    </Button>
  </div>
</section>

      {/* Cidades/serviços */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-xl font-bold text-amber-700 mb-2">Cidades atendidas</h3>
            <ul className="text-stone-700 space-y-1 leading-relaxed">
              {cidadesAtendidas.map(cidade => (
                <li key={cidade} className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-amber-600" />
                  {cidade}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-amber-700 mb-2">Serviços mais realizados</h3>
            <ul className="text-stone-700 space-y-1 leading-relaxed">
              {servicosPrestados.map(serv => (
                <li key={serv} className="flex items-center gap-2">
                  <ClipboardCheck className="h-4 w-4 text-amber-600" />
                  {serv}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Serviços principais (cards leves e expansíveis) */}
      <section id="servicos" className="py-16 bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Nossos <span className="text-amber-700">Serviços</span> mais Procurados</h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto text-stone-600">Conheça como a <b>Lara Rios</b> pode ajudar você e sua família nas principais demandas jurídicas do dia a dia.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`
                  p-6 rounded-lg bg-white border border-stone-200
                  shadow hover:shadow-lg transition-all duration-300 cursor-pointer
                  hover:border-amber-300
                  ${hoveredService === index ? 'scale-[1.025]' : ''}
                `}>
                  <div className={`
                    w-10 h-10 rounded-lg bg-gradient-to-br ${service.color}
                    flex items-center justify-center mb-4
                    transition-transform duration-300 group-hover:scale-110
                  `}>
                    <service.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className={`text-base font-bold mb-1 ${service.textColor} group-hover:text-amber-700`}>{service.name}</h3>
                  <p className="text-stone-600 text-sm mb-3">{service.shortDesc}</p>
                  <button
                    onClick={() => toggleServiceExpansion(index)}
                    className="flex items-center text-amber-700 hover:text-amber-800 transition-colors text-xs font-semibold"
                  >
                    {expandedService === index ? "Ocultar" : "Saiba mais"}
                    <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-300 ${expandedService === index ? "rotate-180" : ""}`} />
                  </button>
                  {expandedService === index && (
                    <div className="mt-4 p-3 bg-amber-50 rounded border-l-4 border-amber-400 animate-fade-in text-stone-700 text-sm">{service.fullDesc}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <p className="text-stone-700 mb-2">Tem outras demandas? Fale pelo WhatsApp para conhecer todos os serviços.</p>
            <Button 
              onClick={handleWhatsAppContact}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 hover:scale-105 transition-all"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Ver todos os Serviços
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section id="especialidades" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-stone-800">Áreas de Especialização</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">Atuação especializada nas principais áreas do direito para melhor defender o seu interesse.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, idx) => (
              <Card 
                key={idx}
                onClick={handleEspecialidadeScroll}
                className="hover:shadow-lg hover:border-amber-300 cursor-pointer group transition-all active:scale-95"
              >
                <CardHeader className="text-center">
                  <specialty.icon className="h-10 w-10 text-amber-700 mx-auto mb-2 group-hover:text-amber-600" />
                  <CardTitle className="text-base text-stone-800 group-hover:text-amber-700">{specialty.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600 text-center group-hover:text-stone-700 text-sm">
                    Suporte completo e especializado em {specialty.title.toLowerCase()}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Seção: Por que contatar Lara Rios */}
      <section id="convincing-section" className="py-20 bg-gradient-to-br from-amber-50 via-white to-stone-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10 items-center justify-center">
          <div className="flex-shrink-0">
            <img 
              src="/uploads/0cea6827-4cc6-4bc8-b1c7-fd2d8ea96b6f.png"
              alt="Lara Rios"
              className="rounded-xl shadow-xl w-56 h-56 object-cover border-4 border-amber-100"
            />
          </div>
          <div className="flex-1 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-800 mb-3">Por que escolher a <span className="text-amber-700">Lara Rios Assessoria e Consultoria</span>?</h2>
            <ul className="mb-6 text-stone-700 space-y-2 text-lg">
              <li className="flex gap-2 items-start"><Scale className="h-5 w-5 text-amber-600 mt-1" /> <span>Atendimento humanizado e próximo, focado em você!</span></li>
              <li className="flex gap-2 items-start"><Clock className="h-5 w-5 text-amber-600 mt-1" /> <span>Respostas rápidas e acompanhamento frequente do andamento do seu caso.</span></li>
              <li className="flex gap-2 items-start"><Users className="h-5 w-5 text-amber-600 mt-1" /> <span>Reconhecida na região (<b>Miguel Calmon</b>, Jacobina, Mundo Novo e Piritiba) por sua dedicação e transparência.</span></li>
              <li className="flex gap-2 items-start"><ClipboardCheck className="h-5 w-5 text-amber-600 mt-1" /> <span>Facilidade de acesso: fale com Lara via WhatsApp e receba orientação sem sair de casa.</span></li>
            </ul>
            <p className="text-stone-700 mb-6">Com Lara Rios, você conta com experiência, proximidade e soluções práticas para resolver seus problemas jurídicos de forma clara, eficiente e segura.</p>
            <Button
              onClick={handleWhatsAppContact}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 shadow-lg hover:scale-105 transition-all"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Quero ser atendido por Lara
            </Button>
          </div>
        </div>
      </section>
      
      {/* Apresenttação dos Serviços */}}
      <section className="py-14 bg-amber-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Precisa de Ajuda Jurídica?</h2>
          <p className="text-lg mb-6 opacity-90">Entre em contato pelo WhatsApp e agende sua orientação em poucos minutos!</p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={handleWhatsAppContact}
            className="px-8 py-3 bg-white text-amber-700 hover:bg-stone-100 shadow-lg hover:scale-105 transition"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar no WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-stone-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scale className="h-6 w-6 text-amber-500" />
                <h3 className="text-lg font-semibold">Lara Rios Assessoria e Consultoria</h3>
              </div>
              <p className="text-stone-300 text-sm">
                Advocacia comprometida com a justiça e os direitos dos nossos clientes.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-amber-500">Contato</h4>
              <div className="space-y-2 text-sm text-stone-300">
                <div className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
                  <Phone className="h-4 w-4" />
                  <span>(74) 99975-2871</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
                  <MapPin className="h-4 w-4" />
                  <span>Miguel Calmon/BA</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
                  <a href="https://linkedin.com/in/lara-manuela-dos-santos-rios-24897789" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="text-amber-400">
                      <path fill="currentColor" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-10 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.81-1.75-1.72s.78-1.72 1.75-1.72c.97 0 1.75.81 1.75 1.72s-.78 1.72-1.75 1.72zm13.5 10.28h-3v-4.5c0-1.07-.89-1.93-2-1.93s-2 .86-2 1.93v4.5h-3v-9h3v1.16c.44-.61 1.43-1.16 2.32-1.16 2.01 0 2.68 1.56 2.68 3.59v5.41z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-amber-500">Horário</h4>
              <div className="space-y-1 text-sm text-stone-300">
                <p>Seg a Sex: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p className="text-amber-400">Plantão WhatsApp 24h</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-amber-500">Especialidades</h4>
              <div className="space-y-1 text-sm text-stone-300">
                {specialties.slice(0, 3).map((specialty, index) => (
                  <p key={index} className="hover:text-white transition-colors cursor-pointer">{specialty.title}</p>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-700 mt-8 pt-8 text-center text-sm text-stone-400">
            <p>&copy; 2024 Lara Rios Assessoria e Consultoria. Todos os direitos reservados.</p>
            <p className="mt-1">OAB/BA 45574</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
<button
  onClick={handleWhatsAppContact}
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
  aria-label="Contato via WhatsApp"
>
  <MessageCircle className="h-6 w-6" />
</button>
    </div>
  );
};

export default Index;
