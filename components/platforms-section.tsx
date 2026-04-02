const platforms = [
  { name: "Netflix", color: "bg-red-600" },
  { name: "Amazon Prime Video", color: "bg-blue-500" },
  { name: "Youtube Movies", color: "bg-red-500" },
  { name: "Apple TV+", color: "bg-gray-800" },
  { name: "Hotstar", color: "bg-blue-900" },
  { name: "SonyLIV", color: "bg-black" },
  { name: "Crunchyroll", color: "bg-orange-500" },
];

export function PlatformsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Works where you watch
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent hover:shadow-md"
              >
                <span className={`h-3 w-3 rounded-full ${platform.color}`} />
                {platform.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
