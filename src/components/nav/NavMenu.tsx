"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navLinks } from "@/components/nav/nav-links";

export const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="py-3 px-4 rounded-[6.2rem]">
            Product
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col w-[15rem] gap-3 p-4 md:w-[17rem] lg:w-[21rem]">
              {" "}
              {navLinks.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {/* {component.description} */}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <Link href="/about-us" legacyBehavior passHref>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              "py-3 px-4 rounded-[6.2rem]"
            )}
          >
            About us
          </NavigationMenuLink>
        </Link>
        <NavigationMenuItem>
          <Link href="/pricing" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "py-3 px-4 rounded-[6.2rem]"
              )}
            >
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground rounded-[99px] focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
