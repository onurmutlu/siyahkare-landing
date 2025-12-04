
export type Language = 'tr' | 'en' | 'ru';

export const translations = {
  tr: {
    meta: {
      title: 'SiyahKare | AI Tarafından Yönetilen Mikro-Devlet',
    },
    nav: {
      about: 'Hakkında',
      benefits: 'Avantajlar',
      economy: 'Ekonomi',
      governance: 'Yönetim',
      roadmap: 'Yol Haritası',
      citizenPortal: 'Citizen Portal',
      whitepaper: 'Whitepaper',
      constitution: 'Anayasa'
    },
    hero: {
      phase: 'GENESIS PHASE LIVE',
      titleHighlight: 'İlk Anayasal Mikro-Devlet',
      titlePrefix: 'AI Tarafından Yönetilen',
      subtitle: 'Telegram üzerinde çalışan, NCR ile çalışan ve Nasip Tasks ile vatandaşına gerçek gelir sağlayan bir dijital devlet.',
      bullets: {
        telegram: { title: 'Telegram Tabanlı', desc: 'AI-first devlet yapısı' },
        tasks: { title: 'Günlük Görevler', desc: 'NCR kazan, gelir yarat' },
        ai: { title: 'AI + Anayasa', desc: 'Şeffaf ekonomi yönetimi' },
        actor: { title: 'Hak Sahibi Aktör', desc: 'Vatandaş = Kullanıcı değil' }
      },
      cta: {
        enter: "Citizen Portal'a Gir",
        whitepaper: 'Whitepaper v1.0'
      }
    },
    whatIs: {
      title: 'SiyahKare Nedir?',
      p1: 'SiyahKare, Web3 projesi değildir. Bir uygulama da değildir.',
      highlight: 'SiyahKare, yapay zekâ tarafından yönetilen, anayasal sınırlarla korunan bir dijital mikro-devlettir.',
      p2: 'Temeli, şeffaf bir anayasa ve otonom ekonomik dengeye dayanır. Burada kararları keyfi adminler değil, kodlanmış mantık ve topluluk çıkarı verir.',
      stack: 'Yönetim → Ekonomi → Vatandaşlar → MiniAppler → Telegram',
      layers: {
        l1: { title: 'President.BARON', sub: 'Human Governance & Veto' },
        l2: { title: 'AI Council', sub: 'Neural Governor • Fiscal AI • Yield Balancer' },
        l3: { title: 'NCR Economy', sub: 'State Currency • Treasury' },
        l4: { title: 'Citizen System', sub: 'Identity • Rank • Nasip Tasks' },
        l5: { title: 'MiniApps + Telegram', sub: 'Infrastructure Layer' }
      }
    },
    benefits: {
      title: 'Neden SiyahKare Vatandaşı Olayım?',
      subtitle: 'SiyahKare\'de "scroll eden tüketici" değil, "üreten ve kazanan vatandaş"sın.',
      b1: {
        title: 'Gerçek Mikro Gelir',
        desc: 'Günlük 5–15 dakikalık görevlerle NCR kazanırsın.',
        details: ['Level 2 Citizen: ~180–420 NCR/Ay', 'Level 4 Citizen: ~900–2500 NCR/Ay', 'Aktifliğe ve ekonomi moduna bağlı gelir.']
      },
      b2: {
        title: 'Anayasal Güvence',
        desc: 'Ödüller formülle belirlenir, "keyfî admin" yok.',
        details: ['Emission & Burn AI kontrolünde', 'Şeffaf ekonomik kararlar', 'Vatandaş denetimine açık loglar']
      },
      b3: {
        title: 'Statü, Level & Nasip Bar',
        desc: 'Kullanıcı değil, Citizen olursun.',
        details: ['Level (0–100) ve Rank sistemi', 'Nasip Bar ile gelir çarpanı', 'Yükselen öncelik ve haklar']
      }
    },
    tasks: {
      title: 'Nasip Tasks:',
      titleHighlight: '"Çaba → Gelir" Motoru',
      desc: 'Her gün küçük görevler yaparsın. Sistem, bu çabayı NCR geliri ve XP\'ye çevirir. Nasip, SİYAHKARE\'de bir bahane değildir. Çaba → Görev → NCR → Gelir zinciri, matematikle yazılmıştır.',
      cats: { title: '5 Görev Kategorisi', desc: 'Growth, Engagement, GMV, Creator, Prestige' },
      rewards: { title: 'Dinamik Ödüller (DRM)', desc: 'Ödüller ekonomi sağlığına göre AI tarafından ayarlanır.' },
      daily: 'Ortalama bir L10 citizen için:',
      dailyVal: 'günlük 110–190 NCR bandı',
      loop: {
        title: 'Günlük Loop',
        items: ['Günlük check-in (NCR + XP)', '1 MiniApp kullan (GMV Katkısı)', 'Yeni vatandaş davet et (Bonus)', 'Nasip Bar kontrolü'],
        potential: 'GÜNLÜK POTANSİYEL'
      }
    },
    economy: {
      title: 'NCR: Devletin Para Birimi',
      desc: 'NCR bir meme coin değildir. Sadece "utility token" de değildir. NCR, SiyahKare ekonomisinin yapay zekâ tarafından yönetilen, anayasal sınırlarla korunan resmi para birimidir.',
      cards: {
        c1: { title: 'Dynamic Supply', desc: 'Emission ve burn AI tarafından dengelenir; hedef net sıfır enflasyon bandıdır.' },
        c2: { title: 'Price Stability Band', desc: 'NCR fiyatı için soft peg bandı ve Treasury destekli müdahale kuralları tanımlıdır.' },
        c3: { title: 'Sinks & Staking', desc: 'NCR; staking, premium özellikler, creator boost ve sigorta havuzlarında kilitlenebilir.' }
      },
      cta: 'Economy & NCR Tokenomics Bölümünü Oku'
    },
    governance: {
      title: 'AI Council',
      subtitle: 'Ekonomiyi insan değil, Anayasal Yapay Zekâ yönetir.',
      cards: {
        c1: { name: 'Neural Governor', role: 'Yürütme Organı', desc: 'Ödül, vergi, sübvansiyon, sink, emission ayarlarını optimize eder.' },
        c2: { name: 'Yield Balancer', role: 'Para Politikası Beyni', desc: 'NCR ödüllerini ve emisyonu dengeler, DRM\'i belirler.' },
        c3: { name: 'Fiscal AI', role: 'Vergi & Sübvansiyon', desc: 'Alt seviye vatandaşı korur, üst seviyedekilerden makul pay alır.' },
        c4: { name: 'Economic Guard', role: 'Anayasa Mahkemesi', desc: 'Diğer AI\'ların kararlarını denetler, meltdown riskini bloke eder.' }
      },
      human: { title: 'Son söz hâlâ insanda', desc: 'President.BARON, kritik durumlarda override ve veto hakkına sahiptir. AI, insanı değil; insan, AI\'ı çerçeveler.' }
    },
    target: {
      title: 'SiyahKare Kimin İçin?',
      c1: { title: 'Citizens', sub: 'Worker / Everyday User', desc: 'Günlük 5-15 dakikasını ayırıp düzenli mikro gelir yaratmak isteyenler. Oyun oynamak değil, gerçek ekonomi içinde yer almak isteyenler.' },
      c2: { title: 'Creators', sub: 'Performers & Influencers', desc: 'Kendi kitlesini, içeriklerini ve show\'larını ekonomiye bağlamak isteyenler. NCR ile kazanç + GMV share + rank isteyenler.' },
      c3: { title: 'Builders', sub: 'Developers & Operators', desc: 'Telegram bot / MiniApp geliştirenler. Devletin içine app inşa edip revenue share almak isteyen mühendisler.' }
    },
    roadmap: {
      title: 'Roadmap',
      subtitle: 'Mikro-Devletten, Milyon Vatandaşa',
      phases: {
        p1: { name: 'Genesis', items: ['NovaCore Altyapısı', 'Whitepaper v1.0', 'Nasip Tasks Engine v1.0', 'Citizen Portal MVP'] },
        p2: { name: 'Foundation', items: ['AI Governance v1.0', 'NCR Simülasyonu', 'İlk MiniApp Seti', '10K Citizen Hedefi'] },
        p3: { name: 'Growth', items: ['TON Mainnet Entegrasyonu', 'NCR Token Lansmanı', '50+ MiniApp', '100K+ Citizen'] },
        p4: { name: 'Autonomous', items: ['AI Council Full Entegrasyon', 'Cognitive Constitution', 'Global Büyüme', '1M+ Citizen'] }
      }
    },
    faq: {
      title: 'Sıkça Sorulanlar',
      q1: { q: 'SiyahKare bir coin mi, yoksa devlet mi?', a: 'SiyahKare, bir coin\'in etrafına kurulmuş proje değildir. Tam tersi: Bir mikro-devlet tasarlandı ve NCR, bu devletin para birimi olarak tanımlandı. Coin = araç; devlet = sistemdir.' },
      q2: { q: 'Gerçekten para kazanabilir miyim?', a: 'Evet, ama piyango değil. Kazanç Nasip Tasks üzerinden, formüller ve AI-ekonomi ile hesaplanmış görevlerle gelir. Düzenli görev yapan, level ve rank\'ini yükselten citizenship modeliyle, aylık anlamlı mikro gelir hedeflenir.' },
      q3: { q: 'Risk ne? Bu sistem nasıl patlamaz?', a: 'Emission için günlük/haftalık/aylık anayasal limit var. Economic Guard, Neural Governor\'ın tüm kararlarını denetler. Meltdown riskinde: Emission stop, emergency burn devreye girer. Pump & dump değil, riskleri tanımlı bir ekonomi.' },
      q4: { q: 'NCR fiyatını kim belirliyor?', a: 'Piyasa belirler; AI ise sadece bandı korumaya çalışır (Soft peg bandı). Volatiliteye göre otomatik politikalar ve Treasury müdahaleleri devreye girer.' },
      q5: { q: 'Devleti kim yönetiyor? AI mi, Baron mu?', a: 'İkisi de, ama aynı anda değil. Günlük ekonomi AI Council tarafından; Anayasa ve kriz override yetkileri President.BARON tarafından yönetilir. AI, insanı değil; insan, AI\'ı çerçeveler.' }
    },
    footer: {
      claim: '"SiyahKare, kullanıcı ekonomisi devrini kapatıp, vatandaş ekonomisi devrini açmak için kuruldu."',
      rights: '© 2024 SiyahKare. Authority: BARON. All Rights Reserved.',
      back: 'Başkente Dön'
    },
    legal: {
        constTitle: "SiyahKare Anayasası",
        wpTitle: "Whitepaper v1.0",
        back: "Başkente Dön",
        updated: "ARALIK 2024",
        authority: "Otorite: BARON",
        version: "Sürüm 1.0",
        download: "PDF İndir (Yakında)",
        content: {
          constitution: {
            art1: { title: "Madde I: Devletin Tanımı", body: "SiyahKare bir şirket veya topluluk değil, Telegram ağında var olan egemen bir dijital mikro-devlettir. Egemenliği, Vatandaşlarının kolektif mutabakatından ve AI Konseyi'nin algoritmik icrasından kaynaklanır." },
            art2: { title: "Madde II: Vatandaşlık Hakları", body: "Geçerli bir rütbeye (Level 1+) sahip her Vatandaş şu haklara sahiptir: Doğrulanabilir emek (Nasip Tasks) ile NCR kazanmak; Ekonomik Yönetişim kayıtlarına erişmek; Dijital varlıklarının ve rütbesinin mülkiyetini korumak; Economic Guard kodunda tanımlanan otomatik protokoller haricinde keyfi el koymadan korunmak." },
            art3: { title: "Madde III: AI Konseyi", body: "Yürütme ekonomik yetkisi AI Konseyi'ne (Neural Governor, Yield Balancer, Fiscal AI, Economic Guard) verilmiştir. Bu varlıklar Anayasa'nın katı sınırları içinde çalışır. Tier-1 Referandumu olmadan Anayasa'yı değiştiremezler." },
            art4: { title: "Madde IV: NCR Para Birimi", body: "NCR, Devletin can damarıdır. Arzı, emisyonu ve yakımı sürdürülebilirliği sağlamak için düzenlenir. NCR değerini Anayasal parametreler dışında yapay olarak manipüle etmeye yönelik herhangi bir girişim vatana ihanet sayılır." },
            disclaimer: "* Bu belge bir özettir. Anayasa'nın tam kriptografik hash'i zincir üzerinde saklanmaktadır."
          },
          whitepaper: {
            abstract: { title: "Özet", body: "Mevcut dijital ekonomi, kullanıcıları ürün olarak görür. Platformlar, adil tazminat ödemeden dikkat ve emekten değer elde eder. SiyahKare yeni bir model öneriyor: Vatandaş Ekonomisi. AI yönetişimi ve Telegram üzerindeki mikro-devlet yapısını kullanarak, pasif kullanıcıları haklara, rütbelere ve gelire sahip aktif Vatandaşlara dönüştürüyoruz." },
            intro: { title: "1. Giriş", body: "SiyahKare oyunlaştırılmış bir mikro-devlettir. İnsan çabasını doğrulamak için 'Nasip Tasks Engine' ve değeri dağıtmak için 'NCR Token' kullanır. Yeni kullanıcı akışına dayanan Ponzi benzeri 'oyna-kazan' modellerinin aksine, SiyahKare dış gelirin (GMV) iç değeri desteklediği 'Eylem-Değer' dönüşümüne odaklanır." },
            tokenomics: { title: "2. NCR Tokenomisi", body: "Tür: Utility & Governance. Politika: Net-Sıfır Enflasyon Hedefi. AI Konseyi 'musluğu' (görevlerden gelen emisyonlar) ve 'gideri' (hizmetler/vergilerden gelen yakımlar) izler. Enflasyon güvenli bandı aşarsa, Fiscal AI ekonomiyi soğutmak için görev ödüllerini (DRM) otomatik olarak ayarlar." },
            governance: { title: "3. Yönetişim Yapısı", body: "Yönetişim hibrittir. Başkan (Baron) vizyon ve veto yetkisine sahiptir. AI Konseyi günlük matematiksel icrayı yönetir. Vatandaşlar, Rütbe ve Katkı Puanlarına orantılı olarak oy hakkı kazanır." },
            roadmap: { title: "4. Yol Haritası Özeti", body: "Şu anda Genesis Aşamasındayız. Odak noktası çekirdek vatandaş tabanını oluşturmak ve Nasip algoritmalarını iyileştirmektir. 2. Aşama, tam AI Konseyi kurulumunu tanıtacaktır." }
          }
        }
    }
  },
  en: {
    meta: {
      title: 'SiyahKare | AI-Governed Micro-Nation',
    },
    nav: {
      about: 'About',
      benefits: 'Benefits',
      economy: 'Economy',
      governance: 'Governance',
      roadmap: 'Roadmap',
      citizenPortal: 'Citizen Portal',
      whitepaper: 'Whitepaper',
      constitution: 'Constitution'
    },
    hero: {
      phase: 'GENESIS PHASE LIVE',
      titleHighlight: 'Constitutional Micro-Nation',
      titlePrefix: 'First AI-Governed',
      subtitle: 'A digital state operating on Telegram, powered by NCR, providing real income to its citizens via Nasip Tasks.',
      bullets: {
        telegram: { title: 'Telegram Based', desc: 'AI-first state structure' },
        tasks: { title: 'Daily Tasks', desc: 'Earn NCR, create income' },
        ai: { title: 'AI + Constitution', desc: 'Transparent economy management' },
        actor: { title: 'Rights Holder', desc: 'Citizen ≠ User' }
      },
      cta: {
        enter: "Enter Citizen Portal",
        whitepaper: 'Whitepaper v1.0'
      }
    },
    whatIs: {
      title: 'What is SiyahKare?',
      p1: 'SiyahKare is not a Web3 project. It is not an app.',
      highlight: 'SiyahKare is a digital micro-nation governed by AI and protected by constitutional boundaries.',
      p2: 'Its foundation rests on a transparent constitution and autonomous economic balance. Decisions here are made by coded logic and community interest, not arbitrary admins.',
      stack: 'Governance → Economy → Citizens → MiniApps → Telegram',
      layers: {
        l1: { title: 'President.BARON', sub: 'Human Governance & Veto' },
        l2: { title: 'AI Council', sub: 'Neural Governor • Fiscal AI • Yield Balancer' },
        l3: { title: 'NCR Economy', sub: 'State Currency • Treasury' },
        l4: { title: 'Citizen System', sub: 'Identity • Rank • Nasip Tasks' },
        l5: { title: 'MiniApps + Telegram', sub: 'Infrastructure Layer' }
      }
    },
    benefits: {
      title: 'Why Become a Citizen?',
      subtitle: 'In SiyahKare, you are not a "scrolling consumer" but a "producing and earning citizen".',
      b1: {
        title: 'Real Micro Income',
        desc: 'Earn NCR with 5–15 minutes of daily tasks.',
        details: ['Level 2 Citizen: ~180–420 NCR/Month', 'Level 4 Citizen: ~900–2500 NCR/Month', 'Income depends on activity and economy mode.']
      },
      b2: {
        title: 'Constitutional Assurance',
        desc: 'Rewards determined by formula, no "arbitrary admin".',
        details: ['Emission & Burn under AI control', 'Transparent economic decisions', 'Logs open to citizen audit']
      },
      b3: {
        title: 'Status, Level & Nasip Bar',
        desc: 'You become a Citizen, not a user.',
        details: ['Level (0–100) and Rank system', 'Nasip Bar multiplier', 'Rising priority and rights']
      }
    },
    tasks: {
      title: 'Nasip Tasks:',
      titleHighlight: '"Effort → Income" Engine',
      desc: 'You do small tasks every day. The system converts this effort into NCR income and XP. Nasip is not an excuse in SIYAHKARE. The Effort → Task → NCR → Income chain is written in math.',
      cats: { title: '5 Task Categories', desc: 'Growth, Engagement, GMV, Creator, Prestige' },
      rewards: { title: 'Dynamic Rewards (DRM)', desc: 'Rewards adjusted by AI based on economic health.' },
      daily: 'For an average L10 citizen:',
      dailyVal: 'daily 110–190 NCR range',
      loop: {
        title: 'Daily Loop',
        items: ['Daily check-in (NCR + XP)', 'Use 1 MiniApp (GMV Contribution)', 'Invite new citizen (Bonus)', 'Check Nasip Bar'],
        potential: 'DAILY POTENTIAL'
      }
    },
    economy: {
      title: 'NCR: State Currency',
      desc: 'NCR is not a meme coin. It is not just a "utility token". NCR is the official currency of the SiyahKare economy, managed by AI and protected by constitutional boundaries.',
      cards: {
        c1: { title: 'Dynamic Supply', desc: 'Emission and burn balanced by AI; target is net zero inflation band.' },
        c2: { title: 'Price Stability Band', desc: 'Soft peg band and Treasury intervention rules defined for NCR price.' },
        c3: { title: 'Sinks & Staking', desc: 'NCR can be locked in staking, premium features, creator boosts, and insurance pools.' }
      },
      cta: 'Read Economy & NCR Tokenomics'
    },
    governance: {
      title: 'AI Council',
      subtitle: 'The economy is managed by Constitutional AI, not humans.',
      cards: {
        c1: { name: 'Neural Governor', role: 'Executive Branch', desc: 'Optimizes reward, tax, subsidy, sink, and emission settings.' },
        c2: { name: 'Yield Balancer', role: 'Monetary Policy Brain', desc: 'Balances NCR rewards and emissions, determines DRM.' },
        c3: { name: 'Fiscal AI', role: 'Tax & Subsidy', desc: 'Protects lower-level citizens, takes reasonable share from upper levels.' },
        c4: { name: 'Economic Guard', role: 'Constitutional Court', desc: 'Audits decisions of other AIs, blocks meltdown risks.' }
      },
      human: { title: 'The final word is human', desc: 'President.BARON holds override and veto power in critical situations. AI frames the human; the human frames the AI.' }
    },
    target: {
      title: 'Who is SiyahKare For?',
      c1: { title: 'Citizens', sub: 'Worker / Everyday User', desc: 'Those who want to create regular micro-income by spending 5-15 mins daily. Those who want to be part of a real economy, not just play a game.' },
      c2: { title: 'Creators', sub: 'Performers & Influencers', desc: 'Those who want to connect their audience and content to the economy. Those wanting earnings + GMV share + rank via NCR.' },
      c3: { title: 'Builders', sub: 'Developers & Operators', desc: 'Those developing Telegram bots / MiniApps. Engineers wanting to build apps inside the state and get revenue share.' }
    },
    roadmap: {
      title: 'Roadmap',
      subtitle: 'From Micro-Nation to Million Citizens',
      phases: {
        p1: { name: 'Genesis', items: ['NovaCore Infrastructure', 'Whitepaper v1.0', 'Nasip Tasks Engine v1.0', 'Citizen Portal MVP'] },
        p2: { name: 'Foundation', items: ['AI Governance v1.0', 'NCR Simulation', 'First MiniApp Set', '10K Citizen Goal'] },
        p3: { name: 'Growth', items: ['TON Mainnet Integration', 'NCR Token Launch', '50+ MiniApps', '100K+ Citizens'] },
        p4: { name: 'Autonomous', items: ['AI Council Full Integration', 'Cognitive Constitution', 'Global Growth', '1M+ Citizens'] }
      }
    },
    faq: {
      title: 'FAQ',
      q1: { q: 'Is SiyahKare a coin or a state?', a: 'SiyahKare is not a project built around a coin. Conversely: A micro-nation was designed, and NCR was defined as its currency. Coin = tool; state = system.' },
      q2: { q: 'Can I really earn money?', a: 'Yes, but it\'s not a lottery. Earnings come via Nasip Tasks, through formulas and AI-economy calculated tasks. Regular tasks and rising citizenship rank target meaningful monthly micro-income.' },
      q3: { q: 'What is the risk? How does it not crash?', a: 'There are constitutional limits for emission. Economic Guard audits all Neural Governor decisions. In meltdown risk: Emission stop, emergency burn activates. Not a pump & dump, but an economy with defined risks.' },
      q4: { q: 'Who determines NCR price?', a: 'The market determines it; AI only tries to protect the band (Soft peg band). Automatic policies and Treasury interventions activate based on volatility.' },
      q5: { q: 'Who runs the state? AI or Baron?', a: 'Both, but not at the same time. Daily economy by AI Council; Constitution and crisis overrides by President.BARON. AI does not frame the human; human frames the AI.' }
    },
    footer: {
      claim: '"SiyahKare was founded to close the user economy era and open the citizen economy era."',
      rights: '© 2024 SiyahKare. Authority: BARON. All Rights Reserved.',
      back: 'Back to Capital'
    },
    legal: {
        constTitle: "SiyahKare Constitution",
        wpTitle: "Whitepaper v1.0",
        back: "Back to Capital",
        updated: "DECEMBER 2024",
        authority: "Authority: BARON",
        version: "Version 1.0",
        download: "Download PDF (Coming Soon)",
        content: {
          constitution: {
            art1: { title: "Article I: Definition of State", body: "SiyahKare is defined not as a corporation or a community, but as a sovereign digital micro-nation existing on the Telegram network. Its sovereignty is derived from the collective consensus of its Citizens and the algorithmic enforcement of the AI Council." },
            art2: { title: "Article II: Rights of Citizens", body: "Every Citizen holding a valid rank (Level 1+) possesses the inherent right to: Earn NCR through verifiable labor (Nasip Tasks); Access transparent records of Economic Governance; Retain ownership of their digital assets and rank; Protection from arbitrary seizure, barring automated protocols defined in the Economic Guard code." },
            art3: { title: "Article III: The AI Council", body: "Executive economic power is vested in the AI Council (Neural Governor, Yield Balancer, Fiscal AI, Economic Guard). These entities operate within the strict bounds of this Constitution. They cannot alter the Constitution itself without a Tier-1 Referendum." },
            art4: { title: "Article IV: The NCR Currency", body: "NCR is the lifeblood of the State. Its supply, emission, and burning are regulated to ensure sustainability. Any attempt to artificially manipulate the NCR value outside of Constitutional parameters is an act of treason." },
            disclaimer: "* This document is a summary. The full cryptographic hash of the Constitution is stored on the chain."
          },
          whitepaper: {
            abstract: { title: "Abstract", body: "The current digital economy treats users as products. Platforms extract value from attention and labor without fair compensation. SiyahKare proposes a new model: The Citizen Economy. By leveraging AI governance and a micro-nation framework on Telegram, we transform passive users into active Citizens with rights, ranks, and revenue." },
            intro: { title: "1. Introduction", body: "SiyahKare is a gamified micro-nation. It uses the 'Nasip Tasks Engine' to verify human effort and the 'NCR Token' to distribute value. Unlike traditional 'play-to-earn' models which rely on Ponzi-like influxes of new users, SiyahKare focuses on 'Action-to-Value' conversion, where external revenue (GMV) supports internal value." },
            tokenomics: { title: "2. The NCR Tokenomics", body: "Ticker: NCR. Type: Utility & Governance. Policy: Net-Zero Inflation Target. The AI Council monitors the 'faucet' (emissions from tasks) and the 'sink' (burns from services/taxes). If inflation exceeds the safe band, the Fiscal AI automatically adjusts task rewards (DRM) to cool the economy down." },
            governance: { title: "3. Governance Structure", body: "Governance is hybrid. The President (Baron) holds the vision and veto power. The AI Council manages the daily mathematical execution. Citizens gain voting power proportional to their Rank and Contribution Score." },
            roadmap: { title: "4. Roadmap Summary", body: "We are currently in the Genesis Phase. The focus is on building the core citizen base and refining the Nasip algorithms. Phase 2 will introduce the full AI Council deployment." }
          }
        }
    }
  },
  ru: {
    meta: {
      title: 'SiyahKare | Микрогосударство с ИИ-управлением',
    },
    nav: {
      about: 'О нас',
      benefits: 'Преимущества',
      economy: 'Экономика',
      governance: 'Управление',
      roadmap: 'Дорожная карта',
      citizenPortal: 'Портал Гражданина',
      whitepaper: 'Whitepaper',
      constitution: 'Конституция'
    },
    hero: {
      phase: 'ФАЗА ГЕНЕЗИСА АКТИВНА',
      titleHighlight: 'Первое Конституционное Микрогосударство',
      titlePrefix: 'Управляемое ИИ',
      subtitle: 'Цифровое государство в Telegram, работающее на NCR и обеспечивающее реальный доход гражданам через Nasip Tasks.',
      bullets: {
        telegram: { title: 'База в Telegram', desc: 'AI-first структура государства' },
        tasks: { title: 'Ежедневные Задания', desc: 'Зарабатывай NCR, создавай доход' },
        ai: { title: 'ИИ + Конституция', desc: 'Прозрачное управление экономикой' },
        actor: { title: 'Правообладатель', desc: 'Гражданин ≠ Пользователь' }
      },
      cta: {
        enter: "Войти в Портал",
        whitepaper: 'Whitepaper v1.0'
      }
    },
    whatIs: {
      title: 'Что такое SiyahKare?',
      p1: 'SiyahKare — это не Web3 проект. И не приложение.',
      highlight: 'SiyahKare — это цифровое микрогосударство, управляемое ИИ и защищенное конституционными границами.',
      p2: 'Его основа — прозрачная конституция и автономный экономический баланс. Решения здесь принимаются не произволом админов, а кодовой логикой и интересами сообщества.',
      stack: 'Управление → Экономика → Граждане → MiniApps → Telegram',
      layers: {
        l1: { title: 'President.BARON', sub: 'Человеческое управление и Вето' },
        l2: { title: 'AI Совет', sub: 'Нейронный Губернатор • Фискальный ИИ • Балансировщик Дохода' },
        l3: { title: 'Экономика NCR', sub: 'Государственная Валюта • Казначейство' },
        l4: { title: 'Система Гражданства', sub: 'Личность • Ранг • Nasip Tasks' },
        l5: { title: 'MiniApps + Telegram', sub: 'Инфраструктурный Слой' }
      }
    },
    benefits: {
      title: 'Зачем становиться гражданином?',
      subtitle: 'В SiyahKare вы не "скроллящий потребитель", а "производящий и зарабатывающий гражданин".',
      b1: {
        title: 'Реальный Микро-Доход',
        desc: 'Зарабатывайте NCR за 5–15 минут заданий в день.',
        details: ['Гражданин Ур. 2: ~180–420 NCR/мес', 'Гражданин Ур. 4: ~900–2500 NCR/мес', 'Доход зависит от активности и режима экономики.']
      },
      b2: {
        title: 'Конституционная Гарантия',
        desc: 'Награды по формуле, никакого "произвола админов".',
        details: ['Эмиссия и сжигание под контролем ИИ', 'Прозрачные экономические решения', 'Логи открыты для аудита граждан']
      },
      b3: {
        title: 'Статус, Уровень и Nasip Bar',
        desc: 'Вы становитесь Гражданином, а не пользователем.',
        details: ['Система уровней (0–100) и рангов', 'Множитель Nasip Bar', 'Растущий приоритет и права']
      }
    },
    tasks: {
      title: 'Nasip Tasks:',
      titleHighlight: 'Двигатель "Усилие → Доход"',
      desc: 'Вы выполняете небольшие задания каждый день. Система конвертирует эти усилия в доход NCR и XP. Nasip — это не оправдание в SIYAHKARE. Цепочка Усилие → Задание → NCR → Доход прописана математически.',
      cats: { title: '5 Категорий Заданий', desc: 'Рост, Вовлечение, GMV, Создатель, Престиж' },
      rewards: { title: 'Динамические Награды (DRM)', desc: 'Награды регулируются ИИ в зависимости от здоровья экономики.' },
      daily: 'Для среднего гражданина Ур. 10:',
      dailyVal: 'ежедневно 110–190 NCR',
      loop: {
        title: 'Дневной Цикл',
        items: ['Ежедневный вход (NCR + XP)', 'Исп. 1 MiniApp (Вклад в GMV)', 'Пригласить гражданина (Бонус)', 'Проверка Nasip Bar'],
        potential: 'ДНЕВНОЙ ПОТЕНЦИАЛ'
      }
    },
    economy: {
      title: 'NCR: Валюта Государства',
      desc: 'NCR — это не мем-коин. Это не просто "утилитарный токен". NCR — официальная валюта экономики SiyahKare, управляемая ИИ и защищенная конституцией.',
      cards: {
        c1: { title: 'Динамическое Предложение', desc: 'Эмиссия и сжигание балансируются ИИ; цель — нетто-нулевая инфляция.' },
        c2: { title: 'Полоса Стабильности Цены', desc: 'Правила мягкой привязки и интервенции Казначейства определены для цены NCR.' },
        c3: { title: 'Синки и Стейкинг', desc: 'NCR можно блокировать в стейкинге, премиум-функциях, бустах создателей и страховых пулах.' }
      },
      cta: 'Читать про Экономику и Токеномику'
    },
    governance: {
      title: 'Совет ИИ',
      subtitle: 'Экономикой управляет Конституционный ИИ, а не люди.',
      cards: {
        c1: { name: 'Нейронный Губернатор', role: 'Исполнительная Власть', desc: 'Оптимизирует награды, налоги, субсидии, сжигание и эмиссию.' },
        c2: { name: 'Балансировщик Дохода', role: 'Мозг Монетарной Политики', desc: 'Балансирует награды NCR и эмиссию, определяет DRM.' },
        c3: { name: 'Фискальный ИИ', role: 'Налоги и Субсидии', desc: 'Защищает граждан низкого уровня, берет разумную долю с высоких уровней.' },
        c4: { name: 'Экономический Страж', role: 'Конституционный Суд', desc: 'Аудирует решения других ИИ, блокирует риски краха.' }
      },
      human: { title: 'Последнее слово за человеком', desc: 'President.BARON имеет право вето в критических ситуациях. ИИ не ограничивает человека; человек ограничивает ИИ.' }
    },
    target: {
      title: 'Для кого SiyahKare?',
      c1: { title: 'Граждане', sub: 'Рабочий / Повседневный юзер', desc: 'Те, кто хочет создавать регулярный микро-доход, уделяя 5-15 минут в день. Те, кто хочет быть частью реальной экономики, а не просто игры.' },
      c2: { title: 'Криэйторы', sub: 'Перформеры и Инфлюенсеры', desc: 'Те, кто хочет подключить свою аудиторию и контент к экономике. Желающие заработок + долю GMV + ранг через NCR.' },
      c3: { title: 'Строители', sub: 'Разработчики и Операторы', desc: 'Разработчики Telegram ботов / MiniApps. Инженеры, желающие строить приложения внутри государства и получать долю выручки.' }
    },
    roadmap: {
      title: 'Дорожная карта',
      subtitle: 'От Микрогосударства к Миллиону Граждан',
      phases: {
        p1: { name: 'Генезис', items: ['Инфраструктура NovaCore', 'Whitepaper v1.0', 'Движок Nasip Tasks v1.0', 'MVP Портала Гражданина'] },
        p2: { name: 'Фундамент', items: ['ИИ Управление v1.0', 'Симуляция NCR', 'Первый набор MiniApp', 'Цель: 10K Граждан'] },
        p3: { name: 'Рост', items: ['Интеграция TON Mainnet', 'Запуск токена NCR', '50+ MiniApps', '100K+ Граждан'] },
        p4: { name: 'Автономия', items: ['Полная интеграция Совета ИИ', 'Когнитивная Конституция', 'Глобальный Рост', '1M+ Граждан'] }
      }
    },
    faq: {
      title: 'FAQ',
      q1: { q: 'SiyahKare — это коин или государство?', a: 'SiyahKare не проект вокруг коина. Наоборот: Было спроектировано микрогосударство, и NCR определен как его валюта. Коин = инструмент; государство = система.' },
      q2: { q: 'Можно ли реально заработать?', a: 'Да, но это не лотерея. Доход идет через Nasip Tasks, по формулам и задачам, рассчитанным ИИ-экономикой. Регулярные задачи и рост ранга гражданства нацелены на значимый ежемесячный микро-доход.' },
      q3: { q: 'В чем риск? Как это не рухнет?', a: 'Существуют конституционные лимиты эмиссии. Экономический Страж проверяет все решения Губернатора. При риске краха: остановка эмиссии, аварийное сжигание. Не pump & dump, а экономика с определенными рисками.' },
      q4: { q: 'Кто определяет цену NCR?', a: 'Рынок определяет; ИИ лишь пытается защитить диапазон (Soft peg). Автоматические политики и интервенции Казначейства активируются при волатильности.' },
      q5: { q: 'Кто управляет государством? ИИ или Барон?', a: 'Оба, но не одновременно. Ежедневная экономика — Совет ИИ; Конституция и кризисное управление — President.BARON. ИИ не ограничивает человека; человек ограничивает ИИ.' }
    },
    footer: {
      claim: '"SiyahKare была основана, чтобы закрыть эру экономики пользователей и открыть эру экономики граждан."',
      rights: '© 2024 SiyahKare. Authority: BARON. All Rights Reserved.',
      back: 'Вернуться в Столицу'
    },
    legal: {
        constTitle: "Конституция SiyahKare",
        wpTitle: "Whitepaper v1.0",
        back: "Вернуться в Столицу",
        updated: "ДЕКАБРЬ 2024",
        authority: "Authority: BARON",
        version: "Версия 1.0",
        download: "Скачать PDF (Скоро)",
        content: {
          constitution: {
            art1: { title: "Статья I: Определение Государства", body: "SiyahKare определяется не как корпорация или сообщество, а как суверенное цифровое микрогосударство в сети Telegram. Его суверенитет проистекает из коллективного консенсуса Граждан и алгоритмического исполнения Советом ИИ." },
            art2: { title: "Статья II: Права Граждан", body: "Каждый Гражданин, имеющий действительный ранг (Уровень 1+), обладает неотъемлемым правом: Зарабатывать NCR через проверяемый труд (Nasip Tasks); Иметь доступ к прозрачным записям Экономического Управления; Сохранять право собственности на свои цифровые активы и ранг; Быть защищенным от произвольного изъятия, за исключением автоматических протоколов, определенных в коде Экономического Стража." },
            art3: { title: "Статья III: Совет ИИ", body: "Исполнительная экономическая власть возложена на Совет ИИ (Нейронный Губернатор, Балансировщик Дохода, Фискальный ИИ, Экономический Страж). Эти сущности действуют в строгих рамках данной Конституции. Они не могут изменять саму Конституцию без Референдума 1-го Уровня." },
            art4: { title: "Статья IV: Валюта NCR", body: "NCR — это жизненная сила Государства. Его предложение, эмиссия и сжигание регулируются для обеспечения устойчивости. Любая попытка искусственно манипулировать стоимостью NCR вне Конституционных параметров является актом государственной измены." },
            disclaimer: "* Этот документ является кратким изложением. Полный криптографический хеш Конституции хранится в сети."
          },
          whitepaper: {
            abstract: { title: "Абстракт", body: "Текущая цифровая экономика относится к пользователям как к продукту. Платформы извлекают ценность из внимания и труда без справедливой компенсации. SiyahKare предлагает новую модель: Экономика Граждан. Используя управление ИИ и структуру микрогосударства в Telegram, мы превращаем пассивных пользователей в активных Граждан с правами, рангами и доходом." },
            intro: { title: "1. Введение", body: "SiyahKare — это геймифицированное микрогосударство. Оно использует 'Движок Nasip Tasks' для верификации человеческих усилий и 'Токен NCR' для распределения ценности. В отличие от традиционных моделей 'play-to-earn', зависящих от притока новых пользователей как в пирамиде, SiyahKare фокусируется на конверсии 'Действие-в-Ценность', где внешний доход (GMV) поддерживает внутреннюю стоимость." },
            tokenomics: { title: "2. Токеномика NCR", body: "Тикер: NCR. Тип: Утилитарный и Управление. Политика: Цель Нетто-Нулевой Инфляции. Совет ИИ мониторит 'кран' (эмиссия от задач) и 'слив' (сжигание от услуг/налогов). Если инфляция превышает безопасный диапазон, Фискальный ИИ автоматически регулирует награды за задачи (DRM), чтобы охладить экономику." },
            governance: { title: "3. Структура Управления", body: "Управление гибридное. Президент (Барон) держит видение и право вето. Совет ИИ управляет ежедневным математическим исполнением. Граждане получают право голоса пропорционально их Рангу и Очкам Вклада." },
            roadmap: { title: "4. Резюме Дорожной Карты", body: "Мы находимся в Фазе Генезиса. Фокус на создании базы граждан и уточнении алгоритмов Nasip. Фаза 2 представит полное развертывание Совета ИИ." }
          }
        }
    }
  }
};
