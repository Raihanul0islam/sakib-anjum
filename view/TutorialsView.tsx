"use client";

import React, { useState } from "react";
import { FEATURED_LESSONS, GUIDED_BUILDS } from "@/constants/tutorials/catalog";
import { TutorialsDesktop, type Filter } from "@/components/features/tutorials/TutorialsDesktop";
import { TutorialsStacked } from "@/components/features/tutorials/TutorialsStacked";

export function TutorialsView() {
  const [filter, setFilter] = useState<Filter>("all");
  const match = (c: string) => filter === "all" || c === filter;
  const lessons = FEATURED_LESSONS.filter((l) => match(l.category));
  const props = {
    filter,
    onFilter: setFilter,
    featured: lessons.find((l) => l.number === "01"),
    alternating: lessons.filter((l) => l.number !== "01"),
    builds: GUIDED_BUILDS.filter((b) => match(b.category)),
  };

  return (
    <>
      <TutorialsDesktop {...props} />
      <TutorialsStacked {...props} />
    </>
  );
}
