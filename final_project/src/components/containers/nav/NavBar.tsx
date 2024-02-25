import { RootState } from "@/app/rootReducer";
import { useAppDispatch } from "@/app/store";
import Logo from "@/components/common/Logo";
import Search from "@/features/searchBar/Search";
import { fetchCategories } from "@/hooks/fetchCategories";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import BurgerBar from "../burger/BurgerBar";
import AsideBar from "./AsideBar";
import CategoriesNav from "./CategoriesNav";

const NavBar = () => {
  const dispatch = useAppDispatch();

  const { categories } = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <nav className="container rounded-b-md py-2">
      <ul className="grid max-h-[80px] grid-cols-[60px_1fr_0.1fr_0.1fr] place-items-center gap-x-4 sm:grid-cols-[60px_1fr_0.1fr_0.1fr] md:grid-cols-[80px_1fr_0.28fr] lg:grid-cols-[100px_0.22fr_1fr_0.28fr]">
        <Logo />

        <CategoriesNav categories={categories} />

        <div className="w-full xl:pr-4">
          <Search />
        </div>

        <AsideBar />

        <BurgerBar />
      </ul>
    </nav>
  );
};

export default NavBar;
