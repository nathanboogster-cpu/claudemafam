// A simple initials avatar for team members — no photo has been supplied
// for any groomer, so this renders a profile-picture-style placeholder
// instead of a stock photo presented as a real headshot.
export function TeamAvatar({ name, className = "" }: { name: string; className?: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center rounded-full bg-bb-coral-dark font-bb-display text-2xl font-bold text-white ${className}`}
    >
      {initials}
    </div>
  );
}
