import { env } from '@/env';
import { AuthModal } from '../components/auth-modal';
import { Button } from '@packages/base/components/ui/button';
import { Check, Minus, MoveRight, PhoneCall } from 'lucide-react';
import Link from 'next/link';

const Pricing = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="flex flex-col gap-2">
          <h2 className="max-w-xl text-center font-regular text-3xl tracking-tighter md:text-5xl">
            Prices that make sense!
          </h2>
          <p className="max-w-xl text-center text-lg text-muted-foreground leading-relaxed tracking-tight">
            Managing a small business today is already tough.
          </p>
        </div>
        <div className="grid w-full grid-cols-3 divide-x pt-20 text-left lg:grid-cols-4">
          <div className="col-span-3 lg:col-span-1" />
          <div className="flex flex-col gap-2 px-3 py-1 md:px-6 md:py-4">
            <p className="text-2xl">Startup</p>
            <p className="text-muted-foreground text-sm">
              Our goal is to streamline SMB trade, making it easier and faster
              than ever for everyone and everywhere.
            </p>
            <p className="mt-8 flex flex-col gap-2 text-xl lg:flex-row lg:items-center">
              <span className="text-4xl">$40</span>
              <span className="text-muted-foreground text-sm"> / month</span>
            </p>
            <AuthModal
              defaultTab="sign-up"
              title="Start with Startup Plan"
              description="Create your account to get started with our Startup plan."
              redirectTo={env.NEXT_PUBLIC_DASHBOARD_URL}
            >
              <Button variant="outline" className="mt-8 gap-4">
                Try it <MoveRight className="h-4 w-4" />
              </Button>
            </AuthModal>
          </div>
          <div className="flex flex-col gap-2 px-3 py-1 md:px-6 md:py-4">
            <p className="text-2xl">Growth</p>
            <p className="text-muted-foreground text-sm">
              Our goal is to streamline SMB trade, making it easier and faster
              than ever for everyone and everywhere.
            </p>
            <p className="mt-8 flex flex-col gap-2 text-xl lg:flex-row lg:items-center">
              <span className="text-4xl">$40</span>
              <span className="text-muted-foreground text-sm"> / month</span>
            </p>
            <AuthModal
              defaultTab="sign-up"
              title="Start with Growth Plan"
              description="Create your account to get started with our Growth plan."
              redirectTo={env.NEXT_PUBLIC_DASHBOARD_URL}
            >
              <Button className="mt-8 gap-4">
                Try it <MoveRight className="h-4 w-4" />
              </Button>
            </AuthModal>
          </div>
          <div className="flex flex-col gap-2 px-3 py-1 md:px-6 md:py-4">
            <p className="text-2xl">Enterprise</p>
            <p className="text-muted-foreground text-sm">
              Our goal is to streamline SMB trade, making it easier and faster
              than ever for everyone and everywhere.
            </p>
            <p className="mt-8 flex flex-col gap-2 text-xl lg:flex-row lg:items-center">
              <span className="text-4xl">$40</span>
              <span className="text-muted-foreground text-sm"> / month</span>
            </p>
            <Button variant="outline" className="mt-8 gap-4" asChild>
              <Link href="/contact">
                Contact us <PhoneCall className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">
            <b>Features</b>
          </div>
          <div />
          <div />
          <div />
          {/* New Line */}
          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">SSO</div>
          <div className="flex items-center justify-center px-3 py-4 lg:px-6">
            <Check className="h-4 w-4" />
          </div>
          <div className="flex items-center justify-center px-3 py-4 lg:px-6">
            <Check className="h-4 w-4" />
          </div>
          <div className="flex items-center justify-center px-3 py-4 lg:px-6">
            <Check className="h-4 w-4" />
          </div>
          {/* New Line */}
          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">
            Advanced Analytics
          </div>
          <div className="flex items-center justify-center px-3 py-4 lg:px-6">
            <Minus className="h-4 w-4" />
          </div>
          <div className="flex items-center justify-center px-3 py-4 lg:px-6">
            <Check className="h-4 w-4" />
          </div>
          <div className="flex items-center justify-center px-3 py-4 lg:px-6">
            <Check className="h-4 w-4" />
          </div>
          {/* New Line */}
          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">
            Priority Support
          </div>
          <div className="flex items-center justify-center px-3 py-4 lg:px-6">
            <Minus className="h-4 w-4" />
          </div>
          <div className="flex items-center justify-center px-3 py-4 lg:px-6">
            <Minus className="h-4 w-4" />
          </div>
          <div className="flex items-center justify-center px-3 py-4 lg:px-6">
            <Check className="h-4 w-4" />
          </div>
          {/* New Line */}
          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">
            Custom Integrations
          </div>
          <div className="flex items-center justify-center px-3 py-4 lg:px-6">
            <Minus className="h-4 w-4" />
          </div>
          <div className="flex items-center justify-center px-3 py-4 lg:px-6">
            <Minus className="h-4 w-4" />
          </div>
          <div className="flex items-center justify-center px-3 py-4 lg:px-6">
            <Check className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Pricing;
