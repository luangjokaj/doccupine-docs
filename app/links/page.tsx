import { Metadata } from "next";
import { Docs } from "@/components/Docs";
import configData from "@/config.json";

interface Config {
  name?: string;
  icon?: string;
  preview?: string;
}

const config = configData as Config;

const content = `# Links
Add a row of static links at the top of your documentation. Links open in a new tab and are useful for pointing users to related resources, repositories, or external docs.

## links.json
Place a \`links.json\` at your project root (the same folder where you execute \`npx doccupine\`). When present, Doccupine displays the links in a bar above the main content. You can add as many links as you need.

### Example links.json

\`\`\`json
[
  {
    "title": "Openclaw",
    "url": "https://github.com/openclaw/openclaw"
  },
  {
    "title": "Doccupine",
    "url": "https://github.com/doccupine/doccupine"
  },
  {
    "title": "OpenAI",
    "url": "https://openai.com/"
  }
]
\`\`\`

### Fields
- **title**: The label shown for the link in the bar.
- **url**: The destination URL. Links open in a new tab with \`target="_blank"\` and \`rel="noopener noreferrer"\`.

## Behavior
- **Empty or missing file**: If \`links.json\` is empty or not present, the links bar is hidden.
- **Order**: Links appear in the same order as in the array.
- **No limit**: Add as many links as you want; the bar scrolls horizontally on smaller screens if needed.
`;

export const metadata: Metadata = {
  title: `Links ${config.name ? "- " + config.name : "- Doccupine"}`,
  description: `Add static links at the top of the documentation website.`,
  icons: `${config.icon || "https://doccupine.com/favicon.ico"}`,
  openGraph: {
    title: `Links ${config.name ? "- " + config.name : "- Doccupine"}`,
    description: `Add static links at the top of the documentation website.`,
    images: `${config.preview || "https://doccupine.com/preview.png"}`,
  },
};

export default function Page() {
  return <Docs content={content} />;
}
