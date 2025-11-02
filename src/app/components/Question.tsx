export default function Question({ question }: { question: string }) {
  return (
    <div className="text-5xl mb-10 font-sans tracking-tight leading-5">
      {question}
    </div>
  );
}
