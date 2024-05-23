"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

type PaginationProps = {
  lenght: number;
  href: string;
};

const PaginationItem = ({ lenght, href }: PaginationProps) => {
  const paginationLength = lenght;
  const pagination = Array.from(
    { length: paginationLength },
    (_, index) => index + 1,
  );

  const searchParams = useSearchParams();

  const pageNumber = parseInt(searchParams.get("page") || "1");

  return (
    <Pagination>
      <PaginationContent>
        {pagination.map(
          (num) =>
            num > pageNumber - 2 &&
            num < pageNumber + 5 && (
              <Link key={num} href={`/${href}?page=${num}`}>
                <Button variant={num === pageNumber ? "accent" : "ghost"}>
                  {num}
                </Button>
              </Link>
            ),
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationItem;
