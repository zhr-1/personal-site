type ArchitectureFlowProps = {
  label: string;
  nodes: string[];
};

export default function ArchitectureFlow({ label, nodes }: ArchitectureFlowProps) {
  return (
    <section className="rounded-2xl border border-zinc-200 bg-zinc-100/70 p-4 sm:p-6 dark:border-zinc-800 dark:bg-zinc-900/70">
      <p className="font-mono text-[11px] tracking-[0.14em] text-zinc-400">
        {label}
      </p>
      <ol className="mt-5 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
        {nodes.map((node, index) => (
          <li key={node} className="contents">
            <span className="min-w-0 flex-1 rounded-xl border border-zinc-200 bg-white px-3 py-3 text-center font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300">
              {node}
            </span>
            {index < nodes.length - 1 && (
              <span aria-hidden="true" className="self-center text-emerald-600">
                <span className="sm:hidden">↓</span>
                <span className="hidden sm:inline">→</span>
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
