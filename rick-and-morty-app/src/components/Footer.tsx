const Footer = () => {
  return (
    <footer className="relative bg-footer bg-cover bg-center">
      <div className="bg-background/60 py-6">
        <div className="container">
          <h2 className="mb-3 text-center text-2xl">
            Hi, My name is Serhii Chyipesh!
          </h2>
          <nav>
            <ul className="text-lg">
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
              <li>
                <p>
                  Tech stack I've used: Next.js, TypeScript, TailwindCSS,
                  Shadcn/ui, Axios
                </p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
