"use client";
import Footer from "./components/footer";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import Image from "next/image";
import React from "react";
import Loading from "./loading";
import { usePathname } from "next/navigation";
// whitefish font
const whitefishFont = localFont({
  src: [
    {
      path: "/fonts/Whitefish.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Whitefish.ttf",
      weight: "00",
      style: "normal",
    },
  ],
  variable: "--font-whitefish", // Use a CSS variable for easier application
  display: "swap", // Ensures fallback fonts are used until the custom font loads
});

// Brice font
const briceFont = localFont({
  src: [
    {
      path: "/fonts/Brice/Brice-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Brice/Brice-SemiBold.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Brice/Brice-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-brice", // Use a CSS variable for easier application
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbarRef = React.useRef<any>(null);
  const [showArrow, setShowArrow] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [showLayout, setShowLayout] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setShowLayout(pathname == "/" ? false : true);
    loaderFunction();
  }, [pathname]);

  const loaderFunction = () => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  };

  React.useEffect(() => {
    loaderFunction();
  }, []);

  // Use the IntersectionObserver API to detect when the Navbar is in view
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Show arrow when Navbar is out of view
        setShowArrow(!entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (navbarRef.current) {
      observer.observe(navbarRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (navbarRef.current) {
        observer.unobserve(navbarRef.current);
      }
    };
  }, []);

  // Function to scroll to the top (navbar)
  const scrollToTop = () => {
    if (navbarRef.current) {
      navbarRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <html lang="en">
      <body
        className={`${whitefishFont.variable} ${briceFont.variable} antialiased flex flex-col relative`}
      >
        {/* Layout UI */}
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {showLayout && (
              <div className="w-full" ref={navbarRef}>
                <Navbar />
              </div>
            )}
            <main className="z-[1] top-0">{children}</main>
            {showArrow && showLayout && (
              <Image
                onClick={scrollToTop}
                src="/Images/layout-top-arrow.webp"
                alt="_toTop"
                width={100}
                height={100}
                className="z-[11] w-16 h-16 xl:w-24 xl:h-24 fixed right-3 md:right-12 bottom-3 cursor-pointer max-w-[100px] max-h-[100px]"
              />
            )}
            {showLayout && <Footer />}
          </>
        )}
      </body>
    </html>
  );
}
