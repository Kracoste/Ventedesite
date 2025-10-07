import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Avis clients"
          title="Ils nous confient leur présence en ligne"
          description="Nous travaillons main dans la main avec dirigeants, équipes marketing et CTO pour livrer des sites qui ont de l&apos;impact."
          alignment="center"
          className="mx-auto max-w-3xl"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-neutral-200 bg-white/80 p-6 text-sm shadow-card dark:border-neutral-800 dark:bg-neutral-900/80"
            >
              <blockquote className="text-neutral-700 dark:text-neutral-200">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="space-y-1 text-neutral-500 dark:text-neutral-400">
                <p className="font-semibold text-neutral-900 dark:text-neutral-50">
                  {testimonial.author}
                </p>
                <p>
                  {testimonial.role} · {testimonial.company}
                </p>
                {testimonial.highlight ? (
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-600">
                    {testimonial.highlight}
                  </p>
                ) : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
