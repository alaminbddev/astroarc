/* === FILE: components/Footer.tsx === */
export default function Footer() {
  return (
    <footer className="text-center py-6 border-t border-gray-700 mt-20 text-sm text-gray-500">
      &copy; {new Date().getFullYear()} AstroArc. All rights reserved.
    </footer>
  );
}
