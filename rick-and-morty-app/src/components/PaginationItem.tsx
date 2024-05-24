"use client";

import { Pagination, PaginationContent } from "@/components/ui/pagination";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

type PaginationProps = {
  paginationLength: number;
  href: string;
};

const PaginationItem = ({ paginationLength, href }: PaginationProps) => {
  const searchParams = useSearchParams();
  const pageNumber = parseInt(searchParams.get("page") || "1");

  const startPage = Math.max(1, Math.min(pageNumber - 3, paginationLength - 6));
  const endPage = Math.min(paginationLength, startPage + 6);

  const pagination = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index,
  );

  return (
    <Pagination>
      <PaginationContent className="mt-4">
        {pagination.map((num) => (
          <Link key={num} href={`/${href}?page=${num}`}>
            <Button variant={num === pageNumber ? "default" : "accent"}>
              {num}
            </Button>
          </Link>
        ))}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationItem;
