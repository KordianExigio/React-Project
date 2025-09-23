export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Moja Strona. Wszelkie prawa zastrzeżone.
        </p>
        <div className="mt-2 space-x-4">
          <a href="/polityka-prywatnosci" className="hover:text-white">
            Polityka prywatności
          </a>
          <a href="/kontakt" className="hover:text-white">
            Kontakt
          </a>
        </div>
      </div>
    </footer>
  );
}
