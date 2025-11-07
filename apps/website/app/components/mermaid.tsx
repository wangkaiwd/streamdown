import { Section } from "./section";

export const MermaidDemo = () => {
  const mermaidExample = `Interactive diagram rendering with manual control. Click the copy icon next to any Mermaid diagram to copy the code to your clipboard.

## Simple Flowchart

\`\`\`mermaid
xychart-beta
    title "Sales Revenue"
    x-axis [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]
    y-axis "Revenue (in $)" 4000 --> 11000
    bar [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]
    line [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]
`;

  return (
    <Section
      description={
        <>
          Streamdown supports Mermaid diagrams with customizable themes. Current
          theme is "base".
        </>
      }
      markdown={mermaidExample}
      speed={60}
      streamdownProps={{
        mermaidConfig: {
          theme: "base",
        },
      }}
      title="Interactive Mermaid Diagrams"
    />
  );
};
