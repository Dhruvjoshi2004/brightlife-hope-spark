import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Trophy, ChevronLeft, ChevronRight } from "lucide-react";

interface Donor {
  name: string;
  amount: number;
}

interface DonatorState {
  donors: Donor[];
  totalAmount: number;
}

const DUMMY_DONORS: Donor[] = [
  { name: "Sarah Jenkins", amount: 250 },
  { name: "Global Giving Corp", amount: 1500 },
  { name: "Michael Chen", amount: 5000 },
  { name: "Priya Sharma", amount: 120 },
  { name: "James Wilson", amount: 3200 },
  { name: "Emily Rodriguez", amount: 800 },
  { name: "Fatima Al-Hassan", amount: 2750 },
  { name: "David Kim", amount: 450 },
  { name: "Olivia Brown", amount: 1800 },
  { name: "Raj Patel", amount: 600 },
  { name: "Anna Müller", amount: 950 },
  { name: "Carlos Mendez", amount: 4200 },
  { name: "Lisa Thompson", amount: 375 },
  { name: "Ahmed Youssef", amount: 1100 },
  { name: "Sophie Martin", amount: 2000 },
];

const ITEMS_PER_PAGE = 5;

const DonorCarousel = ({ donors }: { donors: Donor[] }) => {
  const sorted = [...donors].sort((a, b) => b.amount - a.amount);
  const totalPages = Math.ceil(sorted.length / ITEMS_PER_PAGE);
  const [page, setPage] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextPage = useCallback(() => {
    setPage((p) => (p + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setPage((p) => (p - 1 + totalPages) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    if (totalPages <= 1) return;
    timerRef.current = setInterval(nextPage, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [totalPages, nextPage]);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(nextPage, 4000);
  };

  const currentDonors = sorted.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE
  );

  const getRankBadge = (globalIndex: number) => {
    if (globalIndex === 0) return "🥇";
    if (globalIndex === 1) return "🥈";
    if (globalIndex === 2) return "🥉";
    return null;
  };

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Trophy size={16} className="text-yellow-400" />
          <h4 className="font-bold text-primary-foreground text-sm uppercase tracking-widest">
            Top Donors
          </h4>
        </div>
        {totalPages > 1 && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => { prevPage(); resetTimer(); }}
              className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <ChevronLeft size={16} className="text-primary-foreground" />
            </button>
            <span className="text-xs text-primary-foreground/40 font-medium min-w-[40px] text-center">
              {page + 1}/{totalPages}
            </span>
            <button
              onClick={() => { nextPage(); resetTimer(); }}
              className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <ChevronRight size={16} className="text-primary-foreground" />
            </button>
          </div>
        )}
      </div>

      <div className="relative overflow-hidden min-h-[280px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="flex flex-col gap-3"
          >
            {currentDonors.map((d, i) => {
              const globalIndex = page * ITEMS_PER_PAGE + i;
              const badge = getRankBadge(globalIndex);
              return (
                <div
                  key={`${d.name}-${d.amount}`}
                  className={`flex justify-between items-center p-4 rounded-xl border transition-colors ${
                    globalIndex < 3
                      ? "bg-yellow-400/10 border-yellow-400/20"
                      : "bg-primary-foreground/5 border-primary-foreground/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-primary-foreground/40 w-6 text-center">
                      {badge || `#${globalIndex + 1}`}
                    </span>
                    <span className="font-medium text-primary-foreground">{d.name}</span>
                  </div>
                  <span className="text-yellow-400 font-bold">${d.amount.toLocaleString()}</span>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-1.5 mt-4">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setPage(i); resetTimer(); }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === page ? "w-6 bg-yellow-400" : "w-1.5 bg-primary-foreground/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const BrightLifeDonation = () => {
  const [donator, setDonator] = useState<DonatorState>({
    donors: DUMMY_DONORS,
    totalAmount: DUMMY_DONORS.reduce((sum, d) => sum + d.amount, 0),
  });

  const [form, setForm] = useState({ name: "", amount: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.amount) return;

    const newAmount = parseFloat(form.amount);
    if (isNaN(newAmount) || newAmount <= 0) return;

    setDonator((prev) => ({
      donors: [{ name: form.name, amount: newAmount }, ...prev.donors],
      totalAmount: prev.totalAmount + newAmount,
    }));
    setForm({ name: "", amount: "" });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section id="donate" className="py-24 bg-emerald-950 overflow-hidden relative">
      <div className="container-main grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        {/* Left side - stats & donor carousel */}
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-primary-foreground">
            Fuel the <span className="text-yellow-400">Change</span>
          </h2>
          <p className="text-primary-foreground/50 text-lg mb-12 max-w-md">
            Your contribution goes directly to the field. 100% transparency. 100% impact.
          </p>

          <div className="bg-emerald-900/50 p-6 rounded-2xl border border-emerald-900">
            <div className="text-sm text-primary/80 uppercase tracking-widest font-bold mb-1">
              Total Raised
            </div>
            <div className="text-5xl font-display font-bold text-yellow-400">
              ${donator.totalAmount.toLocaleString()}
            </div>
            <div className="text-xs text-primary-foreground/40 mt-1">
              from {donator.donors.length} generous donors
            </div>
          </div>

          <DonorCarousel donors={donator.donors} />
        </div>

        {/* Right side - donation form */}
        <div className="bg-card rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative lg:sticky lg:top-28">
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 bg-card rounded-[2.5rem] flex items-center justify-center z-10"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Heart size={40} className="text-primary" fill="currentColor" />
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">Your donation makes a difference.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <h3 className="text-2xl font-display font-bold text-foreground mb-6">Make a Donation</h3>
          <form onSubmit={handleDonate} className="space-y-5">
            <div>
              <label className="block text-sm font-bold mb-2 text-muted-foreground uppercase tracking-wider">
                Full Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-accent border-none focus:ring-2 focus:ring-primary transition-all text-foreground outline-none"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-muted-foreground uppercase tracking-wider">
                Amount ($)
              </label>
              <input
                type="number"
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-accent border-none focus:ring-2 focus:ring-primary transition-all text-foreground outline-none"
                placeholder="50.00"
                min="1"
              />
            </div>
            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center gap-3 text-lg"
            >
              Complete Donation <Heart size={20} fill="currentColor" />
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Secure 256-bit encrypted transaction.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BrightLifeDonation;
