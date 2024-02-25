import { mFLoatMenu } from "@/utils/motionSettings";
import { motion as m } from "framer-motion";

const NoItemsAdded = () => (
  <m.div
    {...mFLoatMenu}
    style={{ x: "-70%" }}
    className="absolute left-1/2 top-11"
  >
    <div className="absolute -top-6 z-[999] h-8 w-full bg-transparent" />
    <div className="w-max rounded-md border bg-background px-12 py-6 drop-shadow-2xl">
      <p className="text-lg">No items added</p>
    </div>
  </m.div>
);

export default NoItemsAdded;
