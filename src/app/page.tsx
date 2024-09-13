import { Auth } from "@/components/auth";
import { Logo } from "@/components/logo";
import Link from "next/link";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-8 mt-7 lg:px-6 h-14 flex items-center">
        <Logo />
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {" "}
          <Auth />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Ultimate Ai Markeitng Bot
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our platform offers a suitable of powerful tools to help you
                    gen ai ads.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Faster Iteration</h3>
                  <p className="text-muted-foreground">
                    Automate your workflow with continuous integration and
                    delivery.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">More Innovation</h3>
                  <p className="text-muted-foreground">
                    Let your team focus on shipping features instead of managing
                    infrastructure.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Scalable</h3>
                  <p className="text-muted-foreground">
                    Deploy to the cloud with a single click and scale with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
