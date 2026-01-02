import { TrailMarkerIcon } from '@packages/base/components/icons/camping-icons';
import type { Dictionary } from '@packages/i18n';
import { TrendingDown, TrendingUp } from 'lucide-react';

type StatsProps = {
  dictionary: Dictionary;
};

export const Stats = ({ dictionary }: StatsProps) => (
  <div className="w-full py-20 lg:py-40 bg-muted/30">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left side - title and description */}
        <div className="flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <TrailMarkerIcon className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              Trail Milestones
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-3xl tracking-tight md:text-4xl lg:text-5xl lg:max-w-xl">
              {dictionary.web.home.stats.title}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed lg:max-w-md md:text-lg">
              {dictionary.web.home.stats.description}
            </p>
          </div>
        </div>

        {/* Right side - stats grid */}
        <div className="flex items-center justify-center">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            {dictionary.web.home.stats.items.map((item, index) => {
              const isPositive = Number.parseFloat(item.delta) > 0;
              return (
                <div
                  className="group relative flex flex-col justify-between gap-4 rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 overflow-hidden"
                  key={index}
                >
                  {/* Subtle gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10 flex items-center justify-between">
                    <div
                      className={`inline-flex p-2 rounded-lg ${
                        isPositive
                          ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                          : 'bg-red-500/10 text-red-600 dark:text-red-400'
                      }`}
                    >
                      {isPositive ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        isPositive
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-red-600 dark:text-red-400'
                      }`}
                    >
                      {isPositive ? '+' : ''}
                      {item.delta}%
                    </span>
                  </div>

                  <div className="relative z-10 flex flex-col gap-1">
                    <h3 className="font-bold text-3xl tracking-tight md:text-4xl">
                      {item.type === 'currency' && '$'}
                      {new Intl.NumberFormat().format(
                        Number.parseFloat(item.metric)
                      )}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </div>
);
