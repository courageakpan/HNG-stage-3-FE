// components/shared/CategoryHeader.tsx
"use client";

import React from "react";

interface CategoryHeaderProps {
  title: string;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ title }) => {
  return (
    <section className="bg-[#000000] text-white text-center py-20 md:py-24">
      <h1 className="text-3xl md:text-5xl font-bold tracking-widest uppercase">
        {title}
      </h1>
    </section>
  );
};

export default CategoryHeader;
