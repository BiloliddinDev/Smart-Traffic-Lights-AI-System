import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AdminHome() {
  return (
    <main className="container py-10 flex flex-col items-center justify-center !mt-10">
      <h1 className="text-2xl font-bold mb-6">🚦 Admin Panel</h1>

      <div className="space-y-4">
        <p>
          👋 Xush kelibsiz! Quyidagi tugmalar orqali svetaforlar ustida
          ishlashingiz mumkin.
        </p>

        <div className="flex  items-center justify-center gap-4">
          <Link to="/create-light">
            <Button variant="default">➕ Yangi svetafor qo‘shish</Button>
          </Link>

          <Link to="/lights">
            <Button variant="outline">📋 Barcha svetaforlar ro‘yxati</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
