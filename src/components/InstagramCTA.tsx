import { InstagramIcon } from "@/components/SocialIcons";

export function InstagramCTA() {
  return (
    <section className="py-14 bg-background border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] text-white">
            <InstagramIcon className="h-7 w-7" />
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-heading">Follow Us for Live Cases</h2>
        <p className="mt-2 text-muted-foreground max-w-md mx-auto">
          See real patient transformations, clinic updates, and dental care tips on our Instagram.
        </p>
        <a
          href="https://www.instagram.com/drbushraofficial_sl_sr_sc/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-5 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <InstagramIcon className="h-4 w-4" />
          @drbushraofficial_sl_sr_sc
        </a>
      </div>
    </section>
  );
}
