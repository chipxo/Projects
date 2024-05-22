import { Pagination, PaginationContent } from "@/components/ui/pagination";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

  return (
    <Pagination>
      <PaginationContent>
        {pagination.map((num) => (
          <Link key={num} href={`/${href}?page=${num}`}>
            <Button variant="accent">{num}</Button>
          </Link>
        ))}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationItem;
