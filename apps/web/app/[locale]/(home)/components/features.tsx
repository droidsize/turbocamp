import {
  BinocularsIcon,
  CompassIcon,
  MapIcon,
  ShieldTentIcon,
} from '@packages/base/components/icons/camping-icons';
import type { Dictionary } from '@packages/i18n';

type FeaturesProps = {
  dictionary: Dictionary;
};

// Map of camping-themed icons for features
const featureIcons = [
  CompassIcon, // Navigate Complexity
  BinocularsIcon, // Scout Ahead
  MapIcon, // Charted Paths
  ShieldTentIcon, // Base Camp Security
];

export const Features = ({ dictionary }: FeaturesProps) => (
  <div className="w-full py-20 lg:py-40 bg-background">
    <div className="container mx-auto">
      <div className="flex flex-col gap-12">
        {/* Section header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              Expedition Toolkit
            </span>
          </div>
          <div className="flex flex-col gap-3 max-w-2xl">
            <h2 className="font-semibold text-3xl tracking-tight md:text-4xl lg:text-5xl">
              {dictionary.web.home.features.title}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
              {dictionary.web.home.features.description}
            </p>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 - Large card */}
          <div className="group relative flex aspect-square h-full flex-col justify-between rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 lg:col-span-2 lg:aspect-auto overflow-hidden">
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                {(() => {
                  const Icon = featureIcons[0];
                  return <Icon className="h-6 w-6" />;
                })()}
              </div>
            </div>
            <div className="relative z-10 flex flex-col gap-2">
              <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                {dictionary.web.home.features.items[0].title}
              </h3>
              <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
                {dictionary.web.home.features.items[0].description}
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative flex aspect-square flex-col justify-between rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                {(() => {
                  const Icon = featureIcons[1];
                  return <Icon className="h-6 w-6" />;
                })()}
              </div>
            </div>
            <div className="relative z-10 flex flex-col gap-2">
              <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                {dictionary.web.home.features.items[1].title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {dictionary.web.home.features.items[1].description}
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative flex aspect-square flex-col justify-between rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                {(() => {
                  const Icon = featureIcons[2];
                  return <Icon className="h-6 w-6" />;
                })()}
              </div>
            </div>
            <div className="relative z-10 flex flex-col gap-2">
              <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                {dictionary.web.home.features.items[2].title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {dictionary.web.home.features.items[2].description}
              </p>
            </div>
          </div>

          {/* Feature 4 - Large card */}
          <div className="group relative flex aspect-square h-full flex-col justify-between rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 lg:col-span-2 lg:aspect-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                {(() => {
                  const Icon = featureIcons[3];
                  return <Icon className="h-6 w-6" />;
                })()}
              </div>
            </div>
            <div className="relative z-10 flex flex-col gap-2">
              <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                {dictionary.web.home.features.items[3].title}
              </h3>
              <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
                {dictionary.web.home.features.items[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
