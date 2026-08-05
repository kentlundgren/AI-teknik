// Delad ordlista: viktiga AI-modeller/AI-verktyg som nämns i presentationen.
// Varje term länkas bara vid sin FÖRSTA förekomst, i den ordning slides ligger
// i PROJECTS (projects.js) — inte i den ordning en besökare råkar bläddra
// (bakåtnavigering/loop ska inte ändra vem som "vinner" första-förekomsten).
// Alla URL:er HTTP-verifierade innan tillägg (se PRD, avsnitt 7).
const GLOSSARY = [
  { term: "Claude Cowork", url: "https://claude.com/product/cowork" },
  { term: "Claude Code", url: "https://www.anthropic.com/claude-code" },
  { term: "Claude 3", url: "https://www.anthropic.com/news/claude-3-family" },
  { term: "Claude 4", url: "https://www.anthropic.com/news/claude-4" },
  { term: "Claude 5", url: "https://www.anthropic.com/news/claude-sonnet-5" },
  { term: "Claude", url: "https://www.anthropic.com/claude" },
  { term: "Anthropic", url: "https://www.anthropic.com" },
  { term: "GitHub Pages", url: "https://pages.github.com" },
  { term: "OpenAI Whisper", url: "https://openai.com/index/whisper/" },
  { term: "ChatGPT", url: "https://openai.com/index/chatgpt/" },
  { term: "PyCharm", url: "https://www.jetbrains.com/pycharm/" },
  { term: "Cursor", url: "https://cursor.com" },
  { term: "ffmpeg", url: "https://ffmpeg.org" },
  { term: "Poe", url: "https://poe.com" },
  { term: "AI Act", url: "https://commission.europa.eu/news-and-media/news/ai-act-enters-force-2024-08-01_en" },
  { term: "GPT-4o", url: "https://openai.com/index/hello-gpt-4o/" },
  { term: "GPT-4", url: "https://openai.com/index/gpt-4-research/" },
  { term: "Sora", url: "https://openai.com/index/sora/" },
  { term: "Llama 3", url: "https://ai.meta.com/blog/meta-llama-3/" },
  { term: "OpenAI", url: "https://openai.com" },
  { term: "Perplexity", url: "https://www.perplexity.ai" }
];

// Längst-först, så "Claude Code" matchar före "Claude", "GitHub Pages" före
// en eventuell framtida bar "GitHub" osv — ingen delsträngskrock.
const GLOSSARY_BY_LENGTH = GLOSSARY.slice().sort(function (a, b) {
  return b.term.length - a.term.length;
});

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// En regex-pass över EN textsträng: länkar högst en gång per term som ännu
// inte finns i usedTerms. Alternativen i regexen är längst-först ordnade,
// så överlappande termer (t.ex. "Claude" inuti "Claude Code") aldrig
// dubbelmatchas — matchningen "vinner" på position, inte på ordning i listan.
function linkifyOnePass(text, usedTerms) {
  const available = GLOSSARY_BY_LENGTH.filter(function (g) {
    return !usedTerms.has(g.term);
  });
  if (!available.length) return text;
  const pattern = available.map(function (g) { return escapeRegex(g.term); }).join("|");
  const re = new RegExp("\\b(" + pattern + ")\\b", "g");
  return text.replace(re, function (match) {
    const hit = available.find(function (g) {
      return g.term.toLowerCase() === match.toLowerCase();
    });
    if (!hit || usedTerms.has(hit.term)) return match;
    usedTerms.add(hit.term);
    return '<a class="term-link" href="' + hit.url + '" target="_blank" rel="noopener">' + match + "</a>";
  });
}

// Går igenom hela PROJECTS-listan EN gång, i dess egen array-ordning, och
// bakar in länkarna direkt i caption/facts/code-fälten. Körs en gång vid
// sidladdning, oberoende av i vilken ordning en besökare sedan navigerar.
function linkifyAllProjects(projects) {
  const usedTerms = new Set();
  projects.forEach(function (project) {
    if (project.kind === "milestone" || project.kind === "year-card") {
      (project.facts || []).forEach(function (f) {
        f.text = linkifyOnePass(f.text, usedTerms);
      });
    } else if (project.kind === "code") {
      project.code = linkifyOnePass(project.code, usedTerms);
    } else if (project.kind === "screenshot") {
      project.caption = linkifyOnePass(project.caption, usedTerms);
    }
  });
}

window.GLOSSARY = GLOSSARY;
window.linkifyAllProjects = linkifyAllProjects;
