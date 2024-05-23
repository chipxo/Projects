const Footer = () => {
  return (
    <footer className="bg-accent/90">
      <div className="container py-6">
        <h2 className="mb-3 text-center text-2xl">
          Hi, My name is Serhii Chyipesh!
        </h2>
        <nav>
          <ul>
            <li>
              <a href="mailto:chiypesh200059@gmail.com">
                Email me: chiypesh200059@gmail.com
              </a>
            </li>
            <li>
              <a href="https://github.com/chipxo">My GitHub</a>
            </li>
            <li>
              <a href="https://rickandmortyapi.com/">
                Link to API: https://rickandmortyapi.com/
              </a>
            </li>
          </ul>
        </nav>

        <p>
          Tech stack I've used: Next.js, TypeScript, TailwindCSS, Shadcn/ui,
          Axios
        </p>
      </div>
    </footer>
  );
};

export default Footer;
