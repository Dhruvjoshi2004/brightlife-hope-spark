import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

interface Donor {
  name: string;
  amount: number;
}

interface DonatorState {
  donors: Donor[];
  totalAmount: number;
}

const BrightLifeDonation = () => {
  const [donator, setDonator] = useState<DonatorState>({
    donors: [
      { name: "Sarah Jenkins", amount: 250 },
      { name: "Global Giving Corp", amount: 1500 },
    ],
    totalAmount: 1750,
  });

  const [form, setForm] = useState({ name: "", amount: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.amount) return;

    const newAmount = parseFloat(form.amount);
    if (isNaN(newAmount) || newAmount <= 0) return;

    setDonator((prev) => ({
      donors: [{ name: form.name, amount: newAmount }, ...prev.donors].slice(0, 5),
      totalAmount: prev.totalAmount + newAmount,
    }));
    setForm({ name: "", amount: "" });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section id="donate" className="py-24 bg-emerald-950 overflow-hidden relative">
      <div className="container-main grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-primary-foreground">
            Fuel the <span className="text-yellow-400">Change</span>
          </h2>
          <p className="text-primary-foreground/50 text-lg mb-12 max-w-md">
            Your contribution goes directly to the field. 100% transparency. 100% impact.
          </p>

          <div className="space-y-6">
            <div className="bg-emerald-900/50 p-6 rounded-2xl border border-emerald-900">
              <div className="text-sm text-primary/80 uppercase tracking-widest font-bold mb-1">
                Total Raised
              </div>
              <div className="text-5xl font-display font-bold text-yellow-400">
                ${donator.totalAmount.toLocaleString()}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-primary/60 uppercase text-xs tracking-widest">
                Recent Heroes
              </h4>
              <div className="flex flex-col gap-3">
                <AnimatePresence mode="popLayout">
                  {donator.donors.map((d, i) => (
                    <motion.div
                      key={`${d.name}-${d.amount}-${i}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex justify-between items-center bg-primary-foreground/5 p-4 rounded-xl border border-primary-foreground/10"
                    >
                      <span className="font-medium text-primary-foreground">{d.name}</span>
                      <span className="text-yellow-400 font-bold">+${d.amount}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative">
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
