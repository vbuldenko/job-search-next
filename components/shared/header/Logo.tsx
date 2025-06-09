import { APP_NAME } from "@/lib/constants";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
    >
      {APP_NAME}
    </Link>
  );
}
