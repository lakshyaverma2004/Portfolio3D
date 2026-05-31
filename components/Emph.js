// Renders text with *asterisk-wrapped* words as italic serif accents.
// Usage: <Emph text="What I've *built*." />
export default function Emph({ text }) {
  const parts = String(text).split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("*") && part.endsWith("*")) {
          return <em key={i}>{part.slice(1, -1)}</em>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
