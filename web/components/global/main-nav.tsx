// components/main-nav.tsx
'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDown,
  BookOpen,
  Target,
  LayoutTemplate,
  Bitcoin,
  ShieldCheck,
  Bot,
  Handshake,
  Menu,
  X,
  User,
  // Sun, // Removed
  // Moon, // Removed
  // Laptop, // Removed
  LucideIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// --- TYPES ---
interface DropdownLink {
  href: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

interface NavItemWithDropdown {
  label: string;
  dropdown: true;
  links: DropdownLink[];
}

interface NavItemWithLink {
  label: string;
  dropdown: false;
  href: string;
}

type NavItem = NavItemWithDropdown | NavItemWithLink;
export function MainNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Đã xóa state showSignIn vì chuyển sang link trực tiếp

  // Khóa cuộn trang khi mở menu mobile
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Dữ liệu menu
  // EN: Navigation menu items
  const navItems: NavItem[] = [
    { label: "Решения", dropdown: false, href: "/done-for-you" }, // EN: Solutions
    {
      label: "Контент", // EN: Content
      dropdown: true,
      links: [
        { href: "/blog", label: "Блог", description: "Экспертные статьи", icon: BookOpen }, // EN: Blog / In-depth articles
        { href: "/use-cases", label: "Кейсы", description: "Примеры реального применения", icon: Target }, // EN: Use Cases / Real-world examples
        { href: "/templates", label: "Шаблоны", description: "Готовые шаблоны", icon: LayoutTemplate }, // EN: Templates / Ready-made templates
        { href: "/legal", label: "Правовая информация", description: "Юридическая информация", icon: ShieldCheck }, // EN: Legal / Legal information
      ]
    },
    { label: "Обновления", dropdown: false, href: "/changelog" }, // EN: Change log
    { label: "Цены", dropdown: false, href: "/pricing" }, // EN: Pricing
  ];
  
  // Dữ liệu menu

  return (
    <>
      {/* --- NAVBAR CHÍNH --- */}
      <div className="sticky top-0 z-40 w-full bg-white border-b border-gray-100">
        <div className="flex h-20 items-center justify-between px-6 lg:px-8 lg:pl-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <div className="flex text-black text-2xl font-bold tracking-tighter">
              <img src="/logooriagent.svg" alt="Oriagent Logo" className="h-10 w-auto mr-2" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="group flex items-center gap-1 text-gray-600 hover:text-black transition-colors outline-none focus:ring-0">
                      {item.label}
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                        align="start" 
                        sideOffset={15} 
                        className="w-[400px] p-4 bg-white rounded-xl shadow-lg border border-gray-100"
                    >
                      <div className="grid grid-cols-2 gap-2">
                        {item.links.map((link) => (
                          <DropdownMenuItem key={link.href} asChild>
                            <Link href={link.href} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer outline-none select-none">
                              <div className="mt-0.5 text-gray-500">
                                <link.icon className="h-5 w-5" strokeWidth={1.5} />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-gray-900">{link.label}</div>
                                <p className="text-xs text-gray-500 mt-0.5 font-normal leading-snug">{link.description || link.label}</p>
                              </div>
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link href={item.href} className="text-gray-600 hover:text-black transition-colors">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Nút Sign In - Dẫn link ngoài */}
            <Link href="https://app.oriagent.com/signin" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="bg-transparent border-zinc-400 text-zinc-800 hover:bg-zinc-900 hover:text-white rounded-full px-6 h-9 text-sm font-normal transition-all"
              >
                {/* EN: Sign In */}
                Войти
              </Button>
            </Link>
          </div>

          {/* Кнопка Sign In убрана */}}

          {/* Mobile Menu Trigger */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-black z-50"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] flex justify-end h-[100dvh]">
          {/* 1. Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* 2. Drawer */}
          <div className="relative flex flex-col w-[85%] max-w-[350px] h-[100dvh] bg-white shadow-2xl animate-in slide-in-from-right duration-300 overflow-y-auto">

            {/* Close Button */}
            <div className="flex justify-end p-5 pt-6 shrink-0">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="group rounded-full border border-gray-300 p-1.5 hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6 text-gray-600 group-hover:text-black" strokeWidth={1.5} />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 px-8 pb-2">
              <div className="space-y-6">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.dropdown ? (
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-black  tracking-wider">
                          {item.label}
                        </h3>
                        <div className="space-y-5 pl-2 ml-1">
                          {item.links.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-4 text-[16px] font-normal text-gray-800 hover:text-primary transition-colors"
                            >
                              <link.icon className="h-5 w-5 text-gray-500" strokeWidth={1.5} />
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="pt-0 mb-3">
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-lg font-medium text-black hover:text-gray-700"
                        >
                          {item.label}
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* === FOOTER (Sign In Button Mobile) === */}
            <div className="mt-auto shrink-0 px-8 pb-8 pt-6 border-t border-gray-100 bg-white">
              <Link 
                href="https://app.oriagent.com/signin"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)} // Đóng menu khi bấm chuyển trang
                className="w-full block"
              >
                <Button
                  className="w-full rounded-full border border-gray-200 bg-white text-black hover:bg-gray-50 h-12 text-base font-normal shadow-sm flex items-center justify-center gap-2 
                            transition-all"
                  variant="outline"
                >
                  <User className="h-4 w-4" strokeWidth={1.5} />
                  {/* EN: Sign In */}
                  Войти
                </Button>
              </Link>
            </div>

          </div>
        </div>
      )}
    </>
  );
}