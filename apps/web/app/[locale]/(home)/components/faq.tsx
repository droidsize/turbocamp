import { CompassIcon, LanternIcon } from '@packages/base/components/icons/camping-icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@packages/base/components/ui/accordion';
import { Button } from '@packages/base/components/ui/button';
import type { Dictionary } from '@packages/i18n';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

type FAQProps = {
  dictionary: Dictionary;
};

export const FAQ = ({ dictionary }: FAQProps) => (
  <div className="w-full py-20 lg:py-40 bg-muted/30">
    <div className="container mx-auto">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left side - Title and CTA */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <CompassIcon className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                Trail Guide
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="max-w-xl font-semibold text-3xl tracking-tight md:text-4xl lg:text-5xl">
                {dictionary.web.home.faq.title}
              </h4>
              <p className="max-w-md text-base text-muted-foreground leading-relaxed md:text-lg">
                {dictionary.web.home.faq.description}
              </p>
            </div>
          </div>

          {/* CTA card */}
          <div className="relative p-6 rounded-xl border border-border/50 bg-card overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <LanternIcon className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-semibold">Need more guidance?</h5>
                  <p className="text-sm text-muted-foreground">
                    Our trail guides are here to help
                  </p>
                </div>
              </div>
              <Button
                variant="camping"
                className="gap-2 glow-neon w-full sm:w-fit"
                asChild
              >
                <Link href="/contact">
                  {dictionary.web.home.faq.cta}
                  <MoveRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Right side - Accordion */}
        <div className="flex flex-col gap-4">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {dictionary.web.home.faq.items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`index-${index}`}
                className="border border-border/50 rounded-xl px-6 bg-card data-[state=open]:border-primary/30 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors py-5 [&[data-state=open]]:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </div>
);
