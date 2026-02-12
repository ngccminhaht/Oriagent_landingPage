// components/footer.tsx

import Link from "next/link";
import React from "react";

// Định nghĩa dữ liệu cho các cột liên kết trong Footer
const footerLinks = [
  {
    title: "Продукт", // EN: Product
    links: [
      { label: "Возможности", href: "/features" }, // EN: Features
      { label: "Цены", href: "/pricing" }, // EN: Pricing
      { label: "Обновления", href: "/changelog" }, // EN: Updates
      { label: "Интеграции", href: "/integrations" } // EN: Integrations
    ]
  },
  {
    title: "Компания", // EN: Company
    links: [
      { label: "О нас", href: "/about" }, // EN: About Us
      { label: "Карьера", href: "/careers" }, // EN: Careers
      { label: "Блог", href: "/blog" }, // EN: Blog
      { label: "Контакты", href: "/contact" } // EN: Contact
    ]
  },
  {
    title: "Правовая информация", // EN: Legal
    links: [
      { label: "Политика конфиденциальности", href: "/privacy" }, // EN: Privacy Policy
      { label: "Условия использования", href: "/terms" }, // EN: Terms of Service
      { label: "Настройки cookie", href: "/cookies" } // EN: Cookie Settings
    ]
  },
];

export function Footer() {
  return (
    // Footer: có đường viền trên, padding và nền xám nhạt
    <footer className="border-t py-12 bg-gray-50 mt-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Lưới (Grid) chính của Footer */}
        {/* Chia thành 5 cột trên màn hình lớn: 1 (Logo) + 3 (Menu) + 1 (Trống/Tùy chọn) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

          {/* Cột 1: Logo và Mô tả */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">✨ AI Agent</h3>
            {/* EN: Get more done without doing more. */}
            <p className="text-sm text-gray-600">
              Делайте больше, не делая лишнего.
            </p>
          </div>

          {/* Các cột liên kết (Sử dụng vòng lặp map) */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4 text-black">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-black transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bản quyền (Copyright) */}
        {/* EN: All rights reserved. */}
        <div className="mt-12 pt-6 border-t text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} AI Agent. Все права защищены.
        </div>
      </div>
    </footer>
  );
}