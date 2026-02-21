import React from 'react';
export const heroData = {
  name: "Hamza Kürşat AKBURAK",
  tagline: {
    en: "Electrical & Electronics Engineer focused on Radar, Intelligent Systems and Applied AI",
    tr: "Radar, Akıllı Sistemler ve Uygulamalı Yapay Zeka Odaklı Elektrik-Elektronik Mühendisi"
  },
  buttons: {
    en: [
      { text: "View Projects", link: "#projects", primary: true },
      { text: "Download CV", link: "https://drive.google.com/file/d/1bF9plXVfHya5Y1j9Sohhs1xh9WBcyBHD/view?usp=sharing", primary: false }
    ],
    tr: [
      { text: "Projeleri İncele", link: "#projects", primary: true },
      { text: "CV İndir", link: "https://drive.google.com/file/d/1bF9plXVfHya5Y1j9Sohhs1xh9WBcyBHD/view?usp=sharing", primary: false }
    ]
  }
};

export const aboutData = {
  bio: {
    en: "I’m an Electrical & Electronics Engineering student interested in radar, sensing technologies and AI. I enjoy working on projects where I can turn theory into something real, especially when it involves building and testing systems. Along the way, I’ve also taken active roles in teams and communities, which helped me grow both technically and personally.",
    tr: "Radar, algılama teknolojileri ve yapay zekaya ilgi duyan bir Elektrik-Elektronik Mühendisliği öğrencisiyim. Teoriyi gerçeğe dönüştürebildiğim, özellikle sistemler inşa edip test etmeyi içeren projelerde çalışmaktan keyif alıyorum. Bu süreçte takımlarda ve topluluklarda aktif roller üstlenerek hem teknik hem de kişisel olarak kendimi geliştirme fırsatı buldum."
  }
};

export const projectsTopDescription = {
  en: "Explore my work across engineering and leadership domains.",
  tr: "Mühendislik ve liderlik alanlarındaki çalışmalarımı keşfedin."
};

export const techProjects = [
  {
    id: 1,
    title: { en: "Sentinel-2 Soil Quality Prediction with AI", tr: "Yapay Zeka ile Sentinel-2 Toprak Kalitesi Tahmini" },
    summary: { en: "Low-cost soil organic carbon prediction model for the Thrace region.", tr: "Trakya bölgesi için düşük maliyetli toprak organik karbon tahmin modeli." },
    description: {
      en: [
        "Developed a machine learning model using satellite imagery to estimate soil quality and reduce reliance on traditional lab analysis.",
        React.createElement("br", { key: "en-br1" }),
        React.createElement("br", { key: "en-br2" }),
        "Raporu Gör → ",
        React.createElement("a", { key: "en-link", href: "https://drive.google.com/file/d/19Fa27QswGFamnFSkOXoNrk-ezOcM5WLF/view?usp=sharing", target: "_blank", rel: "noopener noreferrer" }, "https://drive.google.com/file/d/19Fa27QswGFamnFSkOXoNrk-ezOcM5WLF/view?usp=sharing")
      ],
      tr: [
        "Geleneksel laboratuvar analizine bağımlılığı azaltmak ve toprak kalitesini tahmin etmek için uydu görüntülerini kullanarak bir makine öğrenimi modeli geliştirildi.",
        React.createElement("br", { key: "tr-br1" }),
        React.createElement("br", { key: "tr-br2" }),
        "Raporu Gör → ",
        React.createElement("a", { key: "tr-link", href: "https://drive.google.com/file/d/19Fa27QswGFamnFSkOXoNrk-ezOcM5WLF/view?usp=sharing", target: "_blank", rel: "noopener noreferrer" }, "https://drive.google.com/file/d/19Fa27QswGFamnFSkOXoNrk-ezOcM5WLF/view?usp=sharing")
      ]
    },
    technologies: ["Sentinel-2", "Random Forest", "NDVI", "SAVI", "BSI"],
    result: { en: "R² = 0.911, field validation error ≈ 0.46%", tr: "R² = 0.911, saha doğrulama hatası ≈ %0.46" },
    image: "/projects/sentinel.png"
  },
  {
    id: 2,
    title: { en: "Hyperspectral Imaging for Soil Analysis", tr: "Toprak Analizi İçin Hiperspektral Görüntüleme" },
    summary: { en: "Ongoing graduation project using hyperspectral camera data and deep learning to estimate soil properties with near-laboratory accuracy for precision agriculture.", tr: "Hassas tarım için laboratuvara yakın doğrulukta toprak özelliklerini tahmin etmek amacıyla hiperspektral kamera verileri ve derin öğrenme kullanan devam eden mezuniyet projesi." },
    description: { en: "Ongoing graduation project using hyperspectral camera data and deep learning to estimate soil properties with near-laboratory accuracy for precision agriculture.", tr: "Hassas tarım için laboratuvara yakın doğrulukta toprak özelliklerini tahmin etmek amacıyla hiperspektral kamera verileri ve derin öğrenme kullanan devam eden mezuniyet projesi." },
    technologies: ["Hyperspectral Imaging", "Deep Learning", "Signal Processing"],
    image: "/projects/hiperspektral.png",
    badge: { en: "Ongoing", tr: "Devam Ediyor" }
  }
];

export const miniProjects = [
  {
    id: 1,
    title: { en: "STM32 Bare-Metal Driver Development", tr: "STM32 Bare-Metal Sürücü Geliştirme" },
    description: { en: "Low-level peripheral drivers built at register level without HAL.", tr: "HAL kullanılmadan yazmaç seviyesinde geliştirilen düşük seviye çevresel sürücüler." },
    image: "https://via.placeholder.com/600x400?text=STM32"
  },
  {
    id: 2,
    title: { en: "FPGA Communication Modules (UART/SPI)", tr: "FPGA Haberleşme Modülleri (UART/SPI)" },
    description: { en: "Custom digital communication protocols implemented on FPGA.", tr: "FPGA üzerinde uygulanan özel dijital haberleşme protokolleri." },
    image: "https://via.placeholder.com/600x400?text=FPGA"
  },
  {
    id: 3,
    title: { en: "CAN-Bus Network Simulation & Implementation", tr: "CAN-Bus Ağ Simülasyonu ve Uygulaması" },
    description: { en: "Robust communication network for embedded systems.", tr: "Gömülü sistemler için sağlam haberleşme ağı." },
    image: "https://via.placeholder.com/600x400?text=CAN-Bus"
  },
  {
    id: 4,
    title: { en: "Custom Minimalist PCB Design", tr: "Özel Minimalist PCB Tasarımı" },
    description: { en: "Designing a custom PCB to transition from prototypes to hardware.", tr: "Prototiplerden donanıma geçiş için özel bir PCB tasarlanması." },
    image: "https://via.placeholder.com/600x400?text=PCB+Design"
  },
  {
    id: 5,
    title: { en: "Mini Radar System Prototype", tr: "Mini Radar Sistemi Prototipi" },
    description: { en: "Small-scale radar using sensors and signal processing for detection.", tr: "Tespit için sensörler ve sinyal işleme kullanan küçük ölçekli radar." },
    image: "https://via.placeholder.com/600x400?text=Mini+Radar"
  },
  {
    id: 6,
    title: { en: "Analog Filter Design & Simulation", tr: "Analog Filtre Tasarımı ve Simülasyonu" },
    description: { en: "Analog filter modeling and validation using LTSpice.", tr: "LTSpice kullanarak analog filtre modelleme ve doğrulama." },
    image: "https://via.placeholder.com/600x400?text=Analog+Filter"
  }
];

export const socialProjects = [
  {
    id: 101,
    title: { en: "Gençlik İşle Yükseliyor — UNIDES", tr: "Gençlik İşle Yükseliyor — UNIDES" },
    summary: { en: "Government-supported youth employment project (50,000 TL funding) organizing workshops, summits and career events to connect young people with local decision makers.", tr: "Gençleri yerel karar alıcılarla buluşturmak için çalıştaylar, zirveler ve kariyer etkinlikleri düzenleyen devlet destekli gençlik istihdam projesi (50.000 TL fon)." },
    description: { en: "Government-supported youth employment project (50,000 TL funding) organizing workshops, summits and career events to connect young people with local decision makers.", tr: "Gençleri yerel karar alıcılarla buluşturmak için çalıştaylar, zirveler ve kariyer etkinlikleri düzenleyen devlet destekli gençlik istihdam projesi (50.000 TL fon)." },
    image: "/projects/unides.jpg"
  },
  {
    id: 102,
    title: { en: "Entrepreneurship & Social Impact Events", tr: "Girişimcilik ve Sosyal Etki Etkinlikleri" },
    summary: { en: "Organization roles in multiple summits and social responsibility events including Fark Kadında and entrepreneurship summits.", tr: "Fark Kadında ve girişimcilik zirveleri dahil olmak üzere birçok zirve ve sosyal sorumluluk etkinliğinde organizasyon rolleri." },
    description: { en: "Organization roles in multiple summits and social responsibility events including Fark Kadında and entrepreneurship summits.", tr: "Fark Kadında ve girişimcilik zirveleri dahil olmak üzere birçok zirve ve sosyal sorumluluk etkinliğinde organizasyon rolleri." },
    image: "/projects/girisimcilik.jpg"
  }
];

export const technicalExperience = [
  {
    id: 1,
    role: { en: "Boyahane & Enerji Takımı Intern", tr: "Boyahane & Enerji Takımı Stajyeri" },
    company: "Türk Traktör",
    duration: "30.06.2025 \u2013 28.07.2025",
    description: { en: "Robotics panel operations, Debugging & reporting, SCADA processes, Process optimization.", tr: "Robotik panel operasyonları, Hata ayıklama ve raporlama, SCADA süreçleri, Süreç optimizasyonu." }
  },
  {
    id: 2,
    role: { en: "Engineering Intern", tr: "Mühendislik Stajyeri" },
    company: { en: "T.C. Ministry of Industry and Technology", tr: "T.C. Sanayi ve Teknoloji Bakanlığı" },
    duration: "05.08.2024 \u2013 02.09.2024",
    description: { en: "Meter calibration, Transformer inspection, Energy system testing.", tr: "Sayaç kalibrasyonu, Trafo denetimi, Enerji sistemi testleri." }
  }
];

export const leadershipExperience = [
  {
    id: 101,
    role: { en: "Editor", tr: "Editör" },
    company: "Defence Turk",
    duration: { en: "2024\u2013Present", tr: "2024\u2013Halen" },
    description: { en: "Follow daily defense industry news and sources, collect articles from multiple platforms, produce concise and accurate summaries, and write reports aligned with journalistic standards.", tr: "Günlük savunma sanayii haberlerini ve kaynaklarını takip etme, birden fazla platformdan makale toplama, kısa ve doğru özetler üretme ve gazetecilik standartlarına uygun raporlar yazma." }
  },
  {
    id: 102,
    role: { en: "Chairman", tr: "Yönetim Kurulu Başkanı" },
    company: { en: "Trakya University Entrepreneurship Club", tr: "Trakya Üniversitesi Girişimcilik Topluluğu" },
    duration: "2024\u20132025",
    description: { en: "Organized seminars in entrepreneurship, technology and finance, launched a community podcast, participated as a guest in Campus Leaders Radio, led social responsibility events such as \"Fark Kadında\", arranged technical visits, and led the UNIDES-supported \"Gençlik İşle Yükseliyor\" project.", tr: "Girişimcilik, teknoloji ve finans alanlarında seminerler düzenlendi, bir topluluk podcast'i başlatıldı, Kampüs Liderleri Radyosu'na konuk olarak katılındı, \"Fark Kadında\" gibi sosyal sorumluluk etkinliklerine liderlik edildi, teknik geziler ayarlandı ve UNIDES destekli \"Gençlik İşle Yükseliyor\" projesi yürütüldü." }
  },
  {
    id: 103,
    role: { en: "Vice Chairman", tr: "Yönetim Kurulu Başkan Yardımcısı" },
    company: { en: "Trakya University Entrepreneurship Club", tr: "Trakya Üniversitesi Girişimcilik Topluluğu" },
    duration: "2023\u20132024",
    description: { en: "Supported strategic planning, coordinated event operations, assisted in partnerships and sponsorship processes, and ensured continuity between board teams.", tr: "Stratejik planlamaya destek verildi, etkinlik operasyonları koordine edildi, ortaklıklar ve sponsorluk süreçlerine yardımcı olundu ve yönetim kurulları arasında süreklilik sağlandı." }
  },
  {
    id: 104,
    role: { en: "Board Member", tr: "Yönetim Kurulu Üyesi" },
    company: { en: "Trakya University Entrepreneurship Club", tr: "Trakya Üniversitesi Girişimcilik Topluluğu" },
    duration: "2022\u20132023",
    description: { en: "Contributed to event organization, logistics planning and communication processes while supporting community activities and operational tasks.", tr: "Topluluk etkinliklerini ve operasyonel görevleri desteklerken etkinlik organizasyonu, lojistik planlama ve iletişim süreçlerine katkıda bulunuldu." }
  },
  {
    id: 105,
    role: { en: "Instructor", tr: "Eğitmen" },
    company: "AIESEC",
    duration: "2024",
    description: { en: "Delivered lessons to high school students in English within the international Eat4Change project in Romania, gaining experience in cross-cultural communication and teaching.", tr: "Romanya'daki uluslararası Eat4Change projesi kapsamında lise öğrencilerine İngilizce dersler verilerek kültürlerarası iletişim ve öğretim deneyimi kazanıldı." }
  },
  {
    id: 106,
    role: { en: "Technical Support Team Leader", tr: "Teknik Destek Takım Lideri" },
    company: { en: "Trakya Career Fair", tr: "Trakya Kariyer Fuarı" },
    duration: "2023",
    description: { en: "Led the on-site technical support team, coordinated rapid response to technical issues, and ensured smooth operation of event infrastructure.", tr: "Sahadaki teknik destek ekibine liderlik edildi, teknik sorunlara hızlı müdahale koordine edildi ve etkinlik altyapısının sorunsuz çalışması sağlandı." }
  }
];

export const awardsData = [
  { text: { en: "Special Jury Prize \u2014 Oxford Readers (2022)", tr: "Jüri Özel Ödülü \u2014 Oxford Readers (2022)" }, description: { en: "Academic achievement award.", tr: "Akademik başarı ödülü." } },
  { text: { en: "Balkan Wushu Championship \u2014 2019", tr: "Balkan Wushu Şampiyonası \u2014 2019" }, description: { en: "International championship title.", tr: "Uluslararası şampiyonluk unvanı." } }
];

export const programsData = [
  {
    id: 1,
    program: "AI Fellow",
    organization: "Yapay Zeka ve Teknoloji Akademisi",
    year: "2026",
    description: { en: "", tr: "" }
  },
  {
    id: 2,
    program: { en: "1st Social Impact Workshop", tr: "1. Sosyal Etki Çalıştayı" },
    organization: { en: "Representative of Trakya University Entrepreneurship Society", tr: "Trakya Üniversitesi Girişimcilik Topluluğu Temsilcisi" },
    year: "",
    description: { en: "", tr: "" }
  }
];

export const certificatesData = [
  { id: 1, name: { en: "Drone Development & Coding", tr: "Drone Geliştirme ve Kodlama" }, organization: { en: "Mudanya University", tr: "Mudanya Üniversitesi" }, year: "2024" },
  { id: 2, name: { en: "Robotic Coding", tr: "Robotik Kodlama" }, organization: "Miuul", year: "2024" },
  { id: 3, name: { en: "Arduino Instructor Training", tr: "Arduino Eğitici Eğitimi" }, organization: { en: "Başkent University", tr: "Başkent Üniversitesi" }, year: "2023" },
  { id: 4, name: { en: "Effective Communication Strategies", tr: "Etkili İletişim Stratejileri" }, organization: { en: "BTK Academy", tr: "BTK Akademi" }, year: "2023" },
  { id: 5, name: { en: "Storytelling & Short Movie Workshop", tr: "Hikaye Anlatıcılığı ve Kısa Film Atölyesi" }, organization: "Oxford Readers", year: "2022" },
  { id: 6, name: { en: "IHA-1 Amateur Drone Pilot License", tr: "İHA-1 Amatör Drone Pilot Lisansı" }, organization: "SHGM", year: "2021" },
  { id: 7, name: { en: "Working in a Digital World", tr: "Dijital Dünyada Çalışmak" }, organization: "IBM", year: "2024" },
  { id: 8, name: { en: "Leadership Development Experience", tr: "Liderlik Gelişim Deneyimi" }, organization: "AIESEC", year: "2024" }
];

export const skillsData = {
  en: ["Embedded Systems", "Signal Processing", "Machine Learning", "Radar & Sensing Technologies", "Python", "MATLAB", "Git & GitHub", "LTSpice", "Leadership"],
  tr: ["Gömülü Sistemler", "Sinyal İşleme", "Makine Öğrenimi", "Radar ve Algılama Teknolojileri", "Python", "MATLAB", "Git & GitHub", "LTSpice", "Liderlik"]
};

export const educationData = [
  {
    degree: { en: "Electrical & Electronics Engineering", tr: "Elektrik-Elektronik Mühendisliği" },
    university: { en: "Trakya University", tr: "Trakya Üniversitesi" },
    details: { en: "30% English curriculum", tr: "%30 İngilizce müfredat" }
  }
];

export const contactData = {
  email: "akburakkursat54@gmail.com",
  linkedin: "https://www.linkedin.com/in/hkursat-akburak/",
  github: "https://github.com/hkursatakburak"
};

// Also adding section headers and common UI strings for easier translation in components
export const siteText = {
  nav: {
    home: { en: "Home", tr: "Anasayfa" },
    about: { en: "About", tr: "Hakkımda" },
    projects: { en: "Projects", tr: "Projeler" },
    experience: { en: "Experience", tr: "Deneyim" },
    programs: { en: "Programs", tr: "Programlar" },
    certificates: { en: "Certificates", tr: "Sertifikalar" },
    awards: { en: "Awards", tr: "Ödüller" },
    skills: { en: "Skills", tr: "Yetkinlikler" },
    education: { en: "Education", tr: "Eğitim" },
    contact: { en: "Contact", tr: "İletişim" }
  },
  sections: {
    about: { en: "About Me", tr: "Hakkımda" },
    projects: { en: "Projects", tr: "Projeler" },
    techProjects: { en: "Technical Projects", tr: "Teknik Projeler" },
    socialProjects: { en: "Social & Leadership Projects", tr: "Sosyal ve Liderlik Projeleri" },
    miniProjects: { en: "Other Technical Projects", tr: "Diğer Teknik Projeler" },
    experience: { en: "Experience", tr: "Deneyim" },
    techExperience: { en: "Technical Experience", tr: "Teknik Deneyim" },
    socialExperience: { en: "Social & Leadership Experience", tr: "Sosyal ve Liderlik Deneyimi" },
    programs: { en: "Programs & Workshops", tr: "Programlar ve Çalıştaylar" },
    certificates: { en: "Certificates & Trainings", tr: "Sertifikalar ve Eğitimler" },
    awards: { en: "Awards & Achievements", tr: "Ödüller ve Başarılar" },
    skills: { en: "Skills & Technologies", tr: "Yetkinlikler ve Teknolojiler" },
    education: { en: "Education", tr: "Eğitim" },
    contact: { en: "Get In Touch", tr: "İletişime Geç" }
  },
  ui: {
    viewProject: { en: "View Details", tr: "Detayları Gör" },
    close: { en: "Close", tr: "Kapat" },
    contactIntro: { en: "Feel free to reach out for collaborations or just a friendly hello:", tr: "İş birlikleri veya sadece merhaba demek için iletişime geçebilirsiniz:" },
    footer: { en: "Designed & Built by", tr: "Tasarım & Geliştirici:" }
  }
};
