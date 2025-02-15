export function Footer() {
    return (
      <footer className="mt-12 border-t border-gray-300 py-6 text-center text-gray-600 max-w-3xl m-auto">
        <div className="container mx-auto px-6">
          <p className="text-sm font-mono">© 2025 Nguyễn Văn Đức. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="https://github.com/dducnv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dducnv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:contact.ducnv@gmail.com"
              className="hover:text-black transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    );
  }
  