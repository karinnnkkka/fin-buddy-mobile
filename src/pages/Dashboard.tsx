import SpendingOverview from "@/components/Dashboard/SpendingOverview";
import CategoryChart from "@/components/Dashboard/CategoryChart";
import BottomNavigation from "@/components/Layout/BottomNavigation";
import { Button } from "@/components/ui/button";
import { Calendar, Filter } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <p className="text-primary-foreground/80">Track your finances</p>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" className="bg-white/20 text-white border-0 hover:bg-white/30">
              <Calendar size={16} />
            </Button>
            <Button variant="secondary" size="sm" className="bg-white/20 text-white border-0 hover:bg-white/30">
              <Filter size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <SpendingOverview />
        <CategoryChart />
        
        {/* Recent Transactions Preview */}
        <div className="bg-card rounded-xl p-4 border border-border">
          <h3 className="font-semibold mb-3">Recent Transactions</h3>
          <div className="space-y-3">
            {[
              { name: "Coffee Shop", amount: -4.50, category: "Food", date: "Today" },
              { name: "Bus Ticket", amount: -2.75, category: "Transport", date: "Yesterday" },
              { name: "Part-time Job", amount: 120.00, category: "Income", date: "2 days ago" },
            ].map((transaction, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div>
                  <p className="font-medium">{transaction.name}</p>
                  <p className="text-sm text-muted-foreground">{transaction.category} • {transaction.date}</p>
                </div>
                <p className={`font-bold ${transaction.amount < 0 ? 'text-destructive' : 'text-success'}`}>
                  {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Dashboard;