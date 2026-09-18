/* ---------------------------------------------------------------
   Källdata för "Rösterna efter ChatGPT".
   Samma nio primärkällor + podd som i blogginlägget
   (klel.wordpress.com, 2026-09-18) och PRD_rosterna_efter_chatgpt.md.
   Lägg aldrig till en källa här utan att den finns länkkontrollerad
   i PRD:ns avsnitt 7 (Regel 2, kent-meta-regler-for-code).
--------------------------------------------------------------- */

const voices = [
  {
    id: "tegmark",
    name: "Max Tegmark",
    role: "Fysiker, MIT. Ordförande, Future of Life Institute.",
    verdict: "Mest konsekvent",
    verdictTone: "steady",
    summary:
      "Samma tes i tre år, i allt skarpare form: kapplöpningen mot allt kraftfullare AI måste hejdas tills kontrollen är bevisbar.",
    timeline: [
      {
        date: "2023-03-22",
        title: "Pause Giant AI Experiments: An Open Letter",
        pub: "Future of Life Institute",
        url: "https://futureoflife.org/open-letter/pause-giant-ai-experiments/",
        note: "Kravde minst sex månaders paus i träningen av system mer kraftfulla än GPT-4. Det första stora utspelet som gjorde frågan till en nyhet utanför forskarvärlden."
      },
      {
        date: "2023-09-05",
        title: "Provably safe systems: the only path to controllable AGI",
        pub: "arXiv, med Steve Omohundro",
        url: "https://doi.org/10.48550/arXiv.2309.01933",
        note: "Tegmarks första större egna säkerhetstext efter ChatGPT: AGI utan bevisbar kontroll är oacceptabel."
      },
      {
        date: "2024-05-10",
        title: "Towards Guaranteed Safe AI",
        pub: "arXiv, med Dalrymple, Skalse, Bengio, Russell m.fl.",
        url: "https://doi.org/10.48550/arXiv.2405.06624",
        note: "Empirisk testsäkerhet räcker inte för autonoma, generella system."
      },
      {
        date: "2025-10-22",
        title: "Statement on Superintelligence",
        pub: "Future of Life Institute",
        url: "https://superintelligence-statement.org/",
        note: "Villkorat förbud mot superintelligens, tills det finns vetenskaplig konsensus om säker kontroll och starkt folkligt stöd."
      }
    ]
  },
  {
    id: "haggstrom",
    name: "Olle Häggström",
    role: "Professor i matematisk statistik, Chalmers.",
    verdict: "Mest produktiv",
    verdictTone: "steady",
    summary:
      "Har kortat sin egen tidslinje från decennier till år. Skriver löpande, ger minst utrymme för tvetydighet av de fyra.",
    timeline: [
      {
        date: "2025-02-21",
        title: "Our AI future and the need to stop the bear",
        pub: "Egen essä",
        url: "https://www.math.chalmers.se/~olleh/AIandHumanCivilization.pdf",
        note: "Häggströms egen huvudreferens efter LLM-genombrottet — han rekommenderar den före sin bok från 2016."
      },
      {
        date: "2026-01-19",
        title: "AI-utvecklingen måste stävjas snarast möjligt",
        pub: "Opulens",
        url: "https://www.opulens.se/opinion/kronikor/ai-utvecklingen-maste-stavjas-snarast-mojligt/",
        note: "Svensk kortversion av samma tes för en bredare läsekrets."
      },
      {
        date: "2026-02-20",
        title: "Full speed ahead!",
        pub: "Crunch Time for Humanity (Substack)",
        url: "https://haggstrom.substack.com/p/full-speed-ahead",
        note: "Direkt polemik mot både Dario Amodei och Nick Bostroms timing-paper."
      }
    ]
  },
  {
    id: "bostrom",
    name: "Nick Bostrom",
    role: "Filosof. Definierade superintelligens-begreppsapparaten (2014).",
    verdict: "Förskjuten fokus",
    verdictTone: "shifted",
    summary:
      "Mannen som en gång definierade tesen är inte längre den som driver den hårdast. Nya texter handlar om timing och en “löst värld”, inte om stopp.",
    timeline: [
      {
        date: "2024",
        title: "Deep Utopia: Life and Meaning in a Solved World",
        pub: "Ideapress Publishing",
        url: "https://nickbostrom.com/deep-utopia",
        note: "Utgår från att superintelligens går att styra — frågar istället vad ett meningsfullt liv blir i en “löst” värld."
      },
      {
        date: "2026",
        title: "Optimal Timing for Superintelligence",
        pub: "Working paper, version 1.0",
        url: "https://nickbostrom.com/optimal.pdf",
        note: "“Swift to harbor, slow to berth” — argumenterar att snabb AGI ofta är bättre än att vänta, för människor som redan lever nu."
      }
    ]
  },
  {
    id: "sandberg",
    name: "Anders Sandberg",
    role: "Framtidsforskare, existentiella risker.",
    verdict: "Tystast i skrift",
    verdictTone: "quiet",
    summary:
      "Mest respekterad bland fackfolk, men svagast “det här är farligt”-röst i just den här perioden — mätt i vad som faktiskt skrivits ner.",
    timeline: [
      {
        date: "2026-09-16",
        title: "Anders Sandberg: Risken att AI utplånar mänskligheten är omkring 10 %",
        pub: "En AI till Kaffet #104, Marcus Weiland",
        url: "https://pca.st/t8wltx0k",
        note: "Riskuppskattningen ges muntligt i ett samtal — inte i en skriven, citerbar text. Ingen egen publicerad motsvarighet till Tegmarks statement eller Häggströms essä finns i perioden."
      }
    ]
  }
];

const meta = {
  blogUrl: "https://klel.wordpress.com/2026/09/18/generativ-ai-farlig-farligt-eller-harligt-harligt/",
  blogTitle: "Vem har hållit fast vid AI-varningen efter ChatGPT – och vem har glidit?",
  prdUrl: "https://github.com/kentlundgren/AI-teknik/blob/main/AI_sakerhet/Nummer1/PRD/PRD_rosterna_efter_chatgpt.md",
  githubUrl: "https://github.com/kentlundgren/AI-teknik/tree/main/AI_sakerhet/Nummer1",
  statementUrl: "https://superintelligence-statement.org/"
};
