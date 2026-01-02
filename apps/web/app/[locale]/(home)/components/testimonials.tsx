'use client';

import { CampfireIcon } from '@packages/base/components/icons/camping-icons';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@packages/base/components/ui/avatar';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@packages/base/components/ui/carousel';
import type { Dictionary } from '@packages/i18n';
import { Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

type TestimonialsProps = {
  dictionary: Dictionary;
};

export const Testimonials = ({ dictionary }: TestimonialsProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12">
          {/* Section header */}
          <div className="flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <CampfireIcon className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                Campfire Stories
              </span>
            </div>
            <h2 className="font-semibold text-3xl tracking-tight md:text-4xl lg:text-5xl lg:max-w-xl">
              {dictionary.web.home.testimonials.title}
            </h2>
          </div>

          {/* Testimonials carousel */}
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {dictionary.web.home.testimonials.items.map((item, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div className="group relative flex aspect-video h-full flex-col justify-between rounded-xl border border-border/50 bg-card p-6 lg:col-span-2 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 overflow-hidden">
                    {/* Subtle gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Quote icon */}
                    <div className="relative z-10">
                      <Quote className="h-8 w-8 text-primary/40" />
                    </div>

                    <div className="relative z-10 flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Author */}
                      <div className="flex items-center gap-3 pt-2 border-t border-border/50">
                        <Avatar className="h-10 w-10 ring-2 ring-primary/20">
                          <AvatarImage src={item.author.image} />
                          <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                            {item.author.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">
                            {item.author.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Trailblazer
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Carousel indicators */}
          <div className="flex items-center justify-center gap-2">
            {dictionary.web.home.testimonials.items.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`h-2 rounded-full transition-all ${
                  current === index
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-primary/30 hover:bg-primary/50'
                }`}
                onClick={() => {
                  api?.scrollTo(index);
                  setCurrent(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
