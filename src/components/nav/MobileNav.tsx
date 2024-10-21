import Link from "next/link";
import { AuthModal } from "@/components/authModal/AuthModal";
import { navLinks } from "@/components/nav/nav-links";

export const MobileNav = ({ isOpen }) => {
  return (
    <div
      className="lg:hidden fixed w-full h-[100dvh] bg-white z-50 left-0 top-[76.36px]"
      style={{
        transform: `translateX(${isOpen ? "0" : "-100%"})`,
        transition: "transform 0.3s ease"
      }}
    >
      <div className="mt-10 flex flex-col gap-4 items-center justify-center">
        {navLinks.map(i => {
          return <Link key={i.id} href={i.href}>{i.title}</Link>;
        })}
        <Link href={"https://docs.blessed.fan"}>Docs</Link>
        <AuthModal authType="onboarding" />
      </div>
    </div>
  );
};
