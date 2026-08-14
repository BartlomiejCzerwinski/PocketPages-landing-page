import { ownerConfirmationItems } from "@/config/site";

export function VerificationNotice() {
  return (
    <aside className="rounded-[2rem] border border-dashed border-[color:var(--gold)] bg-[color:rgba(188,150,90,0.08)] p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ink)]">
        Owner confirmation still required
      </p>
      <p className="mt-3 text-sm leading-7 text-[color:var(--muted-ink)]">
        This draft intentionally leaves production-only legal and business
        details as placeholders until they are confirmed.
      </p>
      <ul className="mt-4 space-y-2 text-sm leading-7 text-[color:var(--muted-ink)]">
        {ownerConfirmationItems.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
