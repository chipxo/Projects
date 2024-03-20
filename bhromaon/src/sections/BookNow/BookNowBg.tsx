import Image from "@/components/ui/image";

const BookNowBg = ({ second = false }) => (
  <>
    <Image
      src={
        second
          ? "https://s3-alpha-sig.figma.com/img/e9e3/bd12/46763e7e8c9ab256363331cdd32af0a9?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=is5PSdX4fgKge2M5bdSO4Go8RjWqLFUe1IddbB2wExBmr7mapo55~CwX2aWhCvUsKPa17JNoLnysCWnPtEP~X0Dmtm834CeO7d9ZbyShSDgRJ1nnkfYevuoIgX0LAJ2W8u~PkPFWKOpGCIs3Tbhnxi7-LTu5Dvf9svhiONx68a7XFgfZW0-V3iaXdShpHs35MiQqwmOuqihtJy0RiPXyQlpmJx4yssd4P--L-pnQ~PFhJgPGlIgowQYMT~FBMAereOpd0aNmnz4VykpcY9japaAWhpoBHGK5xYZokDy36TOMVa-XPRV-1bCJBxm5R3~VrkfLJEu4rijKPGam2f9POw__"
          : "https://s3-alpha-sig.figma.com/img/8110/432e/1dbd74211bdd2a31e8900a0eb9c49f47?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dDNrfUWnColQkipioghrQFV-Bv2uFtgLNk2oA6JxSzZFUAjvmxaCu4JOGAxEtR~W27f~7nt82S36NNwIOo4BUctJoZotcK9PuB4lPYobMdi6MwaFQLrL7UXZN81MEdBEvu8JA0wrY7TsF7DCQQb1C3K6mSiAXPfcblgB5cmgYTuMGG-mLsnsr-hAxQEEpCAW6usqrSyvoFPk4pUk2KwvlwG-~lUwiYvGCOGfDZaLUSktNSzxGu7AaCHRKKdvqhCoweyv-rUKqGrCisiCjrMJiJqQcWZIjYid2dS0D~udrV4fpxxGypwc0zOSibLPUoJYf44XOJN6J72-Ea4ojkLh0g__"
      }
      alt=""
      variant="bg"
    />
  </>
);

export default BookNowBg;
